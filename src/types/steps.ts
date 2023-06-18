import { Steps } from "@/enums/steps"

export type TStepsState = Lowercase<keyof typeof Steps>

export type TStepsSliceState = {
  steps: Array<TStepsState>
  activeStepIndex: number
}
