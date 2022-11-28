import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './App.css'

import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { getData } from './utils/getData'

import { PhotoApiResponse } from './components/type'
import { LoadingCard } from './components/LoadingCard'
import { BiLoaderAlt as Loader } from 'react-icons/bi'

interface PhotosState {
  loading: boolean
  list: PhotoApiResponse['photos']
  nextPage: PhotoApiResponse['next_page']
  error: string
}

const API_URL = 'https://api.pexels.com/v1/curated'
const API_KEY = '563492ad6f91700001000001f64483cd0ec24a9e97c1465937ec74ee'

function App() {
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

  return (
    <div className="w-screen h-screen">
      <Header />
      <Cards list={photos.list} loading={photos.loading} />
      <footer className="w-full h-5 flex justify-center pt-10" ref={ref}>
        {photos.loading && <Loader className="w-10 h-10 animate-spin" />}
        {photos.error && (
          <p className="text-lg">
            We are having problems, please try again later.
          </p>
        )}
      </footer>
    </div>
  )
}

export default App
