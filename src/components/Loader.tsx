import { BiLoaderAlt as LoaderIcon } from 'react-icons/bi'

interface LoaderProps {
  loading: boolean
}

export const Loader = ({ loading }: LoaderProps) => {
  return (
    <div className="flex justify-center">
      {loading && <LoaderIcon className="w-10 h-10 animate-spin mb-5" />}
    </div>
  )
}
