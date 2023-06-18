import { yupResolver } from "@hookform/resolvers/yup"
import PhoneInput from "../FormComponents/FormInputs/FormPhoneInput/FormPhoneInput"
import FormTextInput from "../FormComponents/FormInputs/FormTextInput/FormTextInput"
import { useForm } from "react-hook-form"
import { aboutMeSchema } from "@/helpers/validationSchemas/aboutMeSchema"
import { TAboutMeFormData } from "@/types/form"
import Button from "../../Button/Button"
import useFormNavigate from "@/hooks/useFormNavigate"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { aboutMeForm, formSelector } from "@/store/reducers/form/form"
import style from "./formAboutMe.module.scss"
import { InputType } from "@/enums/input"

const FormAboutMe = () => {
  const dispatch = useAppDispatch()
  const { email, phone } = useAppSelector(formSelector)
  const { handleFormNav } = useFormNavigate()
  const {
    control,
    getValues,
    watch,
    formState: { errors, isValid }
  } = useForm<Partial<TAboutMeFormData>>({
    resolver: yupResolver(aboutMeSchema),
    mode: "onChange",
    defaultValues: {
      email: email || "",
      phone: phone || ""
    }
  })

  const handleSubmitToForm = (data: Partial<TAboutMeFormData>) => {
    dispatch(aboutMeForm(data))
    handleFormNav()
  }

  const aboutMeData = getValues()
  const phoneWatcher = watch("phone")

  return (
    <div className={style.container}>
      <form>
        <div className={style.form}>
          <PhoneInput
            control={control}
            name="phone"
            label="Номер телефона"
            mask="+7 (999) 999-99-99"
            value={phoneWatcher}
            errors={errors}
            disabled
          />
          <FormTextInput
            name="email"
            label="Email"
            type={InputType.Email}
            control={control}
            errors={errors}
            disabled
          />
        </div>
        <div className={style.footer}>
          <Button
            id="button-start"
            type="button"
            disabled={!isValid}
            onClick={() => handleSubmitToForm(aboutMeData)}
          >
            Начать
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormAboutMe
