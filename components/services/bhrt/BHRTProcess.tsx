"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "A 30-minute call or in-office visit to review your symptoms, health history, and goals. No commitment, no pressure — just a real conversation about what you're experiencing.",
  },
  {
    number: "02",
    title: "Comprehensive Lab Testing",
    description:
      "We order a full hormone panel: estrogen, progesterone, testosterone, DHEA, cortisol, thyroid, and metabolic markers. Results are typically back within 5–7 business days.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description:
      "We review your lab results together and build a protocol designed around your biology — including hormone type, dose, delivery method, and timeline.",
  },
  {
    number: "04",
    title: "Ongoing Monitoring & Adjustment",
    description:
      "We check in at 4–6 weeks and re-test labs at 3 months to see how your body is responding. Your protocol is refined over time to keep you feeling your best.",
  },
];

export default function BHRTProcess() {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-warm-white/5 border border-warm-white/10 rounded-2xl p-7"
            >
              <span
                className="block text-4xl font-bold text-gold/40 mb-4 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number}
              </span>
              <h3
                className="text-lg font-bold text-warm-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-warm-white/65 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
