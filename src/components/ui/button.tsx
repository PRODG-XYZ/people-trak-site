import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "lime" | "ghost" | "dark" | "ghost-dark"
  size?: "default" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    
    const variants = {
      primary: "bg-purple text-white border-transparent shadow-button hover:bg-purple-700 hover:shadow-button-hover",
      lime: "bg-lime text-ink border-transparent hover:bg-lime-400",
      ghost: "bg-transparent text-text border-line hover:bg-white hover:border-purple-200",
      dark: "bg-white text-ink border-transparent hover:bg-purple-50",
      "ghost-dark": "bg-white/10 text-white border-white/20 hover:bg-white/20",
    }
    
    const sizes = {
      default: "px-5 py-3 text-[15.5px] rounded-xl",
      lg: "px-7 py-4 text-base rounded-[14px]",
    }
    
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 font-body font-semibold border transition-all duration-150 whitespace-nowrap",
          "active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
