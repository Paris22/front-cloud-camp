import { Tabs } from "@/enums/tabs"

export type TTabsState = Lowercase<keyof typeof Tabs>

export type TTabsSliceState = {
  tabs: Array<TTabsState>
  activeTabIndex: number
}
