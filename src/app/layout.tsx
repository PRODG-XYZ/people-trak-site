import { Outlet } from "react-router-dom"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
