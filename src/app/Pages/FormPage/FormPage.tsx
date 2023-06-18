import style from "./formPage.module.scss"
import Stepper from "@/app/components/Stepper/Stepper"
import { useAppSelector } from "@/hooks/redux"
import FirstStep from "@/app/components/Form/FormSteps/FirstStep/FirstStep"
import SecondStep from "@/app/components/Form/FormSteps/SecondStep/SecondStep"
import ThirdStep from "@/app/components/Form/FormSteps/ThirdStep/ThirdStep"

const FormPage = () => {
  const activeStep = useAppSelector(state => state.stepsReducer.activeStepIndex)

  return (
    <div className={style.container}>
      <Stepper stepsNumber={3} />
      {activeStep === 0 && <FirstStep />}
      {activeStep === 1 && <SecondStep />}
      {activeStep === 2 && <ThirdStep />}
    </div>
  )
}

export default FormPage
