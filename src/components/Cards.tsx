import { Card } from './Card'
import { LoadingCard } from './LoadingCard'
import { Photo } from './type'

interface CardsProps {
  list: Photo[]
  loading: boolean
}

export const Cards = ({ list, loading }: CardsProps) => {
  const firstColumnList = list.filter((ph, i) => i % 5 === 0)
  const secondColumnList = list.filter((ph, i) => (i - 1) % 5 === 0)
  const thirdColumnList = list.filter((ph, i) => (i - 2) % 5 === 0)
  const fourthColumnList = list.filter((ph, i) => (i - 3) % 5 === 0)
  const fifthColumnList = list.filter((ph, i) => (i - 4) % 5 === 0)

  const loaders = [1, 2, 3, 4, 5, 6]

  return (
    <main className="max-w-7xl w-full m-auto grid grid-cols-5 gap-x-5 px-6">
      {list.length > 0 && (
        <>
          <div className="flex flex-col gap-7">
            {firstColumnList.map(ph => (
              <Card key={ph.id} data={ph} />
            ))}
            {loading && loaders.map(id => <LoadingCard key={id} />)}
          </div>
          <div className="flex flex-col gap-7">
            {secondColumnList.map(ph => (
              <Card key={ph.id} data={ph} />
            ))}
            {loading && loaders.map(id => <LoadingCard key={id} />)}
          </div>
          <div className="flex flex-col gap-7">
            {thirdColumnList.map(ph => (
              <Card key={ph.id} data={ph} />
            ))}
            {loading && loaders.map(id => <LoadingCard key={id} />)}
          </div>
          <div className="flex flex-col gap-7">
            {fourthColumnList.map(ph => (
              <Card key={ph.id} data={ph} />
            ))}
            {loading && loaders.map(id => <LoadingCard key={id} />)}
          </div>
          <div className="flex flex-col gap-7">
            {fifthColumnList.map(ph => (
              <Card key={ph.id} data={ph} />
            ))}
            {loading && loaders.map(id => <LoadingCard key={id} />)}
          </div>
        </>
      )}
    </main>
  )
}
