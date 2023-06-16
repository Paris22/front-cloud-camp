import { yupResolver } from "@hookform/resolvers/yup"
import PhoneInput from "../FormComponents/FormInputs/FormPhoneInput/FormPhoneInput"
import FormTextInput, {
  InputType
} from "../FormComponents/FormInputs/FormTextInput/FormTextInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { aboutMeSchema } from "@/helpers/validationSchemas/aboutMeSchema"
import { useNavigate } from "react-router-dom"
import { CREATE_FORM_ROUTE } from "@/routes/inboundRoutes"
import style from "./formAboutMe.module.scss"

type AboutMeFormData = {
  email: string
  phone: string
}

const FormAboutMe = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<Partial<AboutMeFormData>>({
    resolver: yupResolver(aboutMeSchema),
    mode: "onChange",
    defaultValues: {
      email: "lvn1722@yandex.ru",
      phone: "+7 (926) 550-72-25"
    }
  })

  const handleNavForm = () => {
    navigate(CREATE_FORM_ROUTE)
  }

  const onSubmit: SubmitHandler<Partial<AboutMeFormData>> = (
    data
    // event: React.FormEvent<HTMLFormElement>
  ) => {
    // event.preventDefault()
    handleNavForm()
    console.log(data)
  }

  const phone = watch("phone")

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form}>
          <PhoneInput
            control={control}
            name="phone"
            label="Номер телефона"
            mask="+7 (999) 999-99-99"
            value={phone}
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
        <button id="button-start" type="submit" disabled={!isValid}>
          Начать
        </button>
      </form>
    </div>
  )
}

export default FormAboutMe
