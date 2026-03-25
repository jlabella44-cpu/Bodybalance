"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    href: "/services/bhrt",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    name: "Bioidentical Hormone Replacement Therapy",
    short: "BHRT",
    description:
      "Restore hormonal balance with plant-derived hormones matched precisely to your body's needs. For men and women experiencing fatigue, mood changes, and more.",
  },
  {
    href: "/services/weight-management",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    name: "Medical Weight Management",
    short: "Weight",
    description:
      "Physician-supervised GLP-1/GIP protocols and metabolic optimization that go beyond diet and exercise to address the biological drivers of weight gain.",
  },
  {
    href: "/services/lab-testing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.338 2.798H6.136c-1.368 0-2.338-1.798-1.338-2.798L5 14.5" />
      </svg>
    ),
    name: "Lab Testing & Analysis",
    short: "Labs",
    description:
      "Comprehensive hormone panels that reveal what's actually happening inside your body — so your treatment plan is based on data, not guesswork.",
  },
  {
    href: "/services/sexual-health",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    name: "Sexual Health & Function",
    short: "Sexual Health",
    description:
      "Discreet, clinically-grounded treatment for low libido, sexual dysfunction, and intimacy concerns — for both men and women.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            What We Treat
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h2>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <Link
                href={svc.href}
                className="group block bg-warm-white rounded-2xl p-8 shadow-sm border border-mist hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.8), 0 2px 8px rgba(26,60,52,0.06)",
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-forest/5 text-gold mb-6 group-hover:bg-gold/10 transition-colors">
                  {svc.icon}
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-bold text-forest mb-3 group-hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.name}
                </h3>

                {/* Description */}
                <p
                  className="text-charcoal/70 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {svc.description}
                </p>

                {/* CTA link */}
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest group-hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
