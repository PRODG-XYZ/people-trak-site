import { Link } from "react-router-dom"

const tocItems = [
  { id: "p1", label: "1. Who We Are" },
  { id: "p2", label: "2. What Data We Collect" },
  { id: "p3", label: "3. Why We Process Your Data" },
  { id: "p4", label: "4. How We Found Your Data" },
  { id: "p5", label: "5. Who We Share Your Data With" },
  { id: "p6", label: "6. Your Rights" },
  { id: "p7", label: "7. Consent Management" },
  { id: "p8", label: "8. Data Retention" },
  { id: "p9", label: "9. Security" },
  { id: "p10", label: "10. Cookies and Tracking" },
  { id: "p11", label: "11. Changes to This Policy" },
  { id: "p12", label: "12. Contact Us" },
]

export function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink pt-16 pb-14">
        <div className="max-w-wrap mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[13px] text-[#8F88BC] mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center bg-purple-500/20 text-purple-300 text-[12px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            Legal Document · Part B
          </div>
          <h1 className="font-display font-semibold text-white text-[clamp(32px,4vw,52px)] leading-[1.04] tracking-[-0.03em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#A9A2D6] text-[15px]">
            Version 1.0 · June 2026 · PeopleTrak AI Recruiter Platform
          </p>
          <p className="text-[#8F88BC] text-[13.5px] mt-1.5">
            Candidate &amp; User Notice · Prepared for: RedTech / HH Group
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-page py-16">
        <div className="max-w-wrap mx-auto px-6 lg:px-12">
          <div className="flex gap-14 xl:gap-20">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block w-[210px] flex-shrink-0">
              <div className="sticky top-[94px]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-custom mb-3">
                  Contents
                </p>
                <nav className="space-y-0.5">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-[13px] text-slate-custom hover:text-purple transition-colors py-[3px] leading-snug"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-line">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-custom mb-2">
                    Related
                  </p>
                  <Link
                    to="/terms"
                    className="block text-[13px] text-slate-custom hover:text-purple transition-colors py-[3px]"
                  >
                    Terms of Service →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document */}
            <div className="flex-1 min-w-0">

              <Section id="p1" number="1" title="Who We Are">
                <Clause n="1.1">PeopleTrak is an AI-powered recruitment platform developed and operated by RedTech Limited on behalf of HH Group.</Clause>
                <Clause n="1.2">For the purposes of data protection law, the Organisation using PeopleTrak to recruit is the data controller of your personal data. RedTech Limited acts as a data processor on behalf of that Organisation.</Clause>
                <Clause n="1.3">If you have questions about how your data is used, please contact the Organisation's HR team or Data Protection Officer.</Clause>
              </Section>

              <Section id="p2" number="2" title="What Data We Collect">
                <Subsection title="2.1 Candidate Data (Sourced Candidates)">
                  <p className="text-[15px] text-text leading-relaxed mb-3">
                    If your profile was sourced by the Platform (e.g., from LinkedIn, Bright Data, or HarvestAPI), the following data may have been collected:
                  </p>
                  <BulletList items={[
                    'Full name',
                    'Email address',
                    'Phone number',
                    'LinkedIn profile URL',
                    'Current and previous job titles, employers, and work history',
                    'Educational qualifications',
                    'Skills and competencies',
                    'Publicly available professional profile information',
                  ]} />
                </Subsection>
                <Subsection title="2.2 Candidate Data (Self-Applied Candidates)">
                  <p className="text-[15px] text-text leading-relaxed mb-3">
                    If you submitted an application via the career portal, the following additional data may be collected:
                  </p>
                  <BulletList items={[
                    'CV / resume',
                    'Cover letter',
                    'Answers to pre-screening questionnaire questions',
                    'Assessment results (where applicable)',
                  ]} />
                </Subsection>
                <Subsection title="2.3 Interview Data">
                  <p className="text-[15px] text-text leading-relaxed mb-3">
                    Where you have consented to interview AI processing:
                  </p>
                  <BulletList items={[
                    'Interview transcript (generated by Fireflies.ai)',
                    'AI-generated summary of interview',
                    'Sentiment analysis outputs',
                    'Confidence scores and keyword analysis',
                    'Video recording and playback URL (where applicable)',
                    'Facial emotion analysis outputs (only with explicit separate consent and where Organisation has enabled this feature)',
                  ]} />
                </Subsection>
                <Subsection title="2.4 HR User Data">
                  <p className="text-[15px] text-text leading-relaxed mb-3">
                    For HR Administrators, Recruiters, and Hiring Managers:
                  </p>
                  <BulletList items={[
                    'Full name and work email address',
                    'Role and department',
                    'Login activity and session records',
                    'Audit log entries recording actions taken on the Platform',
                  ]} />
                </Subsection>
              </Section>

              <Section id="p3" number="3" title="Why We Process Your Data (Lawful Basis)">
                <p className="text-[15px] text-text leading-relaxed mb-5">
                  The table below sets out the lawful basis for each processing activity carried out through the Platform.
                </p>
                <div className="overflow-x-auto rounded-xl border border-line">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="bg-mist border-b border-line">
                        <th className="text-left px-4 py-3 font-semibold text-ink">Processing Activity</th>
                        <th className="text-left px-4 py-3 font-semibold text-ink">Lawful Basis (NDPA / GDPR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Sourcing your professional profile for a specific vacancy', 'Legitimate interest (NDPA S.2(2)(b) / GDPR Art.6(1)(f)) — assessed against your right to privacy'],
                        ['Sending you an initial outreach email', 'Legitimate interest, subject to your right to opt out'],
                        ['Processing your CV and application after you consent', 'Consent (NDPA S.2(2)(a) / GDPR Art.6(1)(a))'],
                        ['AI scoring and shortlisting of your profile', 'Consent (AI_SCORING consent type)'],
                        ['Conducting pre-screening questionnaire', 'Consent (QUESTIONNAIRE consent type)'],
                        ['Interview scheduling and recording', 'Consent (INTERVIEW_RECORDING consent type)'],
                        ['Background verification', 'Consent (BACKGROUND_CHECK consent type)'],
                        ['Assessment via third-party provider', 'Consent (ASSESSMENT_PROCESSING consent type)'],
                        ['Sending you job opportunity notifications', 'Consent (MARKETING consent type)'],
                        ['Complying with legal obligations', 'Legal obligation (NDPA S.34 / GDPR Art.6(1)(c))'],
                      ].map(([activity, basis], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-mist/50' : 'bg-white'}>
                          <td className="px-4 py-3 text-text align-top border-b border-line/60">{activity}</td>
                          <td className="px-4 py-3 text-slate-custom align-top border-b border-line/60">{basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section id="p4" number="4" title="How We Found Your Data">
                <Clause n="4.1">
                  If you did not apply directly, your profile may have been identified through one of the following sourcing methods:
                </Clause>
                <div className="mt-4 space-y-3">
                  {[
                    { source: 'Bright Data Dataset (Tier 1 — DPA in place)', detail: 'Publicly available professional profile data from LinkedIn and similar platforms. Countries covered: Nigeria, Kenya, Ghana, South Africa, EU, US.' },
                    { source: 'Bright Data Live Proxy (Tier 2 — Public data only)', detail: 'Real-time scraping of publicly available profiles. Countries covered: Nigeria, Kenya, Ghana, South Africa.' },
                    { source: 'HarvestAPI (Tier 2 — Public data only)', detail: 'Publicly available professional profile aggregation. Countries covered: Nigeria, Kenya, Ghana, South Africa.' },
                    { source: 'Apollo.io', detail: 'Email address and contact enrichment based on your publicly available professional profile.' },
                    { source: 'Direct referral', detail: 'Your profile may have been referred by a colleague or professional contact.' },
                  ].map(({ source, detail }) => (
                    <div key={source} className="pl-4 border-l-2 border-purple-200">
                      <p className="text-[15px] font-semibold text-ink">{source}</p>
                      <p className="text-[14px] text-slate-custom mt-0.5">{detail}</p>
                    </div>
                  ))}
                </div>
                <Clause n="4.2">You are informed of this sourcing at first contact, in accordance with NDPA Section 26 and GDPR Article 14.</Clause>
              </Section>

              <Section id="p5" number="5" title="Who We Share Your Data With">
                <Clause n="5.1">Your data may be shared with the following categories of recipients:</Clause>
                <div className="overflow-x-auto rounded-xl border border-line mt-4">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="bg-mist border-b border-line">
                        <th className="text-left px-4 py-3 font-semibold text-ink">Recipient</th>
                        <th className="text-left px-4 py-3 font-semibold text-ink">Purpose</th>
                        <th className="text-left px-4 py-3 font-semibold text-ink">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Organisation's HR team and Hiring Managers", 'Recruitment decision-making', 'Nigeria / applicable jurisdiction'],
                        ['Fireflies.ai', 'Interview transcription and AI analysis', 'United States'],
                        ['Testlify', 'Skills and aptitude assessment delivery', 'United States'],
                        ['DocuSeal', 'Electronic offer document signing', 'Varies'],
                        ['Google / Microsoft', 'Calendar integration for interview scheduling', 'United States'],
                        ['Apollo.io', 'Email and contact enrichment', 'United States'],
                        ["Africa's Talking", 'SMS and WhatsApp communication delivery', 'Kenya / Nigeria'],
                        ['HH Group entities', 'Cross-organisation analytics (anonymised)', 'Nigeria'],
                      ].map(([recipient, purpose, location], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-mist/50' : 'bg-white'}>
                          <td className="px-4 py-3 text-text font-medium align-top border-b border-line/60">{recipient}</td>
                          <td className="px-4 py-3 text-slate-custom align-top border-b border-line/60">{purpose}</td>
                          <td className="px-4 py-3 text-slate-custom align-top border-b border-line/60 whitespace-nowrap">{location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Clause n="5.2">Where your data is transferred outside Nigeria, we rely on: (a) adequacy decisions where available; (b) standard contractual clauses; or (c) your explicit consent, in accordance with NDPA Section 41 and GDPR Chapter V.</Clause>
              </Section>

              <Section id="p6" number="6" title="Your Rights">
                <p className="text-[15px] text-text leading-relaxed mb-4">
                  You have the following rights under the NDPA 2023 and GDPR (where applicable):
                </p>
                <div className="space-y-4">
                  {[
                    { label: '6.1 Right to be informed', text: 'You have the right to know how your data is being used. This Privacy Policy fulfils that obligation.' },
                    { label: '6.2 Right of access', text: 'You can request a copy of the personal data we hold about you. We will respond within 21 days (NDPA) / 30 days (GDPR).' },
                    { label: '6.3 Right to erasure', text: 'You can withdraw your consent and request deletion of your data at any time via the Privacy Settings panel in the Candidate Portal, or by contacting the Organisation\'s HR team. We will act within 21 days (NDPA) / 30 days (GDPR).' },
                    { label: '6.4 Right to rectification', text: 'You can request correction of any inaccurate data we hold about you.' },
                    { label: '6.5 Right to object to automated decisions', text: 'You can request that a human reviews any AI-generated assessment, score, or shortlisting decision. No hiring decision is made solely by automated means.' },
                    { label: '6.6 Right to withdraw consent', text: 'You can withdraw any consent at any time. Withdrawing DATA_PROCESSING consent will result in all other consents being revoked and your data being scheduled for deletion.' },
                    { label: '6.7 Right to lodge a complaint', text: 'You have the right to lodge a complaint with the National Information Technology Development Agency (NITDA) in Nigeria, or the relevant data protection supervisory authority in your jurisdiction.' },
                  ].map(({ label, text }) => (
                    <div key={label} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="font-semibold text-ink shrink-0 min-w-[5ch]">{label}</span>
                      <span className="text-text">— {text}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="p7" number="7" title="Consent Management">
                <Clause n="7.1">The Platform captures the following types of consent, each of which can be granted or revoked independently:</Clause>
                <div className="overflow-x-auto rounded-xl border border-line mt-4">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="bg-mist border-b border-line">
                        <th className="text-left px-4 py-3 font-semibold text-ink">Consent Type</th>
                        <th className="text-left px-4 py-3 font-semibold text-ink">What It Covers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['DATA_PROCESSING', 'Core consent — collection, storage, and processing of your personal data for recruitment'],
                        ['AI_SCORING', 'Automated AI scoring of your profile, with human-in-the-loop guarantee'],
                        ['QUESTIONNAIRE', 'Storage and AI analysis of your questionnaire responses'],
                        ['BACKGROUND_CHECK', 'Employment history, education, and reference verification'],
                        ['MARKETING', 'Future job opportunity notifications (optional)'],
                        ['INTERVIEW_RECORDING', 'Recording and transcription of your interview session'],
                        ['EMAIL_COMMUNICATION', 'Recruitment-related email communications'],
                        ['ASSESSMENT_PROCESSING', 'Sharing of assessment data with Testlify for test delivery and results'],
                      ].map(([type, covers], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-mist/50' : 'bg-white'}>
                          <td className="px-4 py-3 font-mono text-[13px] text-purple font-semibold align-top border-b border-line/60 whitespace-nowrap">{type}</td>
                          <td className="px-4 py-3 text-slate-custom align-top border-b border-line/60">{covers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Clause n="7.2">You can manage your consent preferences at any time via the Privacy Settings panel in the Candidate Portal.</Clause>
                <Clause n="7.3">A snapshot of the exact consent text shown to you at the time of your consent is stored and retained as evidence of lawful processing.</Clause>
              </Section>

              <Section id="p8" number="8" title="Data Retention">
                <p className="text-[15px] text-text leading-relaxed mb-4">
                  We retain your personal data for the following periods:
                </p>
                <div className="overflow-x-auto rounded-xl border border-line">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="bg-mist border-b border-line">
                        <th className="text-left px-4 py-3 font-semibold text-ink">Data Type</th>
                        <th className="text-left px-4 py-3 font-semibold text-ink">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Candidate questionnaire responses', 'Duration of recruitment process + 12 months'],
                        ['Interview recordings and transcripts', '90 days after recruitment process ends'],
                        ['AI analysis outputs (if consent revoked)', 'Immediate deletion; system copies within 30 days'],
                        ['Unsuccessful candidate data', '6 months from rejection date'],
                        ['Consent records', '7 years'],
                        ['Offer and employment documents', '7 years'],
                        ['Audit log records', '7 years'],
                      ].map(([type, period], i) => (
                        <tr key={i} className={i % 2 === 1 ? 'bg-mist/50' : 'bg-white'}>
                          <td className="px-4 py-3 text-text align-top border-b border-line/60">{type}</td>
                          <td className="px-4 py-3 text-slate-custom align-top border-b border-line/60 whitespace-nowrap">{period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[14px] text-slate-custom mt-4 italic">
                  After the applicable retention period, your data is permanently deleted from our systems.
                </p>
              </Section>

              <Section id="p9" number="9" title="Security">
                <Clause n="9.1">
                  We implement the following security measures to protect your personal data:
                  <BulletList items={[
                    'Encryption of all data in transit (TLS) and at rest',
                    'Role-based access controls so only authorised personnel can access your data',
                    'Automated virus scanning on all uploaded files',
                    'Rate limiting on all candidate-facing API endpoints',
                    'Regular security audits and penetration testing',
                    'Immutable audit logs of all data access and processing events',
                  ]} />
                </Clause>
                <Clause n="9.2">In the event of a data breach that poses a risk to you, we will notify you and the relevant supervisory authority without undue delay.</Clause>
              </Section>

              <Section id="p10" number="10" title="Cookies and Tracking">
                <Clause n="10.1">The Candidate Portal uses session cookies to maintain your logged-in state. These cookies are essential for the operation of the Portal and cannot be disabled.</Clause>
                <Clause n="10.2">The Platform does not use third-party tracking cookies or behavioural advertising technologies.</Clause>
              </Section>

              <Section id="p11" number="11" title="Changes to This Policy">
                <Clause n="11.1">We may update this Privacy Policy from time to time. The version date at the top of this document indicates when it was last revised.</Clause>
                <Clause n="11.2">Where changes are material, we will notify you by email or via the Candidate Portal before the changes take effect.</Clause>
              </Section>

              <Section id="p12" number="12" title="Contact Us" last>
                <p className="text-[15px] text-text leading-relaxed mb-5">
                  If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:
                </p>
                <div className="bg-mist rounded-xl border border-line px-6 py-5 text-[15px] space-y-1">
                  <p className="font-semibold text-ink">Compliance Officer</p>
                  <p className="text-text">VGG (Venture Garden Group)</p>
                  <p className="text-slate-custom">[Compliance Officer / DPO contact details to be inserted]</p>
                  <p className="text-slate-custom">[Organisation Address to be inserted]</p>
                  <p className="text-slate-custom">NITDA Registration: [To be inserted]</p>
                </div>
              </Section>

              {/* Footer nav */}
              <div className="mt-10 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-[13px] text-slate-custom">
                  Version 1.0 · Last revised June 2026
                </p>
                <Link
                  to="/terms"
                  className="text-[14px] text-purple font-medium hover:text-purple-700 transition-colors"
                >
                  View Terms of Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Section({
  id,
  number,
  title,
  children,
  last = false,
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <section
      id={id}
      className={`mb-10 pb-10 scroll-mt-24 ${last ? "" : "border-b border-line"}`}
    >
      <h2 className="font-display font-semibold text-ink text-[20px] mb-5 flex items-baseline gap-2.5">
        <span className="text-purple text-[15px] font-bold tabular-nums">{number}.</span>
        <span>{title}</span>
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-[15px] font-semibold text-ink mb-3">{title}</h3>
      {children}
    </div>
  )
}

function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-text leading-relaxed">
      <span className="text-slate-custom font-semibold mr-2">{n}</span>
      {children}
    </p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] text-text leading-relaxed">
          <span className="text-purple mt-2 shrink-0 w-1 h-1 rounded-full bg-purple block" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
