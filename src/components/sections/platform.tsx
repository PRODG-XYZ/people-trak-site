import { motion } from "framer-motion"

const stages = [
  { number: "01", title: "Requisition", description: "Structured JR with multi-level approvals" },
  { number: "02", title: "Sourcing", description: "Two-pass AI scoring against the spec" },
  { number: "03", title: "Pipeline", description: "Consent-gated, normalised pool" },
  { number: "04", title: "Shortlist", description: "Weighted ranking, human-confirmed" },
  { number: "05", title: "Interviews", description: "Self-scheduling + AI analysis" },
  { number: "06", title: "Offer", description: "Approvals, e-sign & counter-offers" },
  { number: "07", title: "Onboarding", description: "Checklists, portal & SMART goals" },
]

export function Platform() {
  return (
    <section className="py-24" id="platform">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch]"
        >
          <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple">
            One platform
          </span>
          <h2 className="font-display font-semibold text-section mt-3.5">
            From job requisition to signed offer.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            One platform for the full workflow. AI drafts your shortlist. You approve it. 
            Nothing moves forward without your say — from the day you open the role to your new hire's first week.
          </p>
        </motion.div>

        {/* Stages */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 mt-11"
        >
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className="bg-white border border-line rounded-[14px] p-4"
            >
              <div className="font-display font-bold text-[13px] text-purple">
                {stage.number}
              </div>
              <div className="font-display font-semibold text-base mt-2">
                {stage.title}
              </div>
              <div className="text-xs text-slate-custom mt-1 leading-snug">
                {stage.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
