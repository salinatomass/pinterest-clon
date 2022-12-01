export const randomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const queries = [
  'background',
  'people',
  'music',
  'design',
  'nature',
  'technology',
]
const colors = [
  'black',
  'turquoise',
  'green',
  'white',
  'gray',
  'violet',
  'brown',
]
const bgColors = [
  'bg-gray-200',
  'bg-gray-300',
  'bg-gray-400',
  'bg-gray-500',
  'bg-gray-600',
  'bg-gray-700',
  'bg-gray-800',
]
const heights = ['h-44', 'h-64', 'h-72', 'h-80', 'h-96']

export const randomQuery = () => queries[randomNum(0, queries.length - 1)]

export const randomColor = () => colors[randomNum(0, colors.length - 1)]

export const randomBgColor = () => bgColors[randomNum(0, colors.length - 1)]

export const randomHeight = () => heights[randomNum(0, heights.length - 1)]
