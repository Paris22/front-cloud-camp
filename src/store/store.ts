import { combineReducers, configureStore } from "@reduxjs/toolkit"
import stepsReducer from "./reducers/steps/steps"
import formReducer from "./reducers/form/form"
import modalReducer from "./reducers/modal/modal"
import baseApi from "./services/baseApi"

const reducer = combineReducers({
  stepsReducer,
  formReducer,
  modalReducer,
  [baseApi.reducerPath]: baseApi.reducer
})

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
