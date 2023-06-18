import { openModal } from "@/store/reducers/modal/modal"
import { useAppDispatch } from "./redux"
import { ModalType } from "@/enums/modal"

export const useModal = () => {
  const dispatch = useAppDispatch()

  const showSuccessModal = () => {
    dispatch(openModal(ModalType.Success))
  }

  const showErrorModal = () => {
    dispatch(openModal(ModalType.Error))
  }

  return { showSuccessModal, showErrorModal }
}
