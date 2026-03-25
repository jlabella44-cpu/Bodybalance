"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = {
  women: {
    label: "For Women",
    symptoms: [
      "Hot flashes and night sweats",
      "Mood swings and irritability",
      "Fatigue and low energy",
      "Weight gain (especially around the midsection)",
      "Vaginal dryness and discomfort",
      "Low libido and reduced sexual satisfaction",
      "Brain fog and difficulty concentrating",
      "Poor sleep quality",
      "Hair thinning and skin changes",
    ],
    benefits: [
      "Relief from hot flashes and night sweats",
      "Improved mood stability and emotional resilience",
      "Restored energy and mental clarity",
      "Better sleep quality",
      "Increased libido and sexual comfort",
      "Maintained bone density and cardiovascular support",
      "Healthier skin, hair, and body composition",
    ],
    expect:
      "We begin with a full hormone panel measuring estrogen, progesterone, testosterone, DHEA, cortisol, and thyroid markers. Based on your results and symptoms, we'll create a personalized protocol — often starting with a lower dose and adjusting over 4–12 weeks. Most women notice meaningful improvements within the first 6–8 weeks.",
  },
  men: {
    label: "For Men",
    symptoms: [
      "Chronic fatigue and lack of drive",
      "Low libido and sexual dysfunction",
      "Loss of muscle mass and strength",
      "Increased body fat (especially belly fat)",
      "Brain fog and poor concentration",
      "Mood changes — irritability, depression, or anxiety",
      "Poor sleep and recovery",
      "Reduced motivation and competitive drive",
      "Erectile dysfunction",
    ],
    benefits: [
      "Increased energy, strength, and endurance",
      "Restored sex drive and sexual performance",
      "Improved lean muscle mass and reduced body fat",
      "Sharper mental focus and motivation",
      "Elevated mood and confidence",
      "Better sleep and recovery",
      "Reduced risk of metabolic disease",
    ],
    expect:
      "Men's BHRT — commonly called Testosterone Replacement Therapy (TRT) — starts with baseline labs including total and free testosterone, PSA, hematocrit, estradiol, and LH/FSH. We monitor these markers throughout treatment to keep your levels optimized and safe. Most men report noticeable improvements in energy and libido within 3–6 weeks.",
  },
};

export default function GenderTabs() {
  const [active, setActive] = useState<"women" | "men">("women");
  const tab = tabs[active];

  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-warm-white p-1 shadow-sm border border-mist">
            {(["women", "men"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === key
                    ? "bg-forest text-warm-white shadow"
                    : "text-charcoal/60 hover:text-forest"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Symptoms */}
              <div className="bg-warm-white rounded-2xl p-7 border border-mist shadow-sm">
                <h3
                  className="text-lg font-bold text-forest mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Common Symptoms
                </h3>
                <ul className="space-y-2.5">
                  {tab.symptoms.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-charcoal/70"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-warm-white rounded-2xl p-7 border border-mist shadow-sm">
                <h3
                  className="text-lg font-bold text-forest mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Treatment Benefits
                </h3>
                <ul className="space-y-2.5">
                  {tab.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-charcoal/70"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <svg
                        className="mt-0.5 flex-shrink-0 w-4 h-4 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to expect */}
              <div className="bg-forest rounded-2xl p-7 text-warm-white">
                <h3
                  className="text-lg font-bold text-warm-white mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What to Expect
                </h3>
                <p
                  className="text-sm text-warm-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {tab.expect}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
