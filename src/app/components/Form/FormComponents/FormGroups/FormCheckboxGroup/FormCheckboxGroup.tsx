import { FC } from "react"
import {
  Control,
  Controller,
  ControllerRenderProps,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormSetValue
} from "react-hook-form"
import { TSecondStepFormData } from "@/types/form"
import style from "../formGroup.module.scss"

type TCheckboxGroupProps = {
  name: keyof TSecondStepFormData
  label: string
  options: Array<{ label: string; value: string; id: string }>
  control?: Control
  setValue: UseFormSetValue<Partial<TSecondStepFormData>>
  errors: DeepMap<FieldValues, FieldError>
}

const CheckboxGroup: FC<TCheckboxGroupProps> = ({
  name,
  label,
  options,
  control,
  setValue,
  errors
}) => {
  const validationError = errors[name]?.message?.toString()

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, keyof TSecondStepFormData>
  ) => {
    const { checked, value } = event.target
    if (checked) {
      setValue(name, [...field.value, value])

      return
    }

    setValue(
      name,
      field.value.filter((checked: string) => checked !== value)
    )
  }

  const checkedValue = (
    field: ControllerRenderProps<FieldValues, keyof TSecondStepFormData>,
    option: {
      label: string
      value: string
      id: string
    }
  ) => field.value.includes(option.value)

  return (
    <div className={style.checkbox}>
      <label htmlFor={`field-${name}`}>{label}</label>
      {options.map(option => (
        <div key={option.value}>
          <label className={style.label}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <input
                  id={option.id}
                  type="checkbox"
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  onChange={event => onChangeHandler(event, field)}
                  className={
                    checkedValue(field, option) ? style.checkedBox : ""
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

export default CheckboxGroup
