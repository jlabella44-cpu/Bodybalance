"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    heading: "Getting Started",
    items: [
      { q: "Do I need a referral?", a: "No referral is needed. You can schedule a free consultation directly through our website or by calling (785) 424-7233." },
      { q: "What happens at my first visit?", a: "Your initial consultation is a 30–45 minute conversation about your symptoms, health history, goals, and any prior testing. We don't rush. After the consultation, we'll order labs and schedule a follow-up to review results and present your plan." },
      { q: "How do I know if Body Balance is right for me?", a: "If you're struggling with symptoms that conventional medicine hasn't fully addressed — fatigue, weight gain, mood changes, low libido, brain fog, poor sleep — you're exactly who we built this practice for. Take our free symptom assessment to get a sense of where you stand." },
      { q: "Can I bring a spouse or partner to my appointment?", a: "Absolutely. Many patients find it helpful to have support. We welcome partners and family members, and we also frequently treat couples together." },
    ],
  },
  {
    heading: "Treatment & Medications",
    items: [
      { q: "How are hormones delivered?", a: "We offer several delivery methods depending on your protocol and preference: subcutaneous pellets (inserted once every 3–5 months), topical creams and gels, injections, and oral capsules. We'll recommend the best option for your lifestyle." },
      { q: "Are bioidentical hormones FDA-approved?", a: "Some bioidentical hormones are FDA-approved (like certain estradiol and progesterone products). Custom-compounded bioidentical hormones are prepared by licensed compounding pharmacies and are regulated but not individually FDA-approved. We use both options and will explain the distinctions at your consultation." },
      { q: "Can I stay on my other medications?", a: "In most cases, yes. We review all medications at your initial consultation to screen for interactions. We also coordinate with your primary care provider as appropriate." },
      { q: "What GLP-1 medications do you prescribe?", a: "We work with semaglutide (the active ingredient in Ozempic and Wegovy) and tirzepatide (Mounjaro/Zepbound), prescribed through licensed compounding pharmacies or brand-name when appropriate. Availability and pricing vary — we'll discuss options at your consultation." },
    ],
  },
  {
    heading: "Cost & Insurance",
    items: [
      { q: "Do you accept insurance?", a: "We operate outside the traditional insurance model. This allows us to spend more time with each patient, order the labs we actually need, and prescribe based on clinical best practices — not what your insurer will approve. We accept HSA and FSA funds, and all major credit cards." },
      { q: "How much does treatment cost?", a: "Costs vary significantly depending on your treatment protocol. Lab testing, consultations, and medications are priced separately. We provide full, transparent pricing at your initial consultation — no surprise bills. Most patients find the cost comparable to or less than specialist copays over time." },
      { q: "Are labs included in the consultation fee?", a: "Lab costs are separate from consultation fees. We work with major reference labs (LabCorp/Quest) and can provide documentation for potential insurance reimbursement of lab work." },
    ],
  },
  {
    heading: "Lab Testing",
    items: [
      { q: "Where do I get my blood drawn?", a: "We send orders to local LabCorp or Quest draw locations near you. Most patients get their draw within 1–2 days of ordering, and results are back in 5–7 business days." },
      { q: "How often will I need to retest?", a: "We retest at 3 months after starting treatment, then every 6 months once levels are stable. More frequent testing may be needed during dose adjustments." },
      { q: "What if my labs look 'normal' but I still feel terrible?", a: "This is one of the most common situations we see. Reference range 'normal' represents a broad population average — not what's optimal for you. We interpret your results in the context of your symptoms, age, and individual biology. Feeling normal and being in the normal range aren't the same thing." },
    ],
  },
  {
    heading: "Lifestyle & Results",
    items: [
      { q: "Do I need to change my diet or exercise routine?", a: "We provide guidance and recommendations, but we won't shame you about your current habits. Lifestyle changes amplify your results significantly — particularly around protein intake, resistance training, and sleep — and we'll give you practical, achievable guidance tailored to where you are right now." },
      { q: "How long until I see results?", a: "Most patients notice changes in energy and sleep within 4–6 weeks. Mood, libido, and body composition typically improve by 8–12 weeks. Maximum benefit is usually seen at 6 months. We monitor progress throughout and adjust your protocol to keep results coming." },
      { q: "Is hormone therapy a lifelong commitment?", a: "Not necessarily. Some patients use BHRT for a defined period to address a specific hormonal transition (like perimenopause). Others choose to continue long-term because they feel so much better. We'll discuss what makes sense for your situation and adjust the plan as your life and goals evolve." },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mist last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left gap-4 group" aria-expanded={open}>
        <span className="text-sm font-semibold text-forest group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-sans)" }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-gold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
            <p className="pb-4 text-sm text-charcoal/65 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4" style={{ fontFamily: "var(--font-sans)" }}>All the Answers</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-warm-white mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h1>
          <p className="text-warm-white/65" style={{ fontFamily: "var(--font-sans)" }}>Everything you want to know before booking. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-gold hover:underline">Contact us directly.</Link>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-lg font-bold text-gold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-sans)" }}>{sec.heading}</h2>
                <div className="bg-mist rounded-2xl px-6 sm:px-8">
                  {sec.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-charcoal/50 mb-6" style={{ fontFamily: "var(--font-sans)" }}>Still have questions? We&apos;re happy to chat.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow text-base" style={{ fontFamily: "var(--font-sans)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
