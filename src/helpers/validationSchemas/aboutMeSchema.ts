import * as yup from "yup"
import { validationErrors } from "../errors/validationErrors"
import { emailReg, phoneReg } from "../regExp/formRegExp"

export const aboutMeSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneReg, validationErrors.VALID_PHONE_ERROR)
    .required(validationErrors.VALID_REQUIRED_ERROR),
  email: yup
    .string()
    .matches(emailReg, validationErrors.VALID_EMAIL_ERROR)
    .required(validationErrors.VALID_REQUIRED_ERROR)
})
