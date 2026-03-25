"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Lab-First, Always",
    description:
      "We never prescribe hormones without a comprehensive baseline panel. Your dosing is based on your actual numbers — not a symptom checklist or a gut feeling.",
  },
  {
    title: "No One-Size-Fits-All",
    description:
      "Every patient gets a unique protocol. We adjust your hormones, delivery method, and dosing based on how your body specifically responds.",
  },
  {
    title: "Ongoing Partnership",
    description:
      "We don't just hand you a prescription and send you home. We check in, re-test, and refine your treatment for as long as you're with us.",
  },
  {
    title: "No Insurance Restrictions",
    description:
      "We operate outside the insurance system so we can spend real time with you and prescribe what's actually best — not what's cheapest to approve.",
  },
  {
    title: "HSA/FSA Friendly",
    description:
      "Your hormone therapy investment can be paid with pre-tax HSA and FSA dollars, making personalized care more accessible.",
  },
  {
    title: "Local Experts in Lawrence, KS",
    description:
      "We're your neighbors. We understand the community, and we're invested in your long-term health — not just a one-time visit.",
  },
];

export default function WhyBodyBalance() {
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
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our Difference
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Body Balance?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-warm-white rounded-2xl p-7 border border-mist shadow-sm"
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h3
                className="text-base font-bold text-forest mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {d.title}
              </h3>
              <p
                className="text-sm text-charcoal/65 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
