import { Photo } from './type'

interface CardProps {
  data: Photo
}

export const Card = ({ data }: CardProps) => {
  return (
    <article className="w-full h-fit rounded-lg">
      <figure>
        <img
          className="w-full object-cover rounded-xl"
          src={data.src.medium}
          alt={data.alt}
        />
      </figure>
      <h4 className="p-2 space-y-2 text-sm font-semibold">
        {data.photographer}
      </h4>
    </article>
  )
}
