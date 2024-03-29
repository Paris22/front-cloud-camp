import ReactDOM from "react-dom/client"
import App from "./app/Pages/App/App.tsx"
import "./index.scss"
import { Provider } from "react-redux"
import store from "./store/store.ts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
