"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We listen to your symptoms, history, and goals — no rush, no template. Just a genuine conversation about your health.",
  },
  {
    number: "02",
    title: "Advanced Lab Testing",
    description:
      "Comprehensive hormone and metabolic panels reveal the root cause of how you're feeling, not just the surface symptoms.",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description:
      "A plan built around your body, your biology, and your life — then adjusted over time as your results improve.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            The Process
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Path to Balance
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full border-2 border-sage/30 bg-warm-white shadow-md mb-6">
                <span
                  className="text-3xl font-bold text-forest"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-forest mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-charcoal/70 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-forest text-warm-white hover:bg-forest/90 transition-all shadow hover:shadow-lg text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Start with a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
