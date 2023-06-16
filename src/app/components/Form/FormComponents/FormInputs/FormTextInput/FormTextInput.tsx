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

export enum InputType {
  Text = "text",
  Email = "email"
}

type TextInputProps = {
  control: Control
  name: keyof FieldValues
  label?: string
  type: InputType.Text | InputType.Email
  placeholder?: string
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
}

const FormTextInput: FC<TextInputProps> = ({
  control,
  name,
  label,
  type,
  placeholder = "Placeholder",
  errors,
  disabled = false
}) => (
  <div className={style.container}>
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
          id={`field-${name}`}
          type={type}
          {...field}
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

export default FormTextInput
