import { motion } from "framer-motion"
import { List, Clock, Shield } from "lucide-react"
import { ScoreRing } from "@/components/ui/score-ring"

const pills = [
  {
    icon: List,
    title: "Fixed, weighted scoring",
    description: "Your criterion weights are applied the same way to every candidate — the breakdown is always visible.",
  },
  {
    icon: Clock,
    title: "AI recommends, a person decides",
    description: "AI shortlists and explains; a human confirms the call before the pipeline advances.",
  },
  {
    icon: Shield,
    title: "Auditable by design",
    description: "Every consent, score and decision is logged with the acting user, rationale and time.",
  },
]

export function Explainable() {
  return (
    <section className="relative bg-ink text-white overflow-hidden py-24" id="explainable">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-explain-gradient pointer-events-none" />
      
      <div className="relative max-w-wrap mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple-300">
              Explainable by design
            </span>
            <h2 className="font-display font-semibold text-section mt-3.5 text-white">
              A reason behind every rank.
            </h2>
            <p className="text-[18.5px] text-purple-200/80 mt-4">
              Every candidate gets the same test, scored the same way. You can see exactly how they scored — useful when the CEO asks why you picked Amara over Mariam. AI recommends; you decide. We log every choice with who made it and why.
            </p>
            
            {/* Pills */}
            <div className="flex flex-col gap-3.5 mt-7">
              {pills.map((pill, i) => (
                <motion.div
                  key={pill.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3.5 items-start bg-ink-2 border border-white/10 rounded-[14px] p-4"
                >
                  <span className="w-[30px] h-[30px] rounded-lg bg-purple/25 flex items-center justify-center shrink-0">
                    <pill.icon className="w-4 h-4 text-lime" />
                  </span>
                  <div>
                    <div className="font-display font-semibold text-[16.5px] text-white">
                      {pill.title}
                    </div>
                    <div className="text-sm text-purple-300/70 mt-1">
                      {pill.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Evidence Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white text-text rounded-[20px] p-6 shadow-card-dark"
          >
            <div className="flex items-center gap-3.5 pb-4 border-b border-line">
              <ScoreRing score={90} size="sm" />
              <div>
                <div className="font-bold text-base">Domain fit · 90</div>
                <div className="text-[13px] text-slate-custom">Why this scored where it did</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              {[
                "Built cross-border payment rails at two African fintechs — maps to the role's domain KPI.",
                "Led compliance architecture under VASP frameworks — directly cited in the spec.",
                "No fixed-income exposure — the one gap holding the score below 95.",
              ].map((evidence, i) => (
                <div
                  key={i}
                  className="flex gap-2.5 items-start text-[13.5px] text-slate-custom bg-page border border-line rounded-[10px] px-3 py-2.5"
                >
                  <span className="w-[18px] h-[18px] rounded-[5px] bg-purple-50 text-purple flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    "
                  </span>
                  {evidence}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
