import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/icons/logo"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how" },
  { label: "Compliance", href: "#compliance" },
  { label: "Product", href: "#showcase" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200",
          scrolled 
            ? "bg-page/95 border-b border-line backdrop-blur-md" 
            : "bg-page/80 border-b border-transparent"
        )}
      >
        <div className="max-w-wrap mx-auto px-6 lg:px-12 h-[70px] flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5">
            <Logo variant="white" className="w-9 h-9 rounded-lg shadow-lg" />
            <span className="font-display font-semibold text-[22px] text-ink tracking-tight">
              PeopleTrak
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-slate-custom hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="#" className="text-[15px] font-semibold text-ink px-3 py-2">
              Sign in
            </a>
            <Button asChild>
              <a href="#demo">Book a demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-purple-50"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-ink" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileOpen} 
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  )
}
