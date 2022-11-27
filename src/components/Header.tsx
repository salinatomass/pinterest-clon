import { Logo } from './Icons'
import { BiSearch as SearchIcon } from 'react-icons/bi'
import { IoNotificationsSharp as NotificationIcon } from 'react-icons/io5'
import { AiFillMessage as MessageIcon } from 'react-icons/ai'
import { BsChevronDown as Chevron } from 'react-icons/bs'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <div className="h-fit flex items-center">
        <figure className="w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer">
          <Logo />
        </figure>
        <button
          className="h-full py-3 px-5 bg-black text-white font-bold rounded-3xl"
          type="button"
        >
          Home
        </button>
      </div>
      <div className="flex items-center gap-2 w-3/5 bg-gray-200 rounded-full py-4 px-5">
        <SearchIcon className="w-6 h-6 text-gray-500" />
        <input
          className="w-full bg-transparent outline-0 placeholder:text-gray-500"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        <button className="w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer">
          <NotificationIcon className="w-7 h-7 text-gray-500" />
        </button>
        <button className="w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer">
          <MessageIcon className="w-7 h-7 text-gray-500" />
        </button>
        <button className="w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer">
          <span className="w-7 h-7 flex items-center justify-center text-xs bg-gray-200 rounded-full">
            T
          </span>
        </button>
        <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded-full cursor-pointer">
          <Chevron className="w-4 h-4 text-gray-900 font-bold" />
        </button>
      </div>
    </header>
  )
}
