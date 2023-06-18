import { spaces } from "@/helpers/regExp/formRegExp"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues
} from "react-hook-form"

import style from "./formTextArea.module.scss"
import {
  ALLOWED_LETTERS_COUNT,
  DEFAULT_TEXTAREA_PLACEHOLDER
} from "./constants"
import { FC } from "react"

type TFormTextAreaProps = {
  control: Control
  errors: DeepMap<FieldValues, FieldError>
  name: string
  label: string
  value?: string
  placeholder?: string
}

const FormTextArea: FC<TFormTextAreaProps> = ({
  control,
  errors,
  name,
  label,
  value,
  placeholder
}) => {
  const lettersCount = value ? value.replace(spaces, "").length : 0

  return (
    <div className={style.container}>
      <label htmlFor={`field-${name}`}>{label}</label>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            id={`field-${name}`}
            value={value || ""}
            className={style.textArea}
            placeholder={placeholder || DEFAULT_TEXTAREA_PLACEHOLDER}
          />
        )}
      />
      <div className={style.tipContainer}>
        <span className={style.tip}>
          {errors[name] && errors[name].message.toString()}
        </span>
        <span className={style.tip}>
          {lettersCount}/{ALLOWED_LETTERS_COUNT}
        </span>
      </div>
    </div>
  )
}

export default FormTextArea
