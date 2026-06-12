import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed inset-0 z-[80] bg-ink text-white flex flex-col p-6"
        >
          <div className="flex items-center justify-between h-[46px]">
            <span className="font-display font-semibold text-[22px]">
              PeopleTrak
            </span>
            <button
              onClick={onClose}
              className="text-white text-3xl leading-none"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <nav className="flex flex-col mt-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-display text-[26px] font-semibold py-4 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <Button 
            variant="lime" 
            size="lg"
            className="mt-6 w-full justify-center"
            onClick={onClose}
            asChild
          >
            <a href="#demo">Book a demo</a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
