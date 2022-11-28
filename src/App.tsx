import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './App.css'

import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { getData } from './utils/getData'

import { PhotoApiResponse } from './components/type'

interface PhotosState {
  loading: boolean
  list: PhotoApiResponse['photos']
  nextPage: PhotoApiResponse['next_page']
}

const API_URL = 'https://api.pexels.com/v1/curated'
const API_KEY = '563492ad6f91700001000001f64483cd0ec24a9e97c1465937ec74ee'

function App() {
  const [photos, setPhotos] = useState<PhotosState>({
    loading: true,
    list: [],
    nextPage: API_URL,
  })

  const { ref, inView } = useInView({ rootMargin: '250px' })

  const loadPhotos = async () => {
    setPhotos(prevState => ({ ...prevState, loading: true }))

    const data = await getData({ uri: photos.nextPage, apiKey: API_KEY })

    setPhotos(prev => ({
      loading: false,
      list: [...prev.list, ...data.photos],
      nextPage: data.next_page || API_URL,
    }))
  }

  useEffect(() => {
    if (inView) loadPhotos()
  }, [inView])

  return (
    <div className="w-screen h-screen">
      <Header />
      <Cards list={photos.list} loading={photos.loading} />
      <footer className="w-full h-5" ref={ref}></footer>
    </div>
  )
}

export default App
