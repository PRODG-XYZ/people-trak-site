import { motion } from "framer-motion"
import { AlignLeft, Search, Star } from "lucide-react"

const problems = [
  {
    icon: AlignLeft,
    title: "Everyone wants something different",
    description: "Your hiring manager wants a team player. Engineering wants deep expertise. Finance wants someone cheap. The role brief changes depending on who you ask.",
  },
  {
    icon: Search,
    title: "You're still copy-pasting between tabs",
    description: "LinkedIn in one window. A spreadsheet in another. Email threads. PDFs. It takes hours just to see who's in your pipeline.",
  },
  {
    icon: Star,
    title: "Ranking by vibe check",
    description: "When it's time to shortlist, you go with your gut — and hope no one asks why candidate A beat candidate B.",
  },
]

export function Problem() {
  return (
    <section className="py-24" id="problem">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header - side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-section"
          >
            Hiring stalls in the same three places.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18.5px] text-slate-custom"
          >
            Roles get briefed by gut, sourcing is manual, and the shortlist comes down to a tired reader making subjective calls — with no record of why one candidate ranked above another.
          </motion.p>
        </div>

        {/* Problem cards - asymmetric sizing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-page border border-line rounded-[18px] p-7"
          >
            <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-4">
              <AlignLeft className="w-5 h-5 text-purple" strokeWidth={2.2} />
            </div>
            <h3 className="font-display font-semibold text-[19px]">
              Everyone wants something different
            </h3>
            <p className="text-[15px] text-slate-custom mt-2">
              Your hiring manager wants a team player. Engineering wants deep expertise. Finance wants someone cheap. The role brief changes depending on who you ask.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-page border border-line rounded-[18px] p-7"
          >
            <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-purple" strokeWidth={2.2} />
            </div>
            <h3 className="font-display font-semibold text-[19px]">
              Ranking by vibe check
            </h3>
            <p className="text-[15px] text-slate-custom mt-2">
              When it's time to shortlist, you go with your gut — and hope no one asks why candidate A beat candidate B.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 bg-page border border-line rounded-[18px] p-7 flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="w-[42px] h-[42px] rounded-[11px] bg-purple-50 flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-purple" strokeWidth={2.2} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-[19px]">
                You're still copy-pasting between tabs
              </h3>
              <p className="text-[15px] text-slate-custom mt-2 md:mt-1">
                LinkedIn in one window. A spreadsheet in another. Email threads. PDFs. It takes hours just to see who's in your pipeline.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
