import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layout"
import { HomePage } from "@/routes/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
])
