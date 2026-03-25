"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax: move background at half scroll speed
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundColor: "var(--color-forest)",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-forest/60" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.04,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Lawrence, KS &nbsp;•&nbsp; Personalized Hormone Therapy
          </motion.p>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-warm-white leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Feel Like<br />Yourself Again
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-warm-white/80 leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Personalized BHRT, medical weight loss, and wellness treatment —
            built around your body, not a template.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book Free Consultation
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-warm-white/60 text-warm-white hover:border-warm-white hover:bg-warm-white/10 transition-all text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Take the Assessment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-warm-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Organic SVG curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0 80 C360 20 1080 20 1440 80 L1440 80 L0 80 Z"
            fill="#F5F0EB"
          />
        </svg>
      </div>
    </section>
  );
}
