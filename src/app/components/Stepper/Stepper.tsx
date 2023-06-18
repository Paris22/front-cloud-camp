import CheckIcon from "@assets/checkIcon.svg"
import cn from "classnames"
import { useAppSelector } from "@/hooks/redux"
import { FC } from "react"

import style from "./stepper.module.scss"

type TStepperProps = {
  stepsNumber: number
}

const Stepper: FC<TStepperProps> = ({ stepsNumber }) => {
  const activeTabIndex = useAppSelector(
    state => state.stepsReducer.activeStepIndex
  )

  const steps = [...Array(stepsNumber).keys()]

  return (
    <div className={style.container}>
      {steps.map((step, i) => {
        return (
          <div
            className={cn(style.stepItem, {
              [style.active]: activeTabIndex === i,
              [style.complete]: i < activeTabIndex
            })}
            key={step}
          >
            <div className={style.step}>
              <img
                className={style.iconComplete}
                src={CheckIcon}
                alt="checked-step-icon"
              />
            </div>

            <p className={style.label}>{step + 1}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stepper
