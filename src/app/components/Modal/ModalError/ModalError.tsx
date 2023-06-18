import { FC } from "react"
import Button from "../../Button/Button"
import CloseIcon from "@assets/exitButton.svg"
import ErrorIcon from "@assets/errorModal.svg"
import style from "./modalError.module.scss"

type TModalErrorProps = {
  onClose: () => void
}

const ModalError: FC<TModalErrorProps> = ({ onClose }) => {
  return (
    <>
      <div className={style.header}>
        <span className={style.title}>Ошибка</span>
        <button className={style.closeButton} type="button" onClick={onClose}>
          <img src={CloseIcon} alt="close-modal-icon" />
        </button>
      </div>
      <div className={style.img}>
        <img src={ErrorIcon} alt="error-modal-icon" />
      </div>
      <div className={style.footer}>
        <Button id="button-close" type="button" onClick={onClose}>
          <span>Закрыть</span>
        </Button>
      </div>
    </>
  )
}

export default ModalError
