import { FC } from "react"
import {
  Control,
  DeepMap,
  Controller,
  FieldError,
  FieldValues,
  ControllerRenderProps
} from "react-hook-form"
import cn from "classnames"
import Select from "react-select"

import style from "./formSelectInput.module.scss"
import { customSelectStyles } from "./customStyles"
import { DEFAULT_SELECT_PLACEHOLDER } from "./constants"

type SelectInputProps = {
  control: Control
  name: string
  label: string
  options: Array<{ value: string; label: string; id: string }>
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
  placeholder?: string
}

const FormSelectInput: FC<SelectInputProps> = ({
  control,
  name,
  label,
  options,
  errors,
  disabled = false,
  placeholder
}) => {
  const validationError = errors[name]?.message?.toString()
  const findValue = (field: ControllerRenderProps<FieldValues, string>) =>
    options.find(option => option.value === field.value)
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
        defaultValue={options.map(option => option.value)}
        name={name}
        render={({ field }) => (
          <Select
            inputId={`field-${name}`}
            className={style.input}
            options={options}
            value={findValue(field)}
            onChange={selectedOption => field.onChange(selectedOption?.value)}
            getOptionValue={option => option.value}
            getOptionLabel={option => option.label}
            placeholder={placeholder || DEFAULT_SELECT_PLACEHOLDER}
            components={{
              IndicatorSeparator: () => null
            }}
            styles={customSelectStyles}
          />
        )}
      />
      {!disabled && <span className={style.tip}>{validationError}</span>}
    </div>
  )
}

export default FormSelectInput
