import { TStepsState } from "@/types/steps"
import { useAppDispatch, useAppSelector } from "./redux"
import {
  nextStep,
  previousStep,
  setActiveStep
} from "@/store/reducers/steps/steps"
import { useNavigate } from "react-router-dom"
import { CREATE_FORM_ROUTE, MAIN_ROUTE } from "@/routes/inboundRoutes"

const useFormNavigate = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const steps = useAppSelector(state => state.stepsReducer.steps)

  const handleStepChange = (step: TStepsState) => {
    dispatch(setActiveStep(steps.indexOf(step)))
  }

  const handleToNextStep = () => {
    dispatch(nextStep())
  }

  const handleToPreviousStep = () => {
    dispatch(previousStep())
  }

  const handleMainNav = () => {
    navigate(MAIN_ROUTE)
  }

  const handleFormNav = () => {
    navigate(CREATE_FORM_ROUTE)
  }

  const handleSelectStep = (step: number) => {
    dispatch(setActiveStep(step))
  }

  return {
    handleStepChange,
    handleToNextStep,
    handleToPreviousStep,
    handleMainNav,
    handleFormNav,
    handleSelectStep
  }
}

export default useFormNavigate
