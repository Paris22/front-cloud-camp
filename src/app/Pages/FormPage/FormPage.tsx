import style from "./formPage.module.scss"
import Stepper from "@/app/components/Stepper/Stepper"

const FormPage = () => {
  return (
    <div className={style.container}>
      <Stepper />
    </div>
  )
}

export default FormPage
