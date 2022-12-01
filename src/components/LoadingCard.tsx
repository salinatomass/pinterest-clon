import { randomHeight, randomBgColor } from '../utils/random'

export const LoadingCard = () => {
  return (
    <article
      className={`w-full h-96 rounded-lg ${randomHeight()} ${randomBgColor()}`}
    ></article>
  )
}
