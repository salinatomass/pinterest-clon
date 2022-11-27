export interface CardInterface {
  id: number
  title: string
  username: string
  image: string
}

interface CardProps {
  data: CardInterface
}

export const Card = ({ data }: CardProps) => {
  return (
    <article className="w-full h-fit bg-red-200 rounded-lg">
      <figure className="rounded-lg overflow-hidden">
        <img src={data.image} alt="" />
      </figure>
      <div className="p-2 space-y-2">
        <h4 className="text-xl">Gradient 1</h4>
        <p className="text-sm">Usuario: salinatomass</p>
      </div>
    </article>
  )
}
