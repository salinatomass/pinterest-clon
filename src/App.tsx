import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Photo } from './components/Card'

// const listCards: CardInterface[] = [
//   {
//     id: 1,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/236x/d2/6c/f1/d26cf1d1d2cc6b0af0f3a34be65eab1a.jpg',
//   },
//   {
//     id: 2,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
//   },
//   {
//     id: 3,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
//   },
//   {
//     id: 4,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
//   },
//   {
//     id: 5,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
//   },
//   {
//     id: 6,
//     title: 'Clean Minimal Resume',
//     username: 'salinatomass',
//     image:
//       'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
//   },
// ]

const API_URL = 'https://api.pexels.com/v1/curated'
const API_KEY = '563492ad6f91700001000001f64483cd0ec24a9e97c1465937ec74ee'

function App() {
  const [list, setList] = useState<Photo[]>([])

  const getData = async () => {
    const config = {
      headers: { Authorization: API_KEY },
    }
    const { data } = await axios.get(API_URL + '?per_page=30', config)

    setList(data.photos)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-screen h-screen">
      <Header />
      <Cards list={list} />
    </div>
  )
}

export default App
