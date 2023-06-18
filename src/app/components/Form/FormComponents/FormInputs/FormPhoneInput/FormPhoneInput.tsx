import { FC } from "react"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues
} from "react-hook-form"
import InputMask from "react-input-mask"
import cn from "classnames"
import style from "../formInput.module.scss"
import { DEFAULT_PHONE_PLACEHOLDER } from "./constants"

interface PhoneInputProps {
  control: Control
  name: keyof FieldValues
  label: string
  mask: string
  value?: string
  placeholder?: string
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
}

const PhoneInput: FC<PhoneInputProps> = ({
  control,
  name,
  label,
  mask,
  value,
  placeholder = DEFAULT_PHONE_PLACEHOLDER,
  errors,
  disabled = false
}) => {
  const validationError = errors[name]?.message?.toString()

  return (
    <div
      className={cn(style.container, {
        [style.container__disabled]: disabled
      })}
    >
      <label className={style.label} htmlFor={`field-${name}`}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <InputMask
            id={`field-${name}`}
            mask={mask}
            {...field}
            value={value || ""}
            disabled={disabled}
            placeholder={placeholder}
            className={cn(style.input, {
              [style.input__disabled]: disabled
            })}
          />
        )}
      />
      <span className={(style.errorMessage, style.tip)}>{validationError}</span>
    </div>
  )
}

export default PhoneInput
