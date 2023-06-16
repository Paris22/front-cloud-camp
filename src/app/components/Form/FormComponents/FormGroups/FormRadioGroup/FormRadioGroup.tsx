import React from "react"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues
} from "react-hook-form"
import cn from "classnames"

type RadioGroupProps = {
  name: keyof FieldValues
  label: string
  options: Array<{ label: string; value: string; id: string }>
  control?: Control
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  control,
  errors,
  disabled = false
}) => {
  return (
    <div>
      <label htmlFor={`field-${name}`}>{label}</label>
      {options.map(option => (
        <div key={option.value}>
          <label>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <input
                  id={option.id}
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={() => field.onChange(option.value)}
                  disabled
                />
              )}
            />
            {option.label}
          </label>
        </div>
      ))}
      <span>{errors[name] && errors[name].message.toString()}</span>
    </div>
  )
}

export default RadioGroup
