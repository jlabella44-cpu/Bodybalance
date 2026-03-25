"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Is it normal to experience low libido?", a: "Extremely common — and underreported. Studies suggest that 30–40% of women and 15–25% of men experience low libido at some point. Hormonal decline (especially testosterone in both sexes, and estrogen in women) is one of the most common and treatable causes. You don't have to just accept it as a fact of aging." },
  { q: "Will hormone therapy actually improve my sex drive?", a: "For most patients with a hormonal root cause, yes — significantly. Testosterone optimization is particularly effective for libido in both men and women. Estrogen therapy helps with vaginal dryness and comfort for women. Results are typically noticeable within 6–10 weeks of optimizing levels." },
  { q: "What is PDE-5 inhibitor therapy for men?", a: "PDE-5 inhibitors (like sildenafil/Viagra or tadalafil/Cialis) improve blood flow to the penis, helping achieve and maintain erections. We evaluate whether these are appropriate at your consultation — they work best when combined with hormonal optimization rather than used alone." },
  { q: "Is my consultation truly private?", a: "Absolutely. Your visit, records, and any treatment are completely confidential. We do not share information with insurance companies, employers, or anyone else without your explicit written consent. Our team is trained to handle sensitive health topics with discretion and respect." },
  { q: "What if my issue has a psychological component?", a: "Sexual health concerns often have both physiological and psychological dimensions. We address the hormonal and physical side — and if we believe additional support would benefit you, we can refer you to a trusted therapist or counselor. We take a whole-person view of sexual wellbeing." },
];

export default function SexualFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>Sexual Health FAQs</h2>
        </motion.div>
        <div className="bg-warm-white rounded-2xl px-6 sm:px-8">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-mist last:border-0">
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
