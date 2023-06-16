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
  placeholder = "Placeholder",
  errors,
  disabled = false
}) => (
  <div className={style.container}>
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
    {errors[name] && (
      <span className={(style.errorMessage, style.tip)}>
        {errors[name].message?.toString()}
      </span>
    )}
  </div>
)

export default PhoneInput
