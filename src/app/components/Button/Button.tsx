import { FC } from "react"
import style from "./button.module.scss"
import cn from "classnames"
import { ButtonType, ButtonVariant } from "@/enums/button"

type Props = {
  id?: string
  text: string
  onClick: () => void
  type?: Lowercase<keyof typeof ButtonType>
  variant: Lowercase<keyof typeof ButtonVariant>
}

const Button: FC<Props> = ({
  id,
  text,
  onClick,
  type = ButtonType.Button,
  variant
}) => {
  return (
    <button
      id={id}
      className={cn(style.button, {
        [style.purple]: variant === ButtonVariant.Purple
      })}
      type={type}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
