import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "purple" | "white" | "glyph"
  className?: string
}

export function Logo({ variant = "glyph", className }: LogoProps) {
  const gradientId = `logo-gradient-${variant}-${Math.random().toString(36).substr(2, 9)}`
  
  const fills = {
    purple: { bg: "#7C3AED", fg: "#fff" },
    white: { bg: "#fff", fg: "#7C3AED" },
    glyph: { bg: "transparent", fg: "#7C3AED" },
  }
  
  const { bg, fg } = fills[variant]
  
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("w-9 h-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="32" y1="8" x2="32" y2="56">
          <stop offset="0%" stopColor="#C8E64A" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      
      {variant !== "glyph" && (
        <rect x="2" y="2" width="60" height="60" rx="15" fill={bg} />
      )}
      
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
      />
      
      {/* Person icon */}
      <circle cx="32" cy="25.5" r="8" fill={fg} />
      <path
        d="M20 47 C20 38 25.5 34 32 34 C38.5 34 44 38 44 47 Z"
        fill={fg}
      />
    </svg>
  )
}
