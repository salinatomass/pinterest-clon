import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getData } from '../utils/getData'

import { PhotoApiResponse } from '../components/type'

interface PhotosState {
  loading: boolean
  list: PhotoApiResponse['photos']
  nextPage: PhotoApiResponse['next_page']
  error: string
}

const API_URL = 'https://api.pexels.com/v1/curated'
const API_KEY = '563492ad6f91700001000001f64483cd0ec24a9e97c1465937ec74ee'

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotosState>({
    loading: true,
    list: [],
    nextPage: API_URL,
    error: '',
  })

  const { ref, inView } = useInView({ rootMargin: '200px' })

  const loadPhotos = async () => {
    try {
      setPhotos(prevState => ({ ...prevState, loading: true }))

      const data = await getData({ uri: photos.nextPage, apiKey: API_KEY })

      setPhotos(prevState => ({
        loading: false,
        list: [...prevState.list, ...data.photos],
        nextPage: data.next_page || API_URL,
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

  useEffect(() => {
    if (inView) loadPhotos()
  }, [inView])

  return { photos, triggerRef: ref }
}
