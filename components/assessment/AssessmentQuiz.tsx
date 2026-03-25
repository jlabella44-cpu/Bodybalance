"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { questions, scoreQuiz, type ResultProfile } from "./quizData";

// Track selected option index (not value) so UI can highlight correctly
// even when multiple options share the same numeric value.
type Selections = Record<number, number>; // questionId → optionIndex

type Phase = "intro" | "quiz" | "results" | "confirmed";

type EmailForm = { name: string; email: string };

export default function AssessmentQuiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [result, setResult] = useState<ResultProfile | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<EmailForm>();

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;
  const selectedIdx = selections[current?.id] ?? -1;

  function select(optionIdx: number) {
    setSelections((prev) => ({ ...prev, [current.id]: optionIdx }));
  }

  function next() {
    if (selectedIdx === -1) return;
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      // Build value map for scoring
      const valueMap: Record<number, number> = {};
      for (const q of questions) {
        const idx = selections[q.id] ?? 0;
        valueMap[q.id] = q.options[idx]?.value ?? 0;
      }
      setResult(scoreQuiz(valueMap));
      setPhase("results");
    }
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function onEmailSubmit(data: EmailForm) {
    setSubmitting(true);
    try {
      // TODO: wire to Resend API route
      console.log("Lead capture:", { ...data, result: result?.heading });
      await new Promise((r) => setTimeout(r, 700));
      setPhase("confirmed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">

          {/* ── INTRO ── */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Free Symptom Assessment
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold text-forest mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Do Your Hormones Need Attention?
              </h1>
              <p
                className="text-charcoal/65 text-lg leading-relaxed mb-10 max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Answer 12 quick questions about your symptoms and get a
                personalized summary — plus recommended next steps — in under
                3 minutes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-10 text-sm text-charcoal/50"
                style={{ fontFamily: "var(--font-sans)" }}>
                {[
                  { icon: "⏱", label: "3 minutes" },
                  { icon: "🔒", label: "100% private" },
                  { icon: "✓", label: "No commitment" },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setPhase("quiz")}
                className="px-10 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Start the Assessment →
              </button>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {phase === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-2.5">
                  <span
                    className="text-xs text-charcoal/40"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Question {step + 1} of {questions.length}
                  </span>
                  <span
                    className="text-xs font-semibold text-gold"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {Math.round(progress)}% complete
                  </span>
                </div>
                <div className="h-1.5 bg-mist rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gold rounded-full"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Question card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-forest mb-8 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {current.text}
                  </h2>

                  <div className="flex flex-col gap-3 mb-10">
                    {current.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => select(idx)}
                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all font-medium text-sm ${
                          selectedIdx === idx
                            ? "border-forest bg-forest text-warm-white shadow-md"
                            : "border-mist bg-warm-white text-charcoal hover:border-sage/60 hover:bg-mist"
                        }`}
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                              selectedIdx === idx
                                ? "border-warm-white bg-warm-white"
                                : "border-charcoal/20"
                            }`}
                          >
                            {selectedIdx === idx && (
                              <span className="w-2.5 h-2.5 rounded-full bg-forest" />
                            )}
                          </span>
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Nav buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prev}
                      disabled={step === 0}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold text-charcoal/50 hover:text-forest disabled:opacity-30 transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={next}
                      disabled={selectedIdx === -1}
                      className="px-8 py-3 rounded-full text-sm font-semibold bg-forest text-warm-white hover:bg-forest/90 disabled:opacity-40 transition-all shadow hover:shadow-md"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {step === questions.length - 1 ? "See My Results →" : "Next →"}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── RESULTS ── */}
          {phase === "results" && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="py-4"
            >
              {/* Score card */}
              <div className="bg-forest rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }}
                />
                <div className="relative">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Your Results
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-warm-white mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {result.heading}
                  </h2>
                  <p
                    className="text-warm-white/75 leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {result.summary}
                  </p>

                  <div className="mb-2">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider text-gold/70 mb-3"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Recommended Services
                    </p>
                    <ul className="flex flex-col gap-2">
                      {result.services.map((svc) => (
                        <li
                          key={svc}
                          className="flex items-center gap-2.5 text-sm text-warm-white/80"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {svc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Email capture */}
              <div className="bg-mist rounded-2xl p-7 sm:p-9 border border-mist">
                <h3
                  className="text-xl font-bold text-forest mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Get Your Full Results Report
                </h3>
                <p
                  className="text-sm text-charcoal/60 mb-6"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Enter your name and email and we&apos;ll send your personalized
                  hormone report — plus what to expect at your first visit.
                </p>

                <form onSubmit={handleSubmit(onEmailSubmit)} noValidate>
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="text"
                      placeholder="Your First Name"
                      {...register("name", { required: true })}
                      className={`flex-1 px-5 py-3.5 rounded-xl bg-warm-white border text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest transition-colors text-sm ${
                        errors.name ? "border-red-400" : "border-mist"
                      }`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                      className={`flex-1 px-5 py-3.5 rounded-xl bg-warm-white border text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest transition-colors text-sm ${
                        errors.email ? "border-red-400" : "border-mist"
                      }`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl font-semibold bg-gold text-forest hover:bg-gold/90 disabled:opacity-60 transition-all shadow text-sm"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {submitting ? "Sending…" : `Send My Report — ${result.cta}`}
                  </button>
                </form>

                <p
                  className="text-center text-xs text-charcoal/40 mt-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  We&apos;ll never spam you. Your privacy is important to us.
                </p>
              </div>

              {/* Skip to book */}
              <div className="text-center mt-6">
                <Link
                  href="/contact"
                  className="text-sm text-forest font-semibold hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Skip and book a free consultation directly →
                </Link>
              </div>
            </motion.div>
          )}

          {/* ── CONFIRMED ── */}
          {phase === "confirmed" && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="text-3xl font-bold text-forest mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You&apos;re All Set!
              </h2>
              <p
                className="text-charcoal/65 text-lg leading-relaxed mb-10 max-w-md mx-auto"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                We&apos;ll be in touch shortly with your results report. In the
                meantime, book a free phone consultation — no commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg text-base"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/services/bhrt"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-warm-white transition-all text-base"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Learn About BHRT
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
