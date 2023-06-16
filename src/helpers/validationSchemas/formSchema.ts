import * as yup from "yup"
import { emailReg, nameReg, nicknameReg, phoneReg } from "../regExp/formRegExp"
import { validationErrors } from "../errors/validationErrors"
import { NAME_MAX_LENGTH, NICKNAME_MAX_LENGTH } from "../constants/validation"
import { TSex } from "@/types/validation"
import { Sex } from "@/enums/validation"

const sexValues: Array<TSex> = [Sex.Man, Sex.Woman]

export const formSchema = yup.object().shape({
  nickname: yup
    .string()
    .matches(nicknameReg, validationErrors.VALID_NICKNAME_ERROR)
    .required(validationErrors.VALID_REQUIRED_ERROR)
    .max(NICKNAME_MAX_LENGTH, validationErrors.VALID_LENGTH_ERROR),
  name: yup
    .string()
    .matches(nameReg, validationErrors.VALID_NAME_ERROR)
    .required(validationErrors.VALID_REQUIRED_ERROR)
    .max(NAME_MAX_LENGTH, validationErrors.VALID_LENGTH_ERROR),
  surname: yup
    .string()
    .matches(nameReg, validationErrors.VALID_NAME_ERROR)
    .required(validationErrors.VALID_REQUIRED_ERROR)
    .max(NAME_MAX_LENGTH, validationErrors.VALID_LENGTH_ERROR),
  sex: yup.string().oneOf(sexValues, validationErrors.VALID_SEX_ERROR),
  advantages: yup
    .array()
    .of(yup.string().required(validationErrors.VALID_REQUIRED_ERROR))
})
