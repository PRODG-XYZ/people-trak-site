import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/icons/logo"
import { Progress } from "@/components/ui/progress"

export function Showcase() {
  return (
    <section className="py-24" id="showcase">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch]"
        >
          <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-purple">
            In the product
          </span>
          <h2 className="font-display font-semibold text-section mt-3.5">
            The shortlist, where the work happens.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            This is where hiring actually happens. One screen with everything you need: the score, how they got it, and what to ask them. No tab-switching. No guessing.
          </p>
        </motion.div>

        {/* Showcase content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center mt-8">
          {/* Candidate Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-line rounded-[20px] overflow-hidden shadow-card"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3.5 p-5 border-b border-line">
              <Logo variant="glyph" className="w-[46px] h-[46px] rounded-[11px]" />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[17px] truncate">Amara Okonkwo</div>
                <div className="text-[13.5px] text-slate-custom truncate">Senior Backend Engineer · Lagos</div>
              </div>
              <div className="font-display font-bold text-[21px] text-ink bg-lime px-3 py-1.5 rounded-[11px] tabular-nums">
                94
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5">
              <Progress label="Core skills" value={96} showValue className="py-1.5" />
              <Progress label="Experience" value={92} showValue className="py-1.5" />
              <Progress label="Domain fit" value={90} showValue className="py-1.5" />
              <Progress label="Location" value={100} showValue className="py-1.5" />
            </div>

            {/* Card Footer */}
            <div className="flex flex-wrap items-center gap-2.5 px-5 py-4 border-t border-line">
              <Button size="default" className="text-sm px-4 py-2.5 h-auto">
                Generate screening
              </Button>
              <Button variant="ghost" size="default" className="text-sm px-4 py-2.5 h-auto">
                View evidence
              </Button>
              <span className="ml-auto text-[11px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1.5 rounded-lg">
                Shortlisted
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-[26px]">
              One shortlist, every reason in view.
            </h3>
            <p className="text-[17px] text-slate-custom mt-3.5">
              Generate a screening summary, open a candidate's per-KPI breakdown, or compare your top three side by side — all from the same shortlist. The score is in mono, the reasoning is in the open, and the decision is recorded.
            </p>
            <div className="flex flex-col gap-2.5 mt-5">
              {[
                "Visible score breakdown on every candidate",
                "Screening summary & questions in minutes",
                "Kept separate from your internal employee records",
              ].map((point) => (
                <div key={point} className="flex gap-2.5 items-start text-[15px] text-text">
                  <span className="w-[19px] h-[19px] rounded-md bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-ink" strokeWidth={3} />
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
