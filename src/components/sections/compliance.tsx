import { motion } from "framer-motion"
import { Shield, CheckCircle, Trash2, Users, UserCircle, List } from "lucide-react"

const complianceItems = [
  {
    icon: Shield,
    title: "NDPA & GDPR aligned",
    description: "We built around the Nigeria Data Protection Act and designed it to work across African data regimes.",
  },
  {
    icon: CheckCircle,
    title: "Consent before outreach",
    description: "We record consent before we ever reach out. You can see the timestamp. Scoring uses public data; contact only happens after explicit permission.",
  },
  {
    icon: Trash2,
    title: "Right to erasure",
    description: "One authenticated request and we delete their personal data. We log who asked and when.",
  },
  {
    icon: Users,
    title: "DEI, anonymised",
    description: "Demographic groups under five people show as <5 everywhere. We never try to re-identify them.",
  },
  {
    icon: UserCircle,
    title: "Human in the loop",
    description: "AI recommends. You decide. No offer goes out without a human hitting approve.",
  },
  {
    icon: List,
    title: "Audited end to end",
    description: "Every consent, score and decision gets logged with who did it, why, and when.",
  },
]

export function Compliance() {
  return (
    <section className="py-24 bg-white border-y border-line" id="compliance">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header - no eyebrow, slide in from right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch] ml-auto text-right"
        >
          <h2 className="font-display font-semibold text-section">
            Compliant by design, built for Africa.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            PeopleTrak is built around African data-protection law — the Nigeria Data Protection Act today, designed to extend across the continent — with GDPR-grade controls and a person accountable for every decision.
          </p>
        </motion.div>

        {/* Compliance grid - asymmetric 2+4 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-11">
          {/* First row - two large cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-page border border-line rounded-2xl p-6"
          >
            <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-3.5">
              <Shield className="w-5 h-5 text-purple" strokeWidth={2} />
            </div>
            <h3 className="font-display font-semibold text-[17.5px]">
              {complianceItems[0].title}
            </h3>
            <p className="text-[14.5px] text-slate-custom mt-2 leading-snug">
              {complianceItems[0].description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-page border border-line rounded-2xl p-6"
          >
            <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-3.5">
              <CheckCircle className="w-5 h-5 text-purple" strokeWidth={2} />
            </div>
            <h3 className="font-display font-semibold text-[17.5px]">
              {complianceItems[1].title}
            </h3>
            <p className="text-[14.5px] text-slate-custom mt-2 leading-snug">
              {complianceItems[1].description}
            </p>
          </motion.div>
        </div>
        
        {/* Second row - four smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {complianceItems.slice(2).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="bg-page border border-line rounded-2xl p-5"
            >
              <div className="w-9 h-9 rounded-[10px] bg-purple-50 flex items-center justify-center mb-3">
                <item.icon className="w-4 h-4 text-purple" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-base">
                {item.title}
              </h3>
              <p className="text-sm text-slate-custom mt-1.5 leading-snug">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
