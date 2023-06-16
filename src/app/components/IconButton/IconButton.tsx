import { FC, ReactNode } from "react"

type IconButtonProps = {
  children: ReactNode
  className?: string
  onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
