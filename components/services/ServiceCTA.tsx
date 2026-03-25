"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCTAProps {
  heading: string;
  subheading: string;
}

export default function ServiceCTA({ heading, subheading }: ServiceCTAProps) {
  return (
    <section className="relative py-20 bg-forest overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {heading}
        </h2>
        <p
          className="text-warm-white/70 text-lg mb-10"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book Free Consultation
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-warm-white/40 text-warm-white hover:border-warm-white/80 hover:bg-warm-white/10 transition-all text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Take the Assessment
          </Link>
        </div>
        <p
          className="mt-6 text-warm-white/40 text-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Or call us at{" "}
          <a href="tel:+17854247233" className="text-warm-white/70 hover:text-gold transition-colors">
            (785) 424-7233
          </a>
        </p>
      </motion.div>
    </section>
  );
}
