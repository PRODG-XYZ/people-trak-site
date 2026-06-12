import { motion } from "framer-motion"
import { Shield, CheckCircle, Trash2, Users, UserCircle, List } from "lucide-react"

const complianceItems = [
  {
    icon: Shield,
    title: "NDPA & GDPR aligned",
    description: "Built around the Nigeria Data Protection Act and GDPR, and designed to extend across African regimes.",
  },
  {
    icon: CheckCircle,
    title: "Consent before processing",
    description: "No personal data is processed or scored without a recorded, timestamped consent — enforced at the data layer.",
  },
  {
    icon: Trash2,
    title: "Right to erasure",
    description: "One authenticated request nullifies a candidate's personal data, with the action logged.",
  },
  {
    icon: Users,
    title: "DEI, anonymised",
    description: "Demographic groups smaller than five show as <5 everywhere, and are never re-identified.",
  },
  {
    icon: UserCircle,
    title: "Human in the loop",
    description: "No decision with legal or significant effect is taken by automation alone — a person reviews and confirms.",
  },
  {
    icon: List,
    title: "Audited end to end",
    description: "Every consent, score and decision is logged with the acting user, rationale and time.",
  },
]

export function Compliance() {
  return (
    <section className="py-24 bg-white border-y border-line" id="compliance">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch]"
        >
          <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple">
            Compliance & trust
          </span>
          <h2 className="font-display font-semibold text-section mt-3.5">
            Compliant by design, built for Africa.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            PeopleTrak is built around African data-protection law — the Nigeria Data Protection Act today, designed to extend across the continent — with GDPR-grade controls and a person accountable for every decision.
          </p>
        </motion.div>

        {/* Compliance grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
          {complianceItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-page border border-line rounded-2xl p-6"
            >
              <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-3.5">
                <item.icon className="w-5 h-5 text-purple" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-[17.5px]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-slate-custom mt-2 leading-snug">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
