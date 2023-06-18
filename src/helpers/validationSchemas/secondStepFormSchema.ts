import * as yup from "yup"
import { validationErrors } from "../errors/validationErrors"

export const secondStepFormSchema = yup.object().shape({
  advantages: yup.array().of(
    yup.object().shape({
      advantage: yup.string().required(validationErrors.VALID_REQUIRED_ERROR)
    })
  ),
  checkboxGroup: yup
    .array()
    .of(yup.number().required(validationErrors.VALID_REQUIRED_ERROR)),
  radioGroup: yup.number().required(validationErrors.VALID_REQUIRED_ERROR)
})
