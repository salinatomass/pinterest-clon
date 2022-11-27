import { Card, CardInterface } from './Card'

interface CardsProps {
  list: CardInterface[]
}

export const Cards = ({ list }: CardsProps) => {
  return (
    <main className="max-w-6xl w-full m-auto grid grid-cols-5 gap-x-5">
      <div className="flex flex-col gap-7">
        <Card data={list[0]} />
        <Card data={list[1]} />
        <Card data={list[2]} />
      </div>
      <div className="flex flex-col gap-7">
        <Card data={list[3]} />
        <Card data={list[5]} />
        <Card data={list[0]} />
      </div>
      <div className="flex flex-col gap-7">
        <Card data={list[0]} />
        <Card data={list[5]} />
        <Card data={list[0]} />
      </div>
      <div className="flex flex-col gap-7">
        <Card data={list[5]} />
        <Card data={list[0]} />
        <Card data={list[5]} />
      </div>
      <div className="flex flex-col gap-7">
        <Card data={list[0]} />
        <Card data={list[0]} />
        <Card data={list[5]} />
      </div>
    </main>
  )
}
