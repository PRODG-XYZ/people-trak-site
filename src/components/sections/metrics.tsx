import { motion } from "framer-motion"

const metrics = [
  { value: "Compliant", label: "NDPA & GDPR-aligned, built for pan-African hiring" },
  { value: "End-to-end", label: "Requisition to offer and onboarding, one platform" },
  { value: "Human-led", label: "AI assists every step; a person makes the call" },
  { value: "Auditable", label: "Every decision logged with actor, rationale and time" },
]

export function Metrics() {
  return (
    <section className="bg-white border-b border-line">
      <div className="max-w-wrap mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display font-bold text-[34px] text-ink tracking-tight leading-none">
                {metric.value}
              </div>
              <div className="text-[13.5px] text-slate-custom mt-1 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
