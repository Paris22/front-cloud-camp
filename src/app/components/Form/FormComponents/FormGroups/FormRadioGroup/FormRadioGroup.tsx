import { FC } from "react"
import {
  Control,
  Controller,
  ControllerRenderProps,
  DeepMap,
  FieldError,
  FieldValues
} from "react-hook-form"
import style from "../formGroup.module.scss"

type TRadioGroupProps = {
  name: keyof FieldValues
  label: string
  options: Array<{ label: string; value: string; id: string }>
  control?: Control
  errors: DeepMap<FieldValues, FieldError>
  disabled?: boolean
}

const RadioGroup: FC<TRadioGroupProps> = ({
  name,
  label,
  options,
  control,
  errors,
  disabled = false
}) => {
  const validationError = errors[name]?.message?.toString()
  const checkedValue = (
    field: ControllerRenderProps<FieldValues, string>,
    option: {
      label: string
      value: string
      id: string
    }
  ) => field.value === option.value

  return (
    <div className={style.radio}>
      <label htmlFor={`field-${name}`}>{label}</label>
      {options.map(option => (
        <div key={option.value}>
          <label className={style.label}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <input
                  {...field}
                  id={option.id}
                  type="radio"
                  value={option.value}
                  checked={checkedValue(field, option)}
                  onChange={() => field.onChange(option.value)}
                  disabled={disabled}
                  className={
                    checkedValue(field, option) ? style.checkedRadio : ""
                  }
                />
              )}
            />
            {option.label}
          </label>
        </div>
      ))}
      <span>{validationError}</span>
    </div>
  )
}

export default RadioGroup
