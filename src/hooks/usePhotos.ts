import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getData } from '../utils/getData'
import { errMessage } from '../utils/errMessage'
import { randomQuery, randomColor } from '../utils/random'

import { PhotoApiResponse } from '../components/type'

interface PhotosState {
  loading: boolean
  list: PhotoApiResponse['photos']
  nextPage: PhotoApiResponse['next_page']
  error: string
}

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const DEFAULT_PER_PAGE = 30

const initialPhotosState = {
  loading: true,
  list: [],
  nextPage: `${API_URL}/search/?query=${randomQuery()}&color=${randomColor()}`,
  error: '',
}

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotosState>(initialPhotosState)

  const { ref, inView } = useInView({ rootMargin: '200px' })

  const loadPhotos = async () => {
    if (!photos.nextPage) return

    try {
      setPhotos(prevState => ({ ...prevState, loading: true }))

      const data = await getData({
        uri: photos.nextPage,
        apiKey: API_KEY,
        perPage: DEFAULT_PER_PAGE,
      })

      setPhotos(prevState => ({
        loading: false,
        list: [...prevState.list, ...data.photos],
        nextPage: data.next_page || '',
        error: '',
      }))
    } catch (err: any) {
      setPhotos(prevState => ({
        ...prevState,
        loading: false,
        error: err.message,
      }))
    }
  }

  const reset = () => {
    setPhotos(initialPhotosState)
  }

  const searchPhotos = async (query: string) => {
    if (!query) return reset()

    try {
      setPhotos(prevState => ({ ...prevState, loading: true }))

      const uri = `${API_URL}/search?query=${query}`
      const data = await getData({
        uri,
        apiKey: API_KEY,
        perPage: DEFAULT_PER_PAGE,
      })

      if (data.photos.length === 0)
        setPhotos({
          loading: false,
          list: [],
          nextPage: initialPhotosState.nextPage,
          error: errMessage.notFound,
        })
      else if (data.photos.length < 30)
        setPhotos({
          loading: false,
          list: data.photos,
          nextPage: initialPhotosState.nextPage,
          error: errMessage.notTooMany,
        })
      else
        setPhotos({
          loading: false,
          list: data.photos,
          nextPage: data.next_page || API_URL,
          error: '',
        })
    } catch (err: any) {
      setPhotos(prevState => ({
        ...prevState,
        loading: false,
        error: err.message,
      }))
    }
  }

  useEffect(() => {
    if (inView) loadPhotos()
  }, [inView])

  return { photos, triggerRef: ref, searchPhotos, reset }
}
