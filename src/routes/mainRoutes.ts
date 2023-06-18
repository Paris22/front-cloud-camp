import MainPage from "@/app/Pages/MainPage/MainPage"
import FormPage from "@app/Pages/FormPage/FormPage"
import { TRouteItem } from "@/types/routing"
import { CREATE_FORM_ROUTE, MAIN_ROUTE } from "./inboundRoutes"

export const routes: Array<TRouteItem> = [
  {
    path: MAIN_ROUTE,
    title: "Main",
    component: MainPage
  },
  {
    path: CREATE_FORM_ROUTE,
    title: "ProfileForm",
    component: FormPage
  }
]
