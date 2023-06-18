import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { routes } from "@/routes/mainRoutes"
import style from "./app.module.scss"
import Modal from "@/app/components/Modal/Modal"

const renderRoutes = () =>
  routes.map(
    route =>
      route.component && (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      )
  )

function App() {
  return (
    <div className={style.content}>
      <Router>
        <Modal />
        <Routes>{renderRoutes()}</Routes>
      </Router>
    </div>
  )
}

export default App
