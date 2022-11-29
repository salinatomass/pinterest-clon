import './App.css'

import { usePhotos } from './hooks/usePhotos'
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'

import { Toaster } from 'react-hot-toast'

function App() {
  const { photos, triggerRef, searchPhotos } = usePhotos()

  const { list, loading, error } = photos

  return (
    <div className="w-full h-screen">
      <Header onSearch={q => searchPhotos(q)} />
      <Loader loading={loading} />
      <Cards list={list} loading={loading} />
      <Footer error={error} triggerRef={triggerRef} />
      <Toaster />
    </div>
  )
}

export default App
