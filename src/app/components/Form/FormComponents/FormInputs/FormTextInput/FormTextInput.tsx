import { FC } from "react"
import cn from "classnames"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues
} from "react-hook-form"

import style from "../../FormInputs/formInput.module.scss"
import { DEFAULT_TEXT_PLACEHOLDER } from "./constants"
import { InputType } from "@/enums/input"

type TTextInputProps = {
  control: Control
  name: keyof FieldValues
  id?: string
  label?: string
  type: InputType.Text | InputType.Email
  placeholder?: string
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
  isTipRequired?: boolean
}

const FormTextInput: FC<TTextInputProps> = ({
  control,
  name,
  label,
  id,
  type,
  placeholder,
  errors,
  disabled = false,
  isTipRequired = true
}) => {
  const validationError = errors[name]?.message?.toString()

  return (
    <div
      className={cn(style.container, {
        [style.container__disabled]: disabled
      })}
    >
      {label ? (
        <label className={style.label} htmlFor={`field-${name}`}>
          {label}
        </label>
      ) : null}
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <input
            id={id || `field-${name}`}
            type={type}
            {...field}
            disabled={disabled}
            placeholder={placeholder || DEFAULT_TEXT_PLACEHOLDER}
            className={cn(style.input, {
              [style.input__disabled]: disabled
            })}
          />
        )}
      />
      {!disabled && isTipRequired && (
        <span className={style.tip}>{validationError}</span>
      )}
    </div>
  )
}

export default FormTextInput
