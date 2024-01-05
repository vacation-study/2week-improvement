import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import MainPage from "./MainPage"
import Assignment from "./pages/Assignment"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "Assignment",
        element: <Assignment />,
        label: "A"
      }
    ]
  }
])

export default router
