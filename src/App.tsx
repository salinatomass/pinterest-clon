import './App.css'

import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { CardInterface } from './components/Card'

const listCards: CardInterface[] = [
  {
    id: 1,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/236x/d2/6c/f1/d26cf1d1d2cc6b0af0f3a34be65eab1a.jpg',
  },
  {
    id: 2,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
  },
  {
    id: 3,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
  },
  {
    id: 4,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
  },
  {
    id: 5,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
  },
  {
    id: 6,
    title: 'Clean Minimal Resume',
    username: 'salinatomass',
    image:
      'https://i.pinimg.com/564x/ca/e8/11/cae811470197c6fcb46602bb015d5795.jpg',
  },
]

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Cards list={listCards} />
    </div>
  )
}

export default App
