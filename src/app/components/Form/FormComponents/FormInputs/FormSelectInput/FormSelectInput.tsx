import { FC } from "react"
import {
  Control,
  DeepMap,
  Controller,
  FieldError,
  FieldValues
} from "react-hook-form"

type SelectInputProps = {
  control: Control
  name: string
  label: string
  options: Array<{ value: string; label: string; id: string }>
  errors: DeepMap<FieldValues, FieldError>
}

const FormSelectInput: FC<SelectInputProps> = ({
  control,
  name,
  label,
  options,
  errors
}) => (
  <div>
    <label htmlFor={`field-${name}`}>{label}</label>
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <select id={`field-${name}`} {...field}>
          <option value="" disabled hidden>
            Не выбрано
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value} id={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
    {errors[name] && <span>{errors[name].message?.toString()}</span>}
  </div>
)

export default FormSelectInput
