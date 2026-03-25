"use client";

import { motion } from "framer-motion";

export default function WhatIsBHRT() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Heading column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              The Basics
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-forest leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Is BHRT?
            </h2>
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5 text-charcoal/75 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p>
              Bioidentical Hormone Replacement Therapy (BHRT) uses hormones
              derived from plant sources — typically yam or soy — that are
              processed to be <strong className="text-charcoal font-semibold">molecularly
              identical</strong> to the hormones naturally produced by your body.
              This includes estrogen, progesterone, testosterone, DHEA, and
              others.
            </p>
            <p>
              Unlike synthetic hormones used in conventional HRT, bioidentical
              hormones fit your body&apos;s receptors the same way your own
              hormones would. This means your body recognizes and uses them more
              efficiently — leading to more predictable effects and, for many
              patients, fewer side effects.
            </p>
            <p>
              At Body Balance, we never guess at your dosing. Every BHRT protocol
              begins with a <strong className="text-charcoal font-semibold">comprehensive
              hormone panel</strong> to establish your baseline — then we build a
              treatment plan around your specific numbers, symptoms, and goals.
              We follow up with regular labs to ensure your levels stay optimized
              over time.
            </p>
            <p>
              BHRT can be delivered in several forms depending on your
              preference and protocol: subcutaneous pellets, creams, injections,
              or oral capsules. We&apos;ll discuss which delivery method is best
              suited to your lifestyle at your consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
