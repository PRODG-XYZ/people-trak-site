import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ProgressProps {
  value: number
  variant?: "default" | "match"
  size?: "sm" | "md"
  showValue?: boolean
  label?: string
  className?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, variant = "default", size = "md", showValue = false, label, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-3", className)}>
        {label && (
          <span className="text-sm font-medium text-text w-[88px] shrink-0">{label}</span>
        )}
        <div className={cn(
          "flex-1 rounded-full overflow-hidden bg-mist",
          size === "sm" ? "h-2" : "h-2"
        )}>
          <motion.div
            className={cn(
              "h-full rounded-full",
              variant === "match" ? "bg-lime" : "bg-purple"
            )}
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </div>
        {showValue && (
          <span className="text-sm tabular-nums text-slate-custom w-10 text-right shrink-0">
            {value}
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }
