import { tabsArray } from "@/helpers/constants/tabs"
import { TTabsSliceState } from "@/types/tabs"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TTabsSliceState = {
  tabs: tabsArray,
  activeTabIndex: 0
}

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTabIndex = action.payload
    },
    nextTab: state => {
      state.activeTabIndex = (state.activeTabIndex + 1) % state.tabs.length
    },
    previousTab: state => {
      state.activeTabIndex =
        (state.activeTabIndex - 1 + state.tabs.length) % state.tabs.length
    }
  }
})

export const { setActiveTab, nextTab, previousTab } = tabsSlice.actions
export default tabsSlice.reducer
