import CheckboxGroup from "@/app/components/Form/FormComponents/FormGroups/FormCheckboxGroup/FormCheckboxGroup"
import RadioGroup from "@/app/components/Form/FormComponents/FormGroups/FormRadioGroup/FormRadioGroup"
import FormTextArea from "@/app/components/Form/FormComponents/FormTextArea/FormTextArea"
import { Tabs } from "@/enums/tabs"
import { Sex } from "@/enums/validation"
import { formSchema } from "@/helpers/validationSchemas/formSchema"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { addAdvantage, deleteAdvantage } from "@/store/advantages/advantages"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider } from "react-hook-form"
import FormSelectInput from "./FormComponents/FormInputs/FormSelectInput/FormSelectInput"
import FormTextInput, {
  InputType
} from "./FormComponents/FormInputs/FormTextInput/FormTextInput"
import useTabChange from "@/hooks/useTabChange"

export type FormData = {
  email: string
  phone: string
  name: string
  nickname: string
  surname: string
  sex: "man" | "woman" | ""
  advantages: Array<string>
  checkboxGroup: Array<number>
  radioGroup: number
  about: string
}

const Form = () => {
  const dispatch = useAppDispatch()
  const advantages = useAppSelector(state => state.advantagesReducer.advantages)
  const activeTab = useAppSelector(state => state.tabsReducer.activeTabIndex)
  const { handleNextTab, handlePreviousTab } = useTabChange()
  const methods = useForm()
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm<Partial<FormData>>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
      name: "",
      surname: "",
      sex: "",
      advantages: advantages,
      checkboxGroup: [],
      radioGroup: 0,
      about: ""
    }
  })

  const onSubmit = (data: object) => {
    const formValues = { ...getValues(), ...data }
    console.log(formValues)
  }

  const handleAddField = () => {
    dispatch(addAdvantage())
  }

  const handleDeleteField = (index: number) => {
    dispatch(deleteAdvantage(index))
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeTab === 1 && (
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
            </div>
          )}

          {activeTab === 2 && (
            <div>
              {advantages.map((advantage, index) => (
                <div key={index} className="form-field">
                  <FormTextInput
                    control={control}
                    name={`advantages-${index + 1}`}
                    type={InputType.Text}
                    errors={errors}
                  />
                  <button
                    id={`button-remove-${index + 1}`}
                    type="button"
                    onClick={() => handleDeleteField(index)}
                    className="delete-button"
                  >
                    Delete Field
                  </button>
                </div>
              ))}
              <button
                id="button add"
                type="button"
                onClick={handleAddField}
                className="add-button"
              >
                Add Field
              </button>
              <CheckboxGroup
                name="checkboxGroup"
                label="Checkbox group"
                options={[
                  {
                    label: "1",
                    value: "1",
                    id: "field-checkbox-group-option-1"
                  },
                  {
                    label: "2",
                    value: "2",
                    id: "field-checkbox-group-option-2"
                  },
                  {
                    label: "3",
                    value: "3",
                    id: "field-checkbox-group-option-3"
                  }
                ]}
                control={control}
                setValue={setValue}
                errors={errors}
              />
              <RadioGroup
                name="radioGroup"
                label="Radio group"
                options={[
                  { label: "1", value: "1", id: "field-radio-group-option-1" },
                  { label: "2", value: "2", id: "field-radio-group-option-2" },
                  { label: "3", value: "3", id: "field-radio-group-option-3" }
                ]}
                control={control}
                errors={errors}
              />
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <FormTextArea
                name="aboutArea"
                control={control}
                errors={errors}
              />
            </div>
          )}
          {activeTab > 0 && (
            <button type="button" onClick={handlePreviousTab}>
              Назад
            </button>
          )}
          {activeTab < 2 ? (
            <button type="button" onClick={handleNextTab}>
              Далее
            </button>
          ) : (
            <button type="submit">Отправить</button>
          )}
        </form>
      </FormProvider>
    </div>
  )
}

export default Form
