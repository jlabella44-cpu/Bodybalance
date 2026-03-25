"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-clinic.jpg"
                alt="Body Balance clinic — warm, welcoming wellness space in Lawrence, KS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Fallback gradient when image not yet placed */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/30 to-sage/30" />
            </div>
            {/* Decorative accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-gold/10 -z-10" />
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              About Body Balance
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Individualized Care.<br />Measurable Results.
            </h2>
            <div
              className="space-y-4 text-charcoal/80 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <p>
                At Body Balance, we believe that optimal health isn't
                one-size-fits-all. Every person's body is unique, and so is
                every treatment plan we create.
              </p>
              <p>
                Our Lawrence, KS team uses advanced lab diagnostics to uncover
                the root causes behind fatigue, weight gain, mood changes, and
                low libido — then builds a personalized protocol around your
                specific biology, goals, and lifestyle.
              </p>
              <p>
                We don't just treat symptoms. We partner with you on a path to
                lasting vitality.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:text-gold transition-colors group"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Our Story
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
