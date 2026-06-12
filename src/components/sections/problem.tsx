import { motion } from "framer-motion"
import { AlignLeft, Search, Star } from "lucide-react"

const problems = [
  {
    icon: AlignLeft,
    title: "Briefed by gut",
    description: "Every hiring manager describes \"good\" differently, so the same role gets judged against a moving target.",
  },
  {
    icon: Search,
    title: "Sourced by hand",
    description: "Hours of manual trawling, then a separate pile of inbound CVs in a dozen different formats.",
  },
  {
    icon: Star,
    title: "Ranked by feel",
    description: "A subjective call across the pile, with nothing on record to explain — or defend — the order.",
  },
]

export function Problem() {
  return (
    <section className="py-24" id="problem">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch]"
        >
          <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple">
            The problem
          </span>
          <h2 className="font-display font-semibold text-section mt-3.5">
            Hiring stalls in the same three places.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            Roles get briefed by gut, sourcing is manual, and the shortlist comes down to a tired reader making subjective calls — with no record of why one candidate ranked above another.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-page border border-line rounded-[18px] p-7"
            >
              <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-purple" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-[19px]">
                {problem.title}
              </h3>
              <p className="text-[15px] text-slate-custom mt-2">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
