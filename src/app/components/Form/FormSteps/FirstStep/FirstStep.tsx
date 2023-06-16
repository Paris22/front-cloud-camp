import { Sex } from "@/enums/validation"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider } from "react-hook-form"
import FormSelectInput from "../../FormComponents/FormInputs/FormSelectInput/FormSelectInput"
import FormTextInput, {
  InputType
} from "../../FormComponents/FormInputs/FormTextInput/FormTextInput"
import useTabChange from "@/hooks/useTabChange"
import { firstStepFormSchema } from "@/helpers/validationSchemas/firstStepFormSchema"
import { nextTab, previousTab } from "@/store/tabs/tabs"

export type FirstStepFormData = {
  name: string
  nickname: string
  surname: string
  sex: Sex.Man | Sex.Woman | ""
}

const Form = () => {
  const dispatch = useAppDispatch()
  const methods = useForm()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<Partial<FirstStepFormData>>({
    resolver: yupResolver(firstStepFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      nickname: "",
      surname: "",
      sex: ""
    }
  })

  const handleNextTab = () => {
    dispatch(nextTab())
  }

  const handlePreviousTab = () => {
    dispatch(previousTab())
  }

  const onSubmit = (data: object) => {
    const formValues = { ...getValues(), ...data }
    console.log(formValues)
  }

  const sexOptions = [
    { value: Sex.Man, label: Sex.Man, id: "field-sex-option-man" },
    { value: Sex.Woman, label: Sex.Woman, id: "field-sex-option-woman" }
  ]

  const textInputsFirstStep = [
    {
      name: "nickname",
      label: "Nickname",
      type: InputType.Text
    },
    {
      name: "name",
      label: "Name",
      type: InputType.Text
    },
    {
      name: "surname",
      label: "Surname",
      type: InputType.Text
    }
  ]

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {textInputsFirstStep.map((input, index) => (
            <FormTextInput
              key={index}
              control={control}
              errors={errors}
              name={input.name}
              label={input.label}
              type={input.type}
            />
          ))}
          <FormSelectInput
            control={control}
            name="sex"
            label="Sex"
            options={sexOptions}
            errors={errors}
          />
          <div>
            <button type="submit" onClick={handleNextTab}>
              Далее
            </button>
            <button type="submit" onClick={handlePreviousTab}>
              Назад
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
