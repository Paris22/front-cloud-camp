import { AdvantagesState } from "@/types/advantages"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: AdvantagesState = {
  advantages: ["", "", ""]
}

const advantagesSlice = createSlice({
  name: "advantages",
  initialState,
  reducers: {
    addAdvantage: state => {
      state.advantages.push("")
    },
    deleteAdvantage: (state, action: PayloadAction<number>) => {
      state.advantages.splice(action.payload, 1)
    }
  }
})

export const { addAdvantage, deleteAdvantage } = advantagesSlice.actions
export default advantagesSlice.reducer
