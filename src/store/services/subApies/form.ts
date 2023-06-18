import { TFormDataStateForBack, TSendFormResponse } from "@/types/form"
import { FORM_URL } from "../apiConsts"
import baseApi from "../baseApi"

export const formApi = baseApi.injectEndpoints({
  endpoints: build => ({
    sendForm: build.mutation<TSendFormResponse, Partial<TFormDataStateForBack>>(
      {
        query: body => ({ url: FORM_URL, method: "POST", body })
      }
    )
  }),
  overrideExisting: false
})
