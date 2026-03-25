"use client";

import { motion } from "framer-motion";

const panels = [
  {
    category: "Sex Hormones",
    markers: ["Total & Free Testosterone", "Estradiol (E2)", "Estrone (E1)", "Estriol (E3)", "Progesterone", "DHEA-S", "Sex Hormone Binding Globulin (SHBG)"],
  },
  {
    category: "Thyroid",
    markers: ["TSH", "Free T3", "Free T4", "Reverse T3", "Thyroid Antibodies (TPO, TgAb)"],
  },
  {
    category: "Metabolic & Blood Sugar",
    markers: ["Fasting Glucose", "Fasting Insulin", "HbA1c", "Comprehensive Metabolic Panel", "Lipid Panel", "hsCRP (inflammation)"],
  },
  {
    category: "Adrenal & Stress",
    markers: ["Cortisol (AM & PM)", "DHEA-S", "Aldosterone"],
  },
  {
    category: "Reproductive & Pituitary",
    markers: ["LH (Luteinizing Hormone)", "FSH (Follicle-Stimulating Hormone)", "Prolactin", "IGF-1 (Growth Hormone Marker)"],
  },
  {
    category: "Nutritional",
    markers: ["Vitamin D (25-OH)", "Vitamin B12", "Ferritin", "Complete Blood Count (CBC)"],
  },
];

export default function WhatWeTest() {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>The Full Picture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white" style={{ fontFamily: "var(--font-display)" }}>
            What We Test
          </h2>
          <p className="mt-4 text-warm-white/60 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Our panels go far beyond a basic hormone check — we look at the full hormonal ecosystem.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-warm-white/5 border border-warm-white/10 rounded-2xl p-6"
            >
              <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                {panel.category}
              </h3>
              <ul className="space-y-2">
                {panel.markers.map((m) => (
                  <li key={m} className="text-xs text-warm-white/65 flex items-center gap-2" style={{ fontFamily: "var(--font-sans)" }}>
                    <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-warm-white/40 text-xs mt-8" style={{ fontFamily: "var(--font-sans)" }}>
          Not every patient needs every marker. We order the panels most relevant to your symptoms and goals.
        </p>
      </div>
    </section>
  );
}
