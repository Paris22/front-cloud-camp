import { FC } from "react"
import IconButton from "../../IconButton/IconButton"
import style from "./modalHeader.module.scss"
import cn from "classnames"
import { ModalType } from "@/enums/modal"
import ExitIcon from "@assets/exitButton.svg"

type ModalHeaderProps = {
  type: Lowercase<keyof typeof ModalType>
  onClick: () => void
}

const ModalHeader: FC<ModalHeaderProps> = ({ type, onClick }) => {
  return (
    <div
      className={cn(style.header, {
        [style.success]: type === ModalType.Success,
        [style.error]: type === ModalType.Error
      })}
    >
      <h2>
        {type === ModalType.Success ? "Форма успешно отправлена" : "Ошибка"}
      </h2>
      {type === ModalType.Error && (
        <IconButton onClick={onClick}>
          <img src={ExitIcon} alt="exit-icon" />
        </IconButton>
      )}
    </div>
  )
}

export default ModalHeader
