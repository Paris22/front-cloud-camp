import { FC } from "react"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormSetValue
} from "react-hook-form"
import { FormData } from "@/app/components/Form/Form"

type CheckboxGroupProps = {
  name: keyof FormData
  label: string
  options: Array<{ label: string; value: string; id: string }>
  control?: Control
  setValue: UseFormSetValue<Partial<FormData>>
  errors: DeepMap<FieldValues, FieldError>
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  label,
  options,
  control,
  setValue,
  errors
}) => {
  return (
    <div>
      <label htmlFor={`field-${name}`}>{label}</label>
      {options.map(option => (
        <div key={option.value}>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <label>
                <input
                  id={option.id}
                  type="checkbox"
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  onChange={e => {
                    const { checked, value } = e.target
                    if (checked) {
                      setValue(name, [...field.value, value])
                    } else {
                      setValue(
                        name,
                        field.value.filter((val: string) => val !== value)
                      )
                    }
                  }}
                />
                {option.label}
              </label>
            )}
          />
        </div>
      ))}
      <span>{errors[name] && errors[name].message.toString()}</span>
    </div>
  )
}

export default CheckboxGroup
