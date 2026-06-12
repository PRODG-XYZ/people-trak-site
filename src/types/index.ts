export interface Candidate {
  id: string
  initials: string
  name: string
  role: string
  location: string
  score: number
  breakdown: {
    coreSkills: number
    experience: number
    domainFit: number
    location: number
  }
}

export interface MetricItem {
  value: string
  label: string
}

export interface Stage {
  number: string
  title: string
  description: string
}

export interface ComplianceItem {
  icon: string
  title: string
  description: string
}

export interface ShortlistCandidate {
  id: string
  name: string
  role: string
  score: number
  isMatch: boolean
}

export interface NavLink {
  label: string
  href: string
}
