import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { ScoreRing } from "@/components/ui/score-ring"
import { Progress } from "@/components/ui/progress"

const steps = [
  {
    number: 1,
    phase: "Define",
    title: "Say what good looks like, first.",
    description: "Capture the role as a job description, spec and KPIs, with a weight on every criterion. The bar is explicit before a single candidate is scored — so the scoring is too.",
    points: [
      "JD, spec and KPI definitions in one place",
      "Configurable weighting per criterion",
    ],
  },
  {
    number: 2,
    phase: "Capture",
    title: "One pool, one schema — consent-first.",
    description: "Every applicant lands in a single pool and is normalised against the same schema, so no CV wins on formatting. Consent is captured and timestamped before anything is scored — nothing runs without it.",
    points: [
      "Normalised to one schema, whatever the format",
      "NDPR/GDPR consent captured before any scoring",
    ],
  },
  {
    number: 3,
    phase: "Rank",
    title: "Apples to apples, above the line.",
    description: "Every candidate is scored by an AI model against your JD, spec and KPI weighting. Anyone above the 80% match threshold surfaces on the shortlist — each with a score breakdown you can open.",
    points: [
      "One model, one weighting, every candidate",
      "Shortlist surfaces above an 80% match",
    ],
  },
  {
    number: 4,
    phase: "Screen",
    title: "CV in, screening out.",
    description: "A submitted CV triggers a second-pass rescore and a screening summary, plus role-specific pre-screening questions drawn straight from the JD and spec — ready before the call.",
    points: [
      "Two-pass scoring: profile first, then the submitted CV",
      "AI pre-screening questions from the JD & spec",
    ],
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white border-y border-line" id="how">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[62ch]"
        >
          <span className="font-body font-semibold text-[13px] uppercase tracking-[0.15em] text-lime" style={{ color: "#7e9118" }}>
            Inside the shortlist
          </span>
          <h2 className="font-display font-semibold text-section mt-3.5">
            Define, capture, rank, screen.
          </h2>
          <p className="text-[18.5px] text-slate-custom mt-4">
            One structured workflow turns a role into a ranked, explainable shortlist — and a CV into a screening summary you can act on.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0 mt-12">
          {/* Step 1: Define */}
          <StepVisual 
            step={steps[0]}
            visual={
              <div className="bg-page border border-line rounded-[20px] p-6 shadow-card">
                <div className="border border-line rounded-xl px-4 py-3 bg-page mb-3">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-2">Role</div>
                  <div className="text-[15px] font-medium mt-1">Senior Backend Engineer</div>
                </div>
                <div className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-2 mt-4 mb-2">Weighted criteria</div>
                <Progress label="Core skills" value={35} showValue className="py-1.5" />
                <Progress label="Experience" value={30} showValue className="py-1.5" />
                <Progress label="Domain fit" value={20} showValue className="py-1.5" />
                <Progress label="Location" value={15} showValue className="py-1.5" />
              </div>
            }
          />

          {/* Step 2: Capture */}
          <StepVisual 
            step={steps[1]}
            flip
            visual={
              <div className="bg-page border border-line rounded-[20px] p-6 shadow-card">
                {[
                  { initials: "AO", name: "Amara Okonkwo", role: "Senior Backend Engineer", color: "#7C3AED" },
                  { initials: "MH", name: "Mariam Haddad", role: "Platform Engineer", color: "#A78BFA" },
                  { initials: "JW", name: "Jon Wuolah", role: "Backend Engineer", color: "#1E1B4B" },
                ].map((p) => (
                  <div key={p.initials} className="flex items-center gap-3 py-3 border border-line rounded-xl px-3.5 mb-2.5 bg-page">
                    <span 
                      className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.initials}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-xs text-slate-custom">{p.role}</div>
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-purple bg-purple-50 px-2 py-1 rounded-md shrink-0">
                      Consent ✓
                    </span>
                  </div>
                ))}
                <div className="text-center text-xs text-slate-custom mt-2">+ 35 more · normalised & consent-gated</div>
              </div>
            }
          />

          {/* Step 3: Rank */}
          <StepVisual 
            step={steps[2]}
            id="ranking"
            visual={
              <div className="bg-page border border-line rounded-[20px] p-6 shadow-card flex items-center gap-6 justify-center flex-wrap">
                <ScoreRing score={94} size="md" label="Match" />
                <div>
                  <div className="font-bold text-base">Amara Okonkwo</div>
                  <div className="text-[13px] text-slate-custom mb-3">Top of 38</div>
                  <Progress label="Core skills" value={96} showValue size="sm" className="py-1" />
                  <Progress label="Experience" value={92} showValue size="sm" className="py-1" />
                  <Progress label="Domain fit" value={90} showValue size="sm" className="py-1" />
                </div>
              </div>
            }
          />

          {/* Step 4: Screen */}
          <StepVisual 
            step={steps[3]}
            flip
            visual={
              <div className="bg-page border border-line rounded-[20px] p-6 shadow-card">
                <div className="flex flex-col gap-3">
                  <div className="self-end bg-purple text-white rounded-[14px] rounded-br-[5px] px-4 py-3 text-sm max-w-[80%]">
                    Summarise Amara and suggest three interview questions.
                  </div>
                  <div className="self-start bg-page border border-line rounded-[14px] rounded-bl-[5px] px-4 py-3 text-sm max-w-[80%]">
                    <b className="text-ink">Screening summary.</b> 8 yrs backend, fintech infra, led a 6-person platform team. Strong on core skills (96) and domain fit (90); lighter on managed-team scale.
                  </div>
                  <div className="self-start bg-page border border-line rounded-[14px] rounded-bl-[5px] px-4 py-3 text-sm max-w-[80%]">
                    Ask about: 1) designing for idempotent payments, 2) a tradeoff they'd defend, 3) scaling a team past ten.
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

interface StepVisualProps {
  step: typeof steps[0]
  visual: React.ReactNode
  flip?: boolean
  id?: string
}

function StepVisual({ step, visual, flip, id }: StepVisualProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-14 items-center py-8 ${flip ? "" : ""}`}
    >
      <div className={flip ? "lg:order-2" : ""}>
        <div className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-wider text-purple">
          <span className="w-[26px] h-[26px] rounded-lg bg-purple-50 flex items-center justify-center font-display text-sm">
            {step.number}
          </span>
          {step.phase}
        </div>
        <h3 className="font-display font-semibold text-[30px] mt-3.5">
          {step.title}
        </h3>
        <p className="text-[17px] text-slate-custom mt-3 max-w-[46ch]">
          {step.description}
        </p>
        <div className="flex flex-col gap-2 mt-5">
          {step.points.map((point) => (
            <div key={point} className="flex gap-2.5 items-start text-[15px] text-text">
              <span className="w-[19px] h-[19px] rounded-md bg-lime flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-ink" strokeWidth={3} />
              </span>
              {point}
            </div>
          ))}
        </div>
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        {visual}
      </div>
    </motion.div>
  )
}
