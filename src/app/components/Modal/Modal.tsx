import { FC } from "react"
import { ModalType } from "@/enums/modal"
import ModalSuccess from "./ModalSuccess/ModalSuccess"
import ModalError from "./ModalError/ModalError"
import useFormNavigate from "@/hooks/useFormNavigate"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { closeModal } from "@/store/reducers/modal/modal"
import { resetForm } from "@store/reducers/form/form"
import style from "./modal.module.scss"

const Modal: FC = () => {
  const dispatch = useAppDispatch()
  const { handleMainNav, handleSelectStep } = useFormNavigate()

  const isModalOpen = useAppSelector(state => state.modalReducer.isOpen)
  const typeModal = useAppSelector(state => state.modalReducer.type)

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleCloseSuccessModal = () => {
    handleCloseModal()
    handleMainNav()
    handleSelectStep(0)
    dispatch(resetForm())
  }

  return (
    <>
      {isModalOpen && (
        <div className={style.container}>
          <div className={style.content}>
            {typeModal === ModalType.Success && (
              <ModalSuccess onClose={handleCloseSuccessModal} />
            )}
            {typeModal === ModalType.Error && (
              <ModalError onClose={handleCloseModal} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
