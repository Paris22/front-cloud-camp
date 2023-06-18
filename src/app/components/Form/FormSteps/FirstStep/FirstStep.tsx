import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import FormSelectInput from "../../FormComponents/FormInputs/FormSelectInput/FormSelectInput"
import FormTextInput from "../../FormComponents/FormInputs/FormTextInput/FormTextInput"
import useFormNavigate from "@/hooks/useFormNavigate"
import { firstStepFormSchema } from "@/helpers/validationSchemas/firstStepFormSchema"
import { TFirstStepFormData } from "@/types/form"
import Button from "@/app/components/Button/Button"
import style from "./firstStep.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { firstStepForm, formSelector } from "@/store/reducers/form/form"
import { SEX_OPTIONS, TEXT_INPUTS_FIRST_STEP } from "@/helpers/constants/form"

const FirstStep = () => {
  const dispatch = useAppDispatch()
  const { name, nickname, surname, sex } = useAppSelector(formSelector)
  const { handleMainNav, handleToNextStep } = useFormNavigate()
  const {
    control,
    getValues,
    formState: { errors, isValid }
  } = useForm<Partial<TFirstStepFormData>>({
    resolver: yupResolver(firstStepFormSchema),
    mode: "onChange",
    defaultValues: {
      name: name || "",
      nickname: nickname || "",
      surname: surname || "",
      sex: sex || ""
    }
  })

  const handleSubmitToStep = (isNextStep: boolean) => {
    const data = getValues()
    dispatch(firstStepForm(data))
    isNextStep ? handleToNextStep() : handleMainNav()
  }

  return (
    <div>
      <form>
        <div className={style.form}>
          {TEXT_INPUTS_FIRST_STEP.map(input => (
            <FormTextInput
              key={input.name}
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
            options={SEX_OPTIONS}
            errors={errors}
          />
        </div>
        <div className={style.buttons}>
          <Button
            id="button-back"
            type="button"
            onClick={() => handleSubmitToStep(false)}
            variant="outlined"
          >
            <span>Назад</span>
          </Button>
          <Button
            id="button-next"
            type="button"
            onClick={() => handleSubmitToStep(true)}
            disabled={!isValid}
          >
            <span>Вперед</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FirstStep
