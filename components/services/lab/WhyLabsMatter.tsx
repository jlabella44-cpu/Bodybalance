"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Guessing Is Expensive",
    body: "Prescribing hormones without baseline labs is like driving without GPS. You might get somewhere, but probably not where you wanted. Labs tell us exactly what's deficient, what's elevated, and what's off-ratio.",
  },
  {
    title: "Symptoms Overlap",
    body: "Fatigue, weight gain, and brain fog could signal a thyroid issue, a testosterone deficiency, an insulin problem, or adrenal dysregulation. Only labs can tell the difference — and the treatment for each is very different.",
  },
  {
    title: "Your Baseline Is Yours",
    body: "\"Normal\" lab ranges are population averages. Your optimal is specific to your age, sex, and biology. We interpret your results in context — not just against a reference range — to find what's optimal for you.",
  },
  {
    title: "Progress You Can Measure",
    body: "Follow-up labs show us whether your treatment is working and allow precise adjustments. You don't have to guess if you're improving — you can see it in the data.",
  },
];

export default function WhyLabsMatter() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>Why It Matters</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>
            Why Labs First?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-mist rounded-2xl p-7"
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h3 className="text-lg font-bold text-forest mb-3" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
