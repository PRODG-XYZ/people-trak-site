import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layout"
import { HomePage } from "@/routes/home"
import { TermsPage } from "@/routes/terms"
import { PrivacyPage } from "@/routes/privacy"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "privacy", element: <PrivacyPage /> },
    ],
  },
])
