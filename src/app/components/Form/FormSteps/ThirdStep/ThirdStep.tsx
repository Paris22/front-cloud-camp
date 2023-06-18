import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import useFormNavigate from "@/hooks/useFormNavigate"
import { TThirdStepFormData } from "@/types/form"
import Button from "@/app/components/Button/Button"
import FormTextArea from "../../FormComponents/FormTextArea/FormTextArea"
import { thirdStepFormSchema } from "@/helpers/validationSchemas/thirdStepFormSchema"
import style from "./thirdStep.module.scss"
import { formSelector, thirdStepForm } from "@/store/reducers/form/form"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import useSendForm from "@/hooks/useSendForm"

const ThirdStep = () => {
  const dispatch = useAppDispatch()
  const { handleToPreviousStep } = useFormNavigate()
  const {
    email,
    phone,
    name,
    surname,
    sex,
    nickname,
    advantages,
    radioGroup,
    checkboxGroup,
    about
  } = useAppSelector(formSelector)
  const {
    control,
    getValues,
    watch,
    formState: { errors, isValid }
  } = useForm<Partial<TThirdStepFormData>>({
    resolver: yupResolver(thirdStepFormSchema),
    mode: "onChange",
    defaultValues: {
      about: about || ""
    }
  })

  const thirdStepData = getValues()
  const aboutWatcher = watch("about")

  const radioGroupForBack = Number(radioGroup)
  const checkboxGroupForBack = checkboxGroup.map(Number)
  const advantagesForBack = advantages.map(advantage => advantage.advantage)

  const { handleSendForm } = useSendForm()

  const handleSubmitToStep = (isNextStep: boolean) => {
    const data = getValues()
    dispatch(thirdStepForm(data))
    isNextStep
      ? handleSendForm({
          email,
          phone,
          name,
          surname,
          sex,
          nickname,
          advantages: advantagesForBack,
          radioGroup: radioGroupForBack,
          checkboxGroup: checkboxGroupForBack,
          about: thirdStepData.about
        })
      : handleToPreviousStep()
  }

  return (
    <form>
      <div className={style.form}>
        <FormTextArea
          name="about"
          label="About"
          control={control}
          errors={errors}
          value={aboutWatcher}
        />
      </div>
      <div className={style.buttons}>
        <Button
          id="button-back"
          type="button"
          onClick={() => handleSubmitToStep(false)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          id="button-send"
          type="button"
          onClick={() => handleSubmitToStep(true)}
          disabled={!isValid}
        >
          Отправить
        </Button>
      </div>
    </form>
  )
}

export default ThirdStep
