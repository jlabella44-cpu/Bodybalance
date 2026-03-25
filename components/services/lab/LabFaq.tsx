"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do I get my labs done?", a: "After your consultation, we send a lab order to a convenient draw location (typically LabCorp or Quest). Most patients can get their blood drawn within a day or two, and results are typically back within 5–7 business days." },
  { q: "Do I need to fast before my blood draw?", a: "Yes — for metabolic markers like glucose, insulin, and lipids, we require a 10–12 hour fast before your draw. Water is fine. We'll give you specific instructions when we send your lab order." },
  { q: "How will I understand my results?", a: "We schedule a results review appointment where we walk through every marker together — explaining what each means, what's optimal for someone your age and sex, and how it informs your treatment plan. You'll never receive results without an explanation." },
  { q: "Will my primary care doctor have access to my results?", a: "Your results are yours. We can share them with your primary care provider if you'd like, but we never share without your explicit consent." },
  { q: "How often do I need to retest?", a: "We typically retest at 3 months after starting treatment to measure how your levels have responded. After that, we retest every 6 months to ensure you stay in your optimal range. Frequency may increase if we're adjusting your protocol." },
];

export default function LabFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>Lab Testing FAQs</h2>
        </motion.div>
        <div className="bg-mist rounded-2xl px-6 sm:px-8">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-warm-white/60 last:border-0">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4 group" aria-expanded={open === i}>
                <span className="text-base font-semibold text-forest group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-sans)" }}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="pb-5 text-sm text-charcoal/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
