import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ScoreRingProps {
  score: number
  size?: "sm" | "md" | "lg"
  label?: string
  animated?: boolean
  className?: string
}

const ScoreRing = React.forwardRef<HTMLDivElement, ScoreRingProps>(
  ({ score, size = "md", label, animated = true, className }, ref) => {
    const dimensions = {
      sm: { w: 84, stroke: 9, fontSize: 22 },
      md: { w: 118, stroke: 11, fontSize: 30 },
      lg: { w: 140, stroke: 13, fontSize: 36 },
    }
    
    const { w, stroke, fontSize } = dimensions[size]
    const r = (w - stroke) / 2
    const c = 2 * Math.PI * r
    const offset = c * (1 - score / 100)
    const gradientId = `ring-gradient-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div ref={ref} className={cn("relative shrink-0", className)} style={{ width: w, height: w }}>
        <svg 
          width={w} 
          height={w} 
          viewBox={`0 0 ${w} ${w}`}
          className="-rotate-90"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C8E64A" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* Background track */}
          <circle
            cx={w/2}
            cy={w/2}
            r={r}
            fill="none"
            stroke="#EDE9FE"
            strokeWidth={stroke}
          />
          {/* Animated arc */}
          <motion.circle
            cx={w/2}
            cy={w/2}
            r={r}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            initial={animated ? { strokeDashoffset: c } : { strokeDashoffset: offset }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span 
            className="font-display font-bold text-ink leading-none tabular-nums"
            style={{ fontSize }}
          >
            {score}
          </span>
          {label && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-custom mt-0.5">
              {label}
            </span>
          )}
        </div>
      </div>
    )
  }
)
ScoreRing.displayName = "ScoreRing"

export { ScoreRing }
