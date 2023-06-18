import { FC, memo } from "react"
import cn from "classnames"

import style from "./Button.module.scss"

type TButtonProps = {
  id: string
  type: "button" | "submit" | "reset"
  children: React.ReactNode | string
  variant?: "contained" | "outlined"
  onClick: (event?: React.MouseEvent<HTMLElement>) => void | unknown
  disabled?: boolean
}

const Button: FC<TButtonProps> = ({
  id,
  type,
  variant,
  children,
  onClick,
  disabled = false
}) => {
  const buttonClassName = cn(
    style.container,
    variant ? style[variant] : style.contained,
    { [style.disabled]: disabled }
  )

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  )
}

export default memo(Button)
