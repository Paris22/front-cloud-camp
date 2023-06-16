import { FC } from "react"
import style from "./modalFooter.module.scss"
import { ModalType } from "@/enums/modal"
import Button from "../../Button/Button"
import { ButtonVariant } from "@/enums/button"

type ModalFooterProps = {
  type: Lowercase<keyof typeof ModalType>
  onClick: () => void
}

const ModalFooter: FC<ModalFooterProps> = ({ type, onClick }) => {
  return (
    <div className={style.modalFooter}>
      {type === ModalType.Success ? (
        <div className={style.modalButton__success}>
          <Button
            text="На главную"
            variant={ButtonVariant.Purple}
            onClick={onClick}
          />
        </div>
      ) : (
        <div className={style.modalButton__error}>
          <Button
            text="Закрыть"
            variant={ButtonVariant.Purple}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  )
}

export default ModalFooter
