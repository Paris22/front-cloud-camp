import * as yup from "yup"
import { validationErrors } from "../errors/validationErrors"
import { ABOUT_MAX_LENGTH } from "../constants/validation"

export const thirdStepFormSchema = yup.object().shape({
  about: yup
    .string()
    .required(validationErrors.VALID_REQUIRED_ERROR)
    .max(ABOUT_MAX_LENGTH, validationErrors.VALID_LENGTH_ERROR)
})
