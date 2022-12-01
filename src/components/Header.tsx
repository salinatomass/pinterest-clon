import { useState } from 'react'
import { debounce } from 'lodash'
import { Modal } from './Modal'

import { Logo } from './Icons'

import { BiSearch as SearchIcon } from 'react-icons/bi'
import { IoNotificationsSharp as NotificationIcon } from 'react-icons/io5'
import { AiFillMessage as MessageIcon } from 'react-icons/ai'
import { BsChevronDown as Chevron } from 'react-icons/bs'

interface HeaderProps {
  onSearch: (q: string) => void
  onReset: () => void
}

interface ModalState {
  isOpen: boolean
  title: 'Contact' | 'Developer'
}

export const Header = ({ onSearch, onReset }: HeaderProps) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: 'Contact',
  })

  const handleSearch = debounce(e => {
    const query = e.target.value
    onSearch(query)
  }, 1500)

  const handleModal = (title: ModalState['title']) => {
    setModal({ isOpen: true, title })
  }

  const closeModal = () =>
    setModal(prevState => ({ ...prevState, isOpen: false }))

  return (
    <header className="max-w-7xl w-full m-auto flex items-center justify-center lg:justify-between py-4 px-6">
      <div className="h-fit flex items-center">
        <figure
          className="w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={onReset}
        >
          <Logo />
        </figure>
        <button
          className="hidden lg:block h-full py-3 px-5 bg-black text-white font-bold rounded-3xl"
          type="button"
          onClick={onReset}
        >
          Home
        </button>
      </div>
      <div className="flex items-center gap-2 w-4/5 lg:w-3/5 bg-gray-200 rounded-full py-4 px-5">
        <SearchIcon className="w-6 h-6 text-gray-500" />
        <input
          className="w-full bg-transparent outline-0 placeholder:text-gray-500"
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
      <div className="hidden lg:flex items-center">
        <button
          className="NavIcon NotificationBtn relative w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={e => e.currentTarget.classList.add('notify')}
          onAnimationEnd={e => e.currentTarget.classList.remove('notify')}
        >
          <NotificationIcon className="w-7 h-7 text-gray-500" />
          <span className="NavIcon-info hidden absolute z-10 -bottom-10 -left-[16px] bg-black p-2 rounded-xl text-white text-xs">
            Notifications
          </span>
        </button>
        <button
          className="NavIcon relative w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={() => handleModal('Contact')}
        >
          <MessageIcon className="w-7 h-7 text-gray-500" />
          <span className="NavIcon-info hidden absolute z-10 -bottom-10 -left-[4px] bg-black p-2 rounded-xl text-white text-xs">
            Contact
          </span>
        </button>
        <button
          className="NavIcon relative w-fit p-3 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={() => handleModal('Developer')}
        >
          <span className="w-7 h-7 flex items-center justify-center text-xs bg-gray-200 rounded-full">
            T
          </span>
          <span className="NavIcon-info hidden absolute z-10 -bottom-10 -left-[10px] bg-black p-2 rounded-xl text-white text-xs">
            Developer
          </span>
        </button>
        <button
          className="NavIcon relative w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={e => e.currentTarget.classList.toggle('turn')}
        >
          <Chevron className="w-4 h-4 text-gray-900 font-bold" />
          <span className="NavIcon-info hidden absolute z-10 -bottom-[52px] -left-[30px] bg-black p-2 rounded-xl text-white text-xs">
            Options
          </span>
        </button>
      </div>
      <Modal open={modal.isOpen} title={modal.title} closeModal={closeModal} />
    </header>
  )
}
