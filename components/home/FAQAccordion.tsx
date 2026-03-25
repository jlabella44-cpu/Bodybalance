"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is BHRT and how is it different from traditional HRT?",
    answer:
      "Bioidentical Hormone Replacement Therapy uses hormones derived from plant sources that are structurally identical to the hormones your body produces naturally. Unlike synthetic hormones used in traditional HRT, bioidentical hormones are thought to be more compatible with your body's receptors. We customize dosing based on comprehensive lab testing rather than a one-size-fits-all approach.",
  },
  {
    question: "Do I need insurance to be treated at Body Balance?",
    answer:
      "No. Body Balance operates outside the traditional insurance model, which allows us to spend more time with each patient and customize treatment without restrictions. We accept HSA and FSA funds, as well as all major credit cards. Our team will provide transparent pricing during your consultation.",
  },
  {
    question: "How long does it take to see results from hormone therapy?",
    answer:
      "Most patients notice improvements in energy, mood, and sleep within the first 4–6 weeks. More significant changes — including body composition, libido, and mental clarity — typically become apparent at the 3-month mark. We monitor your progress closely with follow-up labs and adjust your protocol as needed.",
  },
  {
    question: "What does the initial consultation involve?",
    answer:
      "Your first visit includes a thorough review of your health history, current symptoms, and goals. We'll order a comprehensive hormone and metabolic panel through our lab partners. Once results are in (usually 5–7 business days), we schedule a follow-up to review your results and present your personalized treatment plan.",
  },
  {
    question: "Is hormone therapy safe for men?",
    answer:
      "Yes. Testosterone Replacement Therapy (TRT) and other hormone optimization protocols are safe and effective for men when properly administered and monitored. We test and monitor key markers including PSA, hematocrit, and estradiol to ensure your therapy is both safe and optimized for your goals.",
  },
];

function AccordionItem({
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
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gold"
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-charcoal/70 text-sm leading-relaxed"
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

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
            Got Questions?
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-warm-white rounded-2xl shadow-sm border border-mist px-6 sm:px-8 mb-10"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* See all link */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-forest font-semibold hover:text-gold transition-colors group"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            See all FAQs
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
