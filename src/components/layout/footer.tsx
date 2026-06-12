import { Logo } from "@/components/icons/logo"

const footerLinks = {
  product: [
    { label: "How it works", href: "#how" },
    { label: "Ranking", href: "#ranking" },
    { label: "Explainability", href: "#explainable" },
    { label: "The shortlist", href: "#showcase" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Security", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Docs", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Status", href: "#" },
    { label: "Book a demo", href: "#demo" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-white py-16 pb-9">
      <div className="max-w-wrap mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 lg:gap-9">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo variant="purple" className="w-[34px] h-[34px] rounded-lg" />
              <span className="font-display font-semibold text-[22px]">
                PeopleTrak
              </span>
            </a>
            <p className="text-[#A9A2D6] text-[14.5px] mt-4 max-w-[30ch]">
              Ranked. Explainable. Defensible. The AI hiring platform — from requisition to onboarding.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-[#8F88BC] mb-3.5">
              Product
            </h4>
            {footerLinks.product.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#CFC9F0] text-[14.5px] py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-[#8F88BC] mb-3.5">
              Company
            </h4>
            {footerLinks.company.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#CFC9F0] text-[14.5px] py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[12.5px] font-bold uppercase tracking-wider text-[#8F88BC] mb-3.5">
              Resources
            </h4>
            {footerLinks.resources.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[#CFC9F0] text-[14.5px] py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-11 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-[#8F88BC]">
          <span>© 2026 PeopleTrak. All rights reserved.</span>
          <span>Privacy · Terms · DPA</span>
        </div>
      </div>
    </footer>
  )
}
