import { FC } from "react"
import Button from "../../Button/Button"
import SuccessIcon from "@assets/successModal.svg"
import style from "./modalSuccess.module.scss"

type TModalSuccessProps = {
  onClose: () => void
}

const ModalSuccess: FC<TModalSuccessProps> = ({ onClose }) => {
  return (
    <>
      <div className={style.header}>
        <span className={style.title}>Форма успешно отправлена</span>
      </div>
      <div className={style.img}>
        <img src={SuccessIcon} alt="success-modal-icon" />
      </div>
      <div className={style.footer}>
        <Button id="button-to-main" type="button" onClick={onClose}>
          <span>На главную</span>
        </Button>
      </div>
    </>
  )
}

export default ModalSuccess
