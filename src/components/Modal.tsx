import Avatar from '../assets/salinatomass.png'
import {
  FiArrowUpRight as ArrowIcon,
  FiTwitter as TwitterIcon,
  FiLinkedin as LinkedinIcon,
  FiGithub as GithubICon,
} from 'react-icons/fi'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

interface ModalProps {
  open: boolean
  title: 'Contact' | 'Developer'
  closeModal: () => void
}

const ContactSection = () => (
  <div className="text-center mt-10">
    <h4 className="text-neutral-900 text-xl font-bold mb-2">Wanna talk?</h4>
    <p>
      You can find me in my social networks <br /> as{' '}
      <span className="text-teal-400 font-bold">@salinatomass</span>
    </p>
    <ul className="flex items-center justify-center gap-4 mt-4">
      <li>
        <a href="https://twitter.com/salinatomass" target="_blank">
          <TwitterIcon className="text-3xl text-neutral-900" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/salinatomass/" target="_blank">
          <LinkedinIcon className="text-3xl text-neutral-900" />
        </a>
      </li>
      <li>
        <a href="https://github.com/salinatomass" target="_blank">
          <GithubICon className="text-3xl text-neutral-900" />
        </a>
      </li>
    </ul>
  </div>
)

const DeveloperSection = () => (
  <div className="text-center mt-8">
    <h4 className="text-neutral-900 text-xl font-bold mb-2">App info</h4>
    <p className="w-4/5 m-auto">
      This project was developed using React and the Pexels API.
    </p>

    <div className="flex flex-col items-center mt-3">
      <a
        href="https://github.com/salinatomass/pinterest-clon"
        target="_blank"
        className="text-lg text-gray-900 flex items-center"
      >
        <GithubICon className="mr-1" />
        <span className="hover:underline">Repository</span>
      </a>
      <a
        href="https://www.pexels.com/api/"
        target="_blank"
        className="text-lg text-gray-900 flex items-center"
      >
        <ArrowIcon className="mr-1" />
        <span className="hover:underline">API documentation</span>
      </a>
    </div>
  </div>
)

export const Modal = ({ open, title, closeModal }: ModalProps) => {
  const modalDisplay = open ? 'block' : 'none'

  return (
    <aside
      className="fixed top-0 right-0 w-96 h-full bg-white z-20 rounded-t-3xl shadow-2xl py-6 px-4"
      style={{ marginTop: '75px', display: modalDisplay }}
    >
      <div className="relative">
        <button className="absolute top-0 right-0" onClick={closeModal}>
          <CloseIcon className="text-3xl text-neutral-800" />
        </button>
        <h3 className="text-center text-lg font-semibold text-neutral-900">
          {title}
        </h3>
        <div className="flex flex-col items-center text-center mt-20">
          <img
            className="w-24 h-24 rounded-full"
            src={Avatar}
            alt="Tomas Salina picture, avatar"
          />
          <h2 className="text-3xl font-bold text-neutral-900 my-2">
            Tomas Salina
          </h2>
          <a
            href="https://salinatomass.netlify.app"
            target="_blank"
            className="text-md text-gray-600 flex items-center"
          >
            <ArrowIcon /> Portfolio
          </a>
        </div>
        {title === 'Contact' ? <ContactSection /> : <DeveloperSection />}
      </div>
    </aside>
  )
}
