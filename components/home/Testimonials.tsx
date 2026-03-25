"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I finally feel like myself again after years of exhaustion and brain fog. The team at Body Balance actually listened — and the results have been life-changing.",
    name: "Sarah M.",
    detail: "BHRT Patient",
  },
  {
    quote:
      "I was skeptical at first, but after seeing my lab results and understanding what was actually wrong, everything clicked. My energy and mood are completely different now.",
    name: "Mike T.",
    detail: "Testosterone Replacement Therapy",
  },
  {
    quote:
      "The personalized approach is what sets Body Balance apart. They didn't just hand me a generic plan — they built something specifically for my body.",
    name: "Jennifer R.",
    detail: "Weight Management + BHRT",
  },
  {
    quote:
      "100 lbs of fat lost. 15 lbs of muscle gained. 7% body fat. I never thought this was possible in my 50s. The team held me accountable every step of the way.",
    name: "Jim K.",
    detail: "Medical Weight Management",
    featured: true,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Patient Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real People. Real Results.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Quote mark */}
                <span
                  className="block text-6xl text-gold/40 leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className="text-xl sm:text-2xl text-warm-white/90 leading-relaxed font-medium mb-8 italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {testimonials[active].quote}
                </p>
                <footer>
                  <p
                    className="text-warm-white font-semibold"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {testimonials[active].name}
                  </p>
                  <p
                    className="text-warm-white/50 text-sm"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {testimonials[active].detail}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-gold"
                    : "w-2 h-2 bg-warm-white/30 hover:bg-warm-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Jim's featured transformation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 bg-warm-white/5 border border-warm-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Before/after placeholder */}
            <div className="grid grid-cols-2 gap-4">
              {["Before", "After"].map((label) => (
                <div key={label} className="relative">
                  <div className="aspect-[3/4] rounded-2xl bg-forest/50 border border-warm-white/10 flex items-end justify-center pb-3">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-warm-white/40"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Story copy */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Featured Transformation
              </p>
              <blockquote
                className="text-2xl lg:text-3xl font-bold text-warm-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;100 lbs of fat lost. 15 lbs of muscle gained. 7% body fat.&rdquo;
              </blockquote>
              <p
                className="text-warm-white/70 leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Jim came to Body Balance frustrated after years of yo-yo dieting
                and declining energy. Through advanced lab testing, we identified
                critical hormonal imbalances and built a comprehensive protocol
                combining BHRT and medical weight management.
              </p>
              <p
                className="text-warm-white/70 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                The results speak for themselves — but more importantly, Jim
                says he finally feels like the person he knows he is.
              </p>
              <p
                className="text-warm-white font-semibold"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                — Jim K., Lawrence, KS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
