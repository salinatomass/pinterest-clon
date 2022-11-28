import { randomNum } from '../utils/randomNum'

export const LoadingCard = () => {
  const heights = ['h-44', 'h-64', 'h-72', 'h-80', 'h-96']
  const colors = [
    'bg-gray-200',
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-500',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
  ]

  const randomHeight = heights[randomNum(heights.length - 1, 0)]
  const randomColor = colors[randomNum(colors.length - 1, 0)]

  return (
    <article
      className={`w-full h-96 rounded-lg ${randomHeight} ${randomColor}`}
    ></article>
  )
}
