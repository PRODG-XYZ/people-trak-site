export function Section({
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

export function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-text leading-relaxed">
      <span className="text-slate-custom font-semibold mr-2">{n}</span>
      {children}
    </p>
  )
}

export function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-[15px] font-semibold text-ink mb-3">{title}</h3>
      {children}
    </div>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] text-text leading-relaxed">
          <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-purple block" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function AlphaList({ items }: { items: string[] }) {
  const letters = "abcdefghijklmnopqrstuvwxyz"
  return (
    <ol className="mt-3 space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] text-text leading-relaxed">
          <span className="text-slate-custom font-semibold shrink-0">({letters[i]})</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}
