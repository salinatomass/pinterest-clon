import './App.css'

import { usePhotos } from './hooks/usePhotos'
import { Header } from './components/Header'
import { Cards } from './components/Cards'

import { BiLoaderAlt as Loader } from 'react-icons/bi'

function App() {
  const { photos, triggerRef } = usePhotos()

  const { list, loading, error } = photos

  return (
    <div className="w-screen h-screen">
      <Header />
      <Cards list={list} loading={loading} />
      <footer className="w-full h-5 flex justify-center pt-10" ref={triggerRef}>
        {loading && <Loader className="w-10 h-10 animate-spin" />}
        {error && (
          <p className="text-lg">
            We are having problems, please try again later.
          </p>
        )}
      </footer>
    </div>
  )
}

export default App
