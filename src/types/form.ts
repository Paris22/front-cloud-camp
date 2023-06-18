import { Sex } from "@/enums/validation"

export type TAboutMeFormData = {
  email: string
  phone: string
}

export type TFirstStepFormData = {
  name: string
  nickname: string
  surname: string
  sex: Sex.Man | Sex.Woman | ""
}

export type TSecondStepFormData = {
  advantages: Array<{ advantage: string }>
  checkboxGroup: Array<number>
  radioGroup: number
}

export type TThirdStepFormData = {
  about: string
}

export type TFormDataState = TAboutMeFormData &
  TFirstStepFormData &
  TSecondStepFormData &
  TThirdStepFormData

export type TSendFormResponse = {
  success: string
}
