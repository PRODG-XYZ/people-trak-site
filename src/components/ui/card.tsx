import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "feature"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-page border-line",
      dark: "bg-ink-2 border-white/10 text-white",
      feature: "bg-white border-line shadow-card",
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[18px] border p-6",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
