"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take for BHRT to work?",
    answer:
      "Most patients notice initial improvements in sleep, mood, and energy within 4–6 weeks. More significant changes in body composition, libido, and cognitive function typically appear at the 8–12 week mark. Results vary based on your baseline levels, protocol, and individual physiology — which is why we monitor and adjust regularly.",
  },
  {
    question: "Is BHRT safe for long-term use?",
    answer:
      "When properly dosed and monitored, BHRT has a strong safety profile. We track key health markers — including cardiovascular, bone density, and cancer-related indicators — throughout your treatment. The risks associated with unmonitored or improperly dosed hormone therapy are significantly higher, which is why our lab-first approach matters.",
  },
  {
    question: "What's the difference between bioidentical and synthetic hormones?",
    answer:
      "Synthetic hormones (like those in many conventional HRT products) are chemically similar but not identical to human hormones. Bioidentical hormones are structurally identical to what your body produces. This means they interact with your receptors in the same way, which may lead to more predictable effects and a more natural hormonal profile.",
  },
  {
    question: "Do I need a referral to start BHRT at Body Balance?",
    answer:
      "No referral is needed. You can schedule a free consultation directly through our website or by calling (785) 424-7233. We'll handle your evaluation, labs, and treatment in-house.",
  },
  {
    question: "How much does BHRT cost? Does insurance cover it?",
    answer:
      "We operate outside of insurance, which allows us to spend more time with each patient and prescribe without restrictions. Costs vary based on your protocol, but we'll give you full pricing transparency at your consultation. We accept HSA and FSA funds, and many patients find the cost comparable to or less than typical out-of-pocket insurance copays for specialist care.",
  },
];

function Item({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-mist last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold text-forest group-hover:text-gold transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gold"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm text-charcoal/70 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BHRTFaq() {
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
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            BHRT Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-forest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="bg-mist rounded-2xl px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <Item
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
