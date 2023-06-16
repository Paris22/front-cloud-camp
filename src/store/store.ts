import { combineReducers, configureStore } from "@reduxjs/toolkit"
import tabsReducer from "./tabs/tabs"
import advantagesReducer from "./advantages/advantages"

const reducer = combineReducers({
  tabsReducer,
  advantagesReducer
})

const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
