"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Are GLP-1 medications safe?",
    a: "GLP-1 receptor agonists have been studied extensively and are FDA-approved for weight management. Common side effects include mild nausea, especially early on, which typically resolves as your body adjusts. We screen for contraindications at your consultation and monitor your health throughout treatment.",
  },
  {
    q: "How much weight can I expect to lose?",
    a: "Clinical trials show an average of 15–22% body weight loss over 68 weeks with GLP-1/GIP combination therapy, compared to 5–7% with lifestyle changes alone. Individual results vary based on adherence, dosing, hormonal factors, and baseline metabolic health. We'll give you a realistic expectation at your consultation.",
  },
  {
    q: "Will I regain the weight if I stop the medication?",
    a: "Weight regain is common after stopping GLP-1 therapy — research shows most people regain approximately two-thirds of lost weight within a year. This is why we emphasize metabolic optimization, hormonal support, and lifestyle changes alongside the medication, creating a more sustainable foundation for long-term weight management.",
  },
  {
    q: "Do I need to follow a specific diet?",
    a: "We provide nutritional guidance tailored to your protocol. GLP-1 medications naturally reduce appetite and food intake, but optimizing what you eat — particularly protein intake and nutrient density — will significantly improve your results and help preserve muscle mass during weight loss.",
  },
  {
    q: "Is this covered by insurance?",
    a: "We operate outside the traditional insurance model. GLP-1 medications themselves may have separate coverage depending on your insurer — we can provide documentation to help you submit for potential reimbursement. We accept HSA and FSA funds for our services.",
  },
];

export default function WeightFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>
            Weight Management FAQs
          </h2>
        </motion.div>
        <div className="bg-mist rounded-2xl px-6 sm:px-8">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-warm-white/60 last:border-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-forest group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-sans)" }}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
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
