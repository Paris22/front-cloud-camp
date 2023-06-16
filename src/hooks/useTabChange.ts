import { TTabsState } from "@/types/tabs"
import { useAppDispatch, useAppSelector } from "./redux"
import { nextTab, previousTab, setActiveTab } from "@/store/tabs/tabs"

const useTabChange = () => {
  const dispatch = useAppDispatch()
  const tabs = useAppSelector(state => state.tabsReducer.tabs)

  const handleTabChange = (tab: TTabsState) => {
    dispatch(setActiveTab(tabs.indexOf(tab)))
  }

  const handleNextTab = () => {
    dispatch(nextTab())
  }

  const handlePreviousTab = () => {
    dispatch(previousTab())
  }

  return { handleTabChange, handleNextTab, handlePreviousTab }
}

export default useTabChange
