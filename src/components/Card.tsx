export interface Photo {
  id: number
  width: number
  height: number
  src: {
    medium: string
    small: string
  }
  alt: string
  photographer: string
  avg_color: string
}

interface CardProps {
  data: Photo
}

export const Card = ({ data }: CardProps) => {
  return (
    <article className="w-full h-fit rounded-lg">
      <figure
        className="rounded-xl"
        style={{ backgroundColor: data.avg_color }}
      >
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
