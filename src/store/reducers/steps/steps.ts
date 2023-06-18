import { stepsArray } from "@/helpers/constants/steps"
import { TStepsSliceState } from "@/types/steps"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TStepsSliceState = {
  steps: stepsArray,
  activeStepIndex: 0
}

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      const { payload } = action
      const maxIndex = state.steps.length - 1
      state.activeStepIndex = Math.min(payload, maxIndex)
    },
    nextStep: state => {
      state.activeStepIndex = (state.activeStepIndex + 1) % state.steps.length
    },
    previousStep: state => {
      state.activeStepIndex =
        (state.activeStepIndex - 1 + state.steps.length) % state.steps.length
    }
  }
})

export const { setActiveStep, nextStep, previousStep } = stepsSlice.actions
export default stepsSlice.reducer
