"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Free Consultation", body: "We review your weight history, metabolic health, any prior attempts, and current medications. We discuss realistic goals and whether GLP-1 therapy is appropriate for you." },
  { n: "02", title: "Metabolic Lab Panel", body: "We test fasting glucose, insulin, HbA1c, thyroid, hormones, and a lipid panel. Understanding your metabolic baseline allows us to target the right combination of interventions." },
  { n: "03", title: "Personalized Protocol", body: "We prescribe the appropriate GLP-1/GIP medication at the right starting dose, and layer in hormonal support if your labs indicate imbalances that are making weight loss harder." },
  { n: "04", title: "Ongoing Support & Titration", body: "We check in monthly, adjust dosing as you progress, monitor side effects, and retest labs at 3 and 6 months to ensure you&apos;re responding optimally and safely." },
];

export default function WeightProcess() {
  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>
            What to Expect
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>
            Your Weight Loss Journey
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-warm-white rounded-2xl p-7 border border-mist shadow-sm"
            >
              <span className="block text-4xl font-bold text-forest/15 mb-4 leading-none" style={{ fontFamily: "var(--font-display)" }}>{s.n}</span>
              <h3 className="text-lg font-bold text-forest mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
