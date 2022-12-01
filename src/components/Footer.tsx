import { errMessage } from '../utils/errMessage'

interface FooterProps {
  error: string
  triggerRef: (node?: Element | null | undefined) => void
}

export const Footer = ({ error, triggerRef }: FooterProps) => {
  if (error === errMessage.notFound)
    return (
      <footer className="w-full h-5 flex justify-center pt-10">
        <p className="text-lg text-center">{error} Please try again.</p>
      </footer>
    )

  if (error === errMessage.notTooMany) return <footer></footer>

  return (
    <footer className="w-full h-5 flex justify-center pt-10" ref={triggerRef}>
      {error && <p className="text-lg text-center">{errMessage.errorServer}</p>}
    </footer>
  )
}
