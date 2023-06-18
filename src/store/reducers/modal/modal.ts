import { ModalType } from "@/enums/modal"
import { TModals } from "@/types/modal"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TModalState = {
  isOpen: boolean
  type: TModals
}

const initialState: TModalState = {
  isOpen: false,
  type: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<ModalType.Success | ModalType.Error>
    ) => {
      state.isOpen = true
      state.type = action.payload
    },
    closeModal: state => {
      state.isOpen = false
      state.type = null
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
