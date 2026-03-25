"use client";

import { motion } from "framer-motion";

const candidates = [
  "BMI over 27 with a weight-related health condition",
  "Tried diet and exercise without sustainable results",
  "Struggling with metabolic syndrome or insulin resistance",
  "Hormonal imbalances contributing to weight gain",
  "Looking for a medically supervised, evidence-based approach",
  "Motivated to make lasting lifestyle changes with support",
];

export default function WeightOfferings() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* What we offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>
              The Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              What We Offer
            </h2>
            <div className="space-y-4 text-charcoal/75 text-base leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              <p>
                Our medical weight management program combines the latest advances
                in GLP-1/GIP receptor agonist therapy (including semaglutide and
                tirzepatide) with comprehensive metabolic testing and hormonal
                optimization.
              </p>
              <p>
                These medications work by mimicking hormones that regulate appetite,
                blood sugar, and fat storage — helping your body reset to a healthier
                metabolic state. They&apos;re not a magic fix, but combined with lifestyle
                guidance and hormonal support, the results can be transformative.
              </p>
              <p>
                We monitor your progress with regular check-ins and adjust your
                protocol as your body responds — ensuring both safety and effectiveness
                throughout your journey.
              </p>
            </div>
          </motion.div>

          {/* GLP-1 explained */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-forest rounded-2xl p-8 text-warm-white"
          >
            <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>
              What Is GLP-1/GIP Therapy?
            </h3>
            <div className="space-y-3 text-sm text-warm-white/75 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              <p>
                <strong className="text-warm-white">GLP-1</strong> (glucagon-like peptide-1) and{" "}
                <strong className="text-warm-white">GIP</strong> (glucose-dependent insulinotropic
                polypeptide) are natural gut hormones that signal fullness to your brain,
                slow digestion, and regulate blood sugar.
              </p>
              <p>
                Medications like <strong className="text-warm-white">semaglutide</strong> (Ozempic/Wegovy)
                and <strong className="text-warm-white">tirzepatide</strong> (Mounjaro/Zepbound) are
                receptor agonists — they activate these pathways more powerfully than
                your body can alone.
              </p>
              <p>
                Clinical trials show average weight loss of{" "}
                <strong className="text-warm-white">15–22% of body weight</strong> over 68 weeks,
                with significant improvements in cardiovascular risk, blood sugar,
                and metabolic health.
              </p>
              <p className="text-warm-white/50 text-xs mt-4">
                Results vary. We evaluate candidacy at your consultation and prescribe
                only when medically appropriate.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Who is a candidate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-mist rounded-3xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-forest mb-6 text-center" style={{ fontFamily: "var(--font-display)" }}>
              Who Is a Good Candidate?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {candidates.map((c) => (
                <div key={c} className="flex items-start gap-3 text-sm text-charcoal/70" style={{ fontFamily: "var(--font-sans)" }}>
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
