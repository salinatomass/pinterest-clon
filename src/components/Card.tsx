import toast from 'react-hot-toast'
import { Photo } from './type'

import { FiArrowUpRight as ArrowIcon } from 'react-icons/fi'
import { MdOutlineFileUpload as ShareIcon } from 'react-icons/md'

interface CardProps {
  data: Photo
}

export const Card = ({ data }: CardProps) => {
  const handleSharing = async () => {
    const shareDetails: ShareData = {
      title: 'Pinterest Clon',
      text: 'What do you think?',
      url: data.src.original || data.src.medium,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareDetails)
      } catch (err) {
        console.log(err)
      }
    } else {
      navigator.clipboard.writeText(data.src.original || data.src.medium)
      toast.success('Link copied to clipboard')
    }
  }

  return (
    <article className="w-full h-fit rounded-lg">
      <figure className="relative card-image">
        <img
          className="w-full object-cover rounded-xl"
          src={data.src.medium}
          alt={data.alt}
        />

        <div className="hidden absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-black/[.7] rounded-xl text-white py-3 px-2 cursor-zoom-in">
          <a
            href={data.src.large || data.src.medium}
            target="_blank"
            className="self-end w-fit h-fit py-3 px-5 bg-red-600 text-white font-bold rounded-3xl cursor-pointer"
          >
            Download
          </a>
          <div className="flex justify-between items-center">
            <a
              href={data.photographer_url}
              target="_blank"
              className="flex items-center bg-white/[.8] rounded-full py-1 px-3 cursor-pointer"
            >
              <ArrowIcon className="text-black text-md text-bold mr-1" />
              <span className="text-black text-md text-bold">author</span>
            </a>
            <button
              className="bg-white/[.8] rounded-full p-1 cursor-pointer"
              onClick={handleSharing}
            >
              <ShareIcon className="text-black text-2xl text-bold" />
            </button>
          </div>
        </div>
      </figure>
      <h4 className="p-2 space-y-2 text-sm font-semibold">
        {data.photographer}
      </h4>
    </article>
  )
}
