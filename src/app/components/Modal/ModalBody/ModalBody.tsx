import { FC } from "react"
import style from "./modalBody.module.scss"
import ErrorIcon from "@assets/errorModal.svg"
import SuccessIcon from "@assets/successModal.svg"
import { ModalType } from "@/enums/modal"

type ModalBodyProps = {
  type: Lowercase<keyof typeof ModalType>
}

const ModalBody: FC<ModalBodyProps> = ({ type }) => {
  return (
    <div className={style.modalBody}>
      <img
        className={style.img}
        src={type === ModalType.Success ? SuccessIcon : ErrorIcon}
        alt={type === ModalType.Success ? "success-icon" : "error-icon"}
      />
    </div>
  )
}

export default ModalBody
