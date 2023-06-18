import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "./apiConsts"

const tagTypes = ["Form"]

export const baseApi = createApi({
  reducerPath: "base",
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({})
})

export default baseApi
