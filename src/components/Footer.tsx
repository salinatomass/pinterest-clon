interface FooterProps {
  error: string
  triggerRef: (node?: Element | null | undefined) => void
}

export const Footer = ({ error, triggerRef }: FooterProps) => {
  return (
    <footer className="w-full h-5 flex justify-center pt-10" ref={triggerRef}>
      {error && (
        <p className="text-lg">
          We are having problems, please try again later.
        </p>
      )}
    </footer>
  )
}
