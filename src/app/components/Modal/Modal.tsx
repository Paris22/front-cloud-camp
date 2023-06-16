import { FC } from "react"
import SuccessIcon from "@assets/successModal.svg"
import style from "./modal.module.scss"
import { ModalType } from "@/enums/modal"
import ModalHeader from "./ModalHeader/ModalHeader"
import ModalBody from "./ModalBody/ModalBody"
import ModalFooter from "./ModalFooter/ModalFooter"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onHome: () => void
  type: ModalType.Success | ModalType.Error
}

const Modal: FC<ModalProps> = ({ onClose, onHome, isOpen, type }) => {
  return (
    isOpen && (
      <div className={style.modal}>
        <ModalHeader type={type} onClick={onClose} />
        <ModalBody type={type} />
        <ModalFooter
          type={type}
          onClick={type === ModalType.Success ? onHome : onClose}
        />
      </div>
    )
  )
}

export default Modal
