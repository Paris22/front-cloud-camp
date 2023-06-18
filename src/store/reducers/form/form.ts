import {
  TAboutMeFormData,
  TFirstStepFormData,
  TFormDataState,
  TSecondStepFormData,
  TThirdStepFormData
} from "@/types/form"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState: TFormDataState = {
  email: "lvn1722@yandex.ru",
  phone: "+7 (926) 550-72-25",
  nickname: "",
  name: "",
  surname: "",
  sex: "",
  advantages: [{ advantage: "" }, { advantage: "" }, { advantage: "" }],
  checkboxGroup: [],
  radioGroup: 0,
  about: ""
}

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    aboutMeForm: (
      state,
      { payload }: PayloadAction<Partial<TAboutMeFormData>>
    ) => {
      const formState = { ...state, ...payload }
      return formState
    },
    firstStepForm: (
      state,
      { payload }: PayloadAction<Partial<TFirstStepFormData>>
    ) => {
      const formState = { ...state, ...payload }
      return formState
    },
    secondStepForm: (
      state,
      { payload }: PayloadAction<Partial<TSecondStepFormData>>
    ) => {
      const formState = { ...state, ...payload }
      return formState
    },
    thirdStepForm: (
      state,
      { payload }: PayloadAction<Partial<TThirdStepFormData>>
    ) => {
      const formState = { ...state, ...payload }
      return formState
    },
    resetForm: () => initialState
  }
})

export const formSelector = (state: RootState) => state.formReducer

export const {
  aboutMeForm,
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  resetForm
} = formSlice.actions

export default formSlice.reducer
