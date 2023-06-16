import MainPage from "@/app/Pages/MainPage/MainPage"
import Form from "@/app/components/Form/Form"
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
    component: Form
  }
]
