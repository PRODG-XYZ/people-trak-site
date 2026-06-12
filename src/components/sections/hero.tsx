import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const candidates = [
  { id: "1", name: "A. Okonkwo", role: "Lead · fintech", score: 94, isMatch: true },
  { id: "2", name: "M. Haddad", role: "Platform eng", score: 88, isMatch: true },
  { id: "3", name: "J. Wuolah", role: "Backend", score: 71, isMatch: false },
  { id: "4", name: "T. Mbeki", role: "Generalist", score: 63, isMatch: false },
]

export function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="relative max-w-wrap mx-auto px-6 lg:px-12 py-16 lg:py-24" id="top">
        <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-12 lg:gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple-300">
              The AI hiring platform
            </span>
            
            <h1 className="font-display font-semibold text-hero mt-5">
              Hire faster.
              <br />
              <span className="text-lime">Defend every decision.</span>
            </h1>
            
            <p className="text-lg text-purple-200/80 mt-6 max-w-[48ch] leading-relaxed">
              One platform for the entire hire — from the open role to the first day. 
              AI moves the work along, your team makes every call, and the reasoning 
              stays attached to it.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="lime" size="lg" asChild>
                <a href="#demo">Book a demo</a>
              </Button>
              <Button variant="ghost-dark" size="lg" asChild>
                <a href="#how">See how it works</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-7 text-sm font-medium text-purple-300">
              <Shield className="w-4 h-4 text-lime" />
              <span>Every score shows its working — and every decision has a name on it.</span>
            </div>
          </motion.div>
          
          {/* Right content - Shortlist Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ink-2 border border-white/10 rounded-[22px] p-5 shadow-card-dark"
          >
            {/* Header */}
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display font-semibold text-base text-white">
                Ranked shortlist
              </h3>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider text-purple-300/70">
                38 candidates
              </span>
            </div>
            
            <p className="text-xs text-purple-300/70 mb-6">
              Senior Backend Engineer · scored against weighted JD / spec / KPIs
            </p>
            
            {/* Candidate rows */}
            <div className="relative">
              {candidates.map((c, i) => (
                <div
                  key={c.id}
                  className="grid grid-cols-[118px_1fr_40px] items-center gap-3 py-3 border-t border-white/5 first:border-t-0"
                >
                  <div className="text-[13.5px] font-semibold text-purple-100 truncate">
                    {c.name}
                    <span className="block text-[11px] font-medium text-purple-300/60">
                      {c.role}
                    </span>
                  </div>
                  
                  <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className={c.isMatch ? "bg-lime" : "bg-purple-400"}
                      initial={{ width: 0 }}
                      animate={{ width: `${c.score}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                      style={{ height: "100%", borderRadius: "9999px" }}
                    />
                  </div>
                  
                  <span className={`text-[13.5px] font-semibold text-right tabular-nums ${c.isMatch ? "text-lime" : "text-purple-300/60"}`}>
                    {c.score}
                  </span>
                </div>
              ))}
              
              {/* Threshold line */}
              <motion.div
                className="absolute top-0 bottom-0 w-0 border-l-2 border-dashed border-lime/90"
                initial={{ left: 0, opacity: 0 }}
                animate={{ left: "80%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="absolute -top-4 left-2 text-[10px] font-semibold tracking-wide text-lime whitespace-nowrap">
                  80% match
                </span>
              </motion.div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center gap-2 mt-4 text-xs text-purple-300/60">
              <span className="text-[10px] font-bold uppercase tracking-wide text-ink bg-lime px-2 py-0.5 rounded-md">
                2 shortlisted
              </span>
              <span>above the match line — each with a visible score breakdown.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
