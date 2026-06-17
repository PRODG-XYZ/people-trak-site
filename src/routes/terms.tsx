import { Link } from "react-router-dom"
import { Section, Clause, AlphaList } from "@/components/legal/legal-doc"

const tocItems = [
  { id: "s1", label: "1. Introduction and Acceptance" },
  { id: "s2", label: "2. Definitions" },
  { id: "s3", label: "3. Platform Access and User Accounts" },
  { id: "s4", label: "4. Permitted Use" },
  { id: "s5", label: "5. AI Processing and Automated Decision-Making" },
  { id: "s6", label: "6. Data Protection Obligations" },
  { id: "s7", label: "7. Candidate Rights" },
  { id: "s8", label: "8. Security" },
  { id: "s9", label: "9. Data Retention" },
  { id: "s10", label: "10. Intellectual Property" },
  { id: "s11", label: "11. Limitation of Liability" },
  { id: "s12", label: "12. Governing Law" },
]

export function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink pt-16 pb-14">
        <div className="max-w-wrap mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[13px] text-[#8F88BC] mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </div>
          <div className="inline-flex items-center bg-purple-500/20 text-purple-300 text-[12px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            Legal Document · Part A
          </div>
          <h1 className="font-display font-semibold text-white text-[clamp(32px,4vw,52px)] leading-[1.04] tracking-[-0.03em] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#A9A2D6] text-[15px]">
            Version 1.0 · June 2026 · PeopleTrak AI Recruiter Platform
          </p>
          <p className="text-[#8F88BC] text-[13.5px] mt-1.5">
            Prepared for: RedTech / HH Group · Confidential — Not for Distribution
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-page py-16">
        <div className="max-w-wrap mx-auto px-6 lg:px-12">
          <div className="flex gap-14 xl:gap-20">
            {/* Sidebar TOC — top-[94px] = nav height (70px) + 24px buffer */}
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
                    to="/privacy"
                    className="block text-[13px] text-slate-custom hover:text-purple transition-colors py-[3px]"
                  >
                    Privacy Policy →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document */}
            <div className="flex-1 min-w-0">
              <Section id="s1" number="1" title="Introduction and Acceptance">
                <Clause n="1.1">
                  These Terms of Service ("Terms") govern access to and use of the PeopleTrak AI Recruiter Platform ("Platform"), a software-as-a-service product developed and operated by RedTech Limited on behalf of HH Group ("we", "us", "our").
                </Clause>
                <Clause n="1.2">
                  By accessing or using the Platform, you ("User", "you") agree to be bound by these Terms. If you do not agree, you must not use the Platform.
                </Clause>
                <Clause n="1.3">
                  These Terms apply to all users of the Platform, including HR Administrators, Recruiters, Hiring Managers, Employees, and Candidates accessing the Candidate Portal.
                </Clause>
                <Clause n="1.4">
                  RedTech Limited reserves the right to update these Terms at any time. Continued use of the Platform after notification of changes constitutes acceptance of the revised Terms.
                </Clause>
              </Section>

              <Section id="s2" number="2" title="Definitions">
                <p className="text-[15px] text-slate-custom mb-4">For the purposes of these Terms:</p>
                <dl className="space-y-3">
                  {[
                    ['"Platform"', 'means the PeopleTrak AI Recruiter application, including all web interfaces, APIs, background services, and associated software.'],
                    ['"Organisation"', 'means any employer entity that has engaged RedTech Limited to deploy the Platform for their recruitment operations.'],
                    ['"HR Administrator"', 'means an individual granted administrative access to manage the Platform on behalf of an Organisation.'],
                    ['"Candidate"', 'means an individual whose profile has been sourced, referred, or who has applied via the Platform for a role with an Organisation.'],
                    ['"Personal Data"', 'has the meaning given under the Nigeria Data Protection Act 2023 (NDPA) and, where applicable, the General Data Protection Regulation (GDPR).'],
                    ['"AI Processing"', 'means any automated analysis, scoring, ranking, or decision-support function performed by the Platform using artificial intelligence or machine learning.'],
                    ['"Consent"', 'means freely given, specific, informed, and unambiguous indication of agreement to data processing, as required by NDPA Section 2(2)(a) and GDPR Article 7.'],
                  ].map(([term, def]) => (
                    <div key={term} className="flex gap-3 text-[15px] leading-relaxed">
                      <dt className="font-semibold text-ink shrink-0">{term}</dt>
                      <dd className="text-text">{def}</dd>
                    </div>
                  ))}
                </dl>
              </Section>

              <Section id="s3" number="3" title="Platform Access and User Accounts">
                <Clause n="3.1">Access to the Platform is granted by the Organisation's HR Administrator. Each User is responsible for maintaining the confidentiality of their login credentials.</Clause>
                <Clause n="3.2">Users must not share account credentials or permit unauthorised individuals to access the Platform using their credentials.</Clause>
                <Clause n="3.3">RedTech Limited may suspend or terminate access where there is evidence of unauthorised use, security breach, or breach of these Terms.</Clause>
                <Clause n="3.4">Multi-factor authentication (MFA) may be required for HR Administrator accounts. Users are required to comply with any MFA requirements imposed by the Platform.</Clause>
                <Clause n="3.5">Users are responsible for ensuring that all information provided to the Platform is accurate and up to date.</Clause>
              </Section>

              <Section id="s4" number="4" title="Permitted Use">
                <Clause n="4.1">The Platform is licensed for use solely for the purpose of recruitment, talent management, and related HR functions within the Organisation.</Clause>
                <Clause n="4.2">
                  Users must not:
                  <AlphaList items={[
                    'use the Platform to process Personal Data for any purpose other than legitimate recruitment and HR operations;',
                    'attempt to reverse-engineer, decompile, or extract source code from the Platform;',
                    'use the Platform to engage in discriminatory recruitment practices prohibited by applicable law;',
                    'upload, transmit, or process unlawful, defamatory, or fraudulent content;',
                    "attempt to circumvent the Platform's security, consent, or access controls.",
                  ]} />
                </Clause>
                <Clause n="4.3">The Organisation is responsible for ensuring that its HR Administrators, Recruiters, and Hiring Managers use the Platform in compliance with applicable employment and data protection law.</Clause>
              </Section>

              <Section id="s5" number="5" title="AI Processing and Automated Decision-Making">
                <Clause n="5.1">The Platform uses artificial intelligence to assist with candidate sourcing, shortlisting, scoring, interview analysis, and goal generation. All AI outputs are provided as decision-support tools and not as final decisions.</Clause>
                <Clause n="5.2">In accordance with NDPA Section 25 and GDPR Article 22, no hiring decision shall be made solely on the basis of automated processing. A human recruiter or hiring manager must review and approve all AI-generated shortlists, scores, and evaluation outputs before any decision is communicated to a candidate.</Clause>
                <Clause n="5.3">
                  The Platform implements the following safeguards for AI processing:
                  <AlphaList items={[
                    'Protected characteristic proxy stripping before AI scoring to reduce bias;',
                    'Human-in-the-loop approval gates at shortlisting and evaluation stages;',
                    'Explainability panels that show the basis for AI recommendations;',
                    'Immutable audit logs of all AI-assisted decisions.',
                  ]} />
                </Clause>
                <Clause n="5.4">Candidates have the right to request a human review of any AI-assisted decision that affects their application. This right is disclosed to candidates at the point of consent.</Clause>
                <Clause n="5.5">Where the Platform includes features involving biometric data processing (including facial emotion analysis), such features are disabled by default and may only be activated with explicit candidate consent and subject to a Data Protection Impact Assessment (DPIA) being completed by the Organisation.</Clause>
              </Section>

              <Section id="s6" number="6" title="Data Protection Obligations">
                <Clause n="6.1">RedTech Limited processes Personal Data in accordance with the Nigeria Data Protection Act 2023, the General Data Protection Regulation (GDPR) where applicable, and the Platform's Privacy Policy set out in <Link to="/privacy" className="text-purple underline hover:text-purple-700 transition-colors">Part B</Link> of this document.</Clause>
                <Clause n="6.2">The Organisation is the data controller for candidate and employee Personal Data processed through the Platform. RedTech Limited acts as data processor on behalf of the Organisation, pursuant to a Data Processing Agreement.</Clause>
                <Clause n="6.3">
                  The Organisation must:
                  <AlphaList items={[
                    'have a lawful basis for all processing activities conducted through the Platform;',
                    'ensure that candidates are provided with a compliant privacy notice before their data is processed;',
                    'honour data subject rights requests (access, erasure, rectification, objection) within the statutory timeframes;',
                    'appoint a Data Protection Officer (DPO) and register with NITDA where required under the NDPA;',
                    'not instruct RedTech Limited to process Personal Data in a manner that would violate applicable law.',
                  ]} />
                </Clause>
                <Clause n="6.4">Third-party integrations (including Bright Data, Apollo, Fireflies, Testlify, DocuSeal, and Google Calendar) are governed by separate data processing agreements between the Organisation and each third party. The Organisation is responsible for ensuring that these agreements are in place before activating the relevant integration.</Clause>
              </Section>

              <Section id="s7" number="7" title="Candidate Rights">
                <Clause n="7.1">
                  Candidates whose data is processed through the Platform have the following rights, which the Platform is designed to support:
                  <AlphaList items={[
                    'Right to be informed — candidates are notified of data processing at first contact and through the privacy notice;',
                    'Right of access — candidates may request a copy of their personal data;',
                    'Right to erasure — candidates may withdraw consent and request deletion of their data via the Candidate Portal;',
                    'Right to object to automated decisions — candidates may request human review of any AI-assisted outcome;',
                    'Right to withdraw consent — candidates may revoke any consent at any time via the Privacy Settings panel in the Candidate Portal.',
                  ]} />
                </Clause>
                <Clause n="7.2">Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</Clause>
                <Clause n="7.3">Organisations must process data subject rights requests within the timeframes required by applicable law: 21 days under the NDPA, 30 days under GDPR, 45 days under CCPA.</Clause>
              </Section>

              <Section id="s8" number="8" title="Security">
                <Clause n="8.1">
                  RedTech Limited implements technical and organisational security measures in accordance with NDPA Section 34 and GDPR Article 32, including:
                  <AlphaList items={[
                    'Encryption of Personal Data in transit and at rest;',
                    'Role-based access controls (RBAC) limiting data access to authorised users;',
                    'Multi-factor authentication for privileged accounts;',
                    'Automated virus scanning on all file uploads;',
                    'Rate limiting and intrusion detection on all candidate-facing endpoints;',
                    'Regular security audits and penetration testing.',
                  ]} />
                </Clause>
                <Clause n="8.2">In the event of a Personal Data breach that is likely to result in a risk to data subjects, RedTech Limited will notify the Organisation within 72 hours of becoming aware of the breach. The Organisation is responsible for notifying the relevant supervisory authority (NITDA under NDPA; relevant DPA under GDPR) and, where required, affected data subjects.</Clause>
              </Section>

              <Section id="s9" number="9" title="Data Retention">
                <Clause n="9.1">
                  Personal Data is retained in accordance with the retention periods defined in the Platform's consent texts and the Organisation's data retention policy. The following default retention periods apply:
                  <AlphaList items={[
                    'Candidate questionnaire responses: duration of recruitment process plus 12 months;',
                    'Interview recordings and transcripts: 90 days after the recruitment process ends;',
                    'AI analysis outputs: deleted immediately on consent revocation; system-propagated copies within 30 days;',
                    'Unsuccessful candidate data: 6 months from rejection date;',
                    'Consent records: 7 years (to demonstrate lawfulness of processing);',
                    'Offer documents: 7 years (employment law requirement).',
                  ]} />
                </Clause>
                <Clause n="9.2">The Organisation may configure custom retention periods via the Platform settings, subject to minimum periods required by law.</Clause>
              </Section>

              <Section id="s10" number="10" title="Intellectual Property">
                <Clause n="10.1">The Platform, including all software, AI models, algorithms, designs, and documentation, is the intellectual property of RedTech Limited. No rights are transferred to the Organisation or its users under these Terms except a limited licence to use the Platform for its intended purpose.</Clause>
                <Clause n="10.2">Data submitted to the Platform by the Organisation (including job requisitions, candidate profiles, and evaluation outputs) remains the property of the Organisation.</Clause>
              </Section>

              <Section id="s11" number="11" title="Limitation of Liability">
                <Clause n="11.1">To the maximum extent permitted by applicable law, RedTech Limited shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the Platform.</Clause>
                <Clause n="11.2">RedTech Limited's total aggregate liability to the Organisation shall not exceed the fees paid by the Organisation for the Platform in the 12 months preceding the claim.</Clause>
                <Clause n="11.3">RedTech Limited is not liable for any failure by the Organisation to comply with its obligations as data controller, including failure to obtain valid consent from candidates.</Clause>
              </Section>

              <Section id="s12" number="12" title="Governing Law" last>
                <Clause n="12.1">These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</Clause>
                <Clause n="12.2">Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</Clause>
              </Section>

              <div className="mt-10 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-[13px] text-slate-custom">Version 1.0 · Last revised June 2026</p>
                <Link to="/privacy" className="text-[14px] text-purple font-medium hover:text-purple-700 transition-colors">
                  View Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
