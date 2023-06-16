import { spaces } from "@/helpers/regExp/formRegExp"
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  useFormContext
} from "react-hook-form"

type FormTextAreaProps = {
  control: Control
  errors: DeepMap<FieldValues, FieldError>
  name: string
  placeholder?: string
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  control,
  errors,
  name,
  placeholder = "Placeholder"
}) => {
  const { watch } = useFormContext()
  const valueWatch = watch(name)
  const lettersCount = valueWatch ? valueWatch.replace(spaces, "").length : 0

  return (
    <div className="textArea-field">
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            className="textArea-field__input"
            placeholder={placeholder}
          />
        )}
      />
      <span className="textArea-field__tip">
        {errors[name] && errors[name].message.toString()}
        {lettersCount}/200
      </span>
    </div>
  )
}

export default FormTextArea
