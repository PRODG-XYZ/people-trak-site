import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="bg-cta-gradient" id="demo">
      <div className="max-w-wrap mx-auto px-6 lg:px-12 py-20 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-semibold text-section text-white max-w-[18ch] mx-auto">
            Turn your next role into a defensible shortlist.
          </h2>
          <p className="text-[19px] text-purple-100 mt-4">
            See PeopleTrak take a live role from requisition to a ranked, defensible shortlist.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Button variant="lime" size="lg" asChild>
              <a href="#">Book a demo</a>
            </Button>
            <Button 
              variant="ghost-dark" 
              size="lg" 
              asChild
              className="bg-white/15 border-white/30 hover:bg-white/25"
            >
              <a href="#how">See how it works</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
