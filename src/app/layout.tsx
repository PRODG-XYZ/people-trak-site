import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
