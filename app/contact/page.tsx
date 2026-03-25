"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredTime: string;
};

const services = [
  "Bioidentical Hormone Therapy (BHRT)",
  "Medical Weight Management",
  "Lab Testing & Analysis",
  "Sexual Health & Function",
  "Not Sure — Need Guidance",
];

const times = ["Morning (9am–12pm)", "Afternoon (12pm–3pm)", "Late Afternoon (3pm–5pm)", "No Preference"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: FormValues) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
          subject: `New consultation request — ${data.service}`,
          from_name: data.name,
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          preferred_time: data.preferredTime || "No preference",
          message: data.message || "(none provided)",
          // Redirect is handled client-side; disable Web3Forms redirect
          redirect: "false",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please call us at (785) 424-7233.");
      }
    } catch {
      setSubmitError("Network error. Please try again or call (785) 424-7233.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase = "w-full px-4 py-3.5 rounded-xl bg-warm-white border text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest transition-colors text-sm";
  const errorBorder = "border-red-400";
  const normalBorder = "border-mist";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4" style={{ fontFamily: "var(--font-sans)" }}>Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-warm-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Book Your Free Consultation
          </h1>
          <p className="text-warm-white/65 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            No commitment, no pressure. Just a real conversation about your health goals.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-mist rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-forest mb-3" style={{ fontFamily: "var(--font-display)" }}>Message Received!</h2>
                  <p className="text-charcoal/65 mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                    We&apos;ll be in touch within one business day.
                  </p>
                  <p className="text-charcoal/50 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                    Prefer to talk now? Call{" "}
                    <a href="tel:+17854247233" className="text-forest font-medium hover:text-gold transition-colors">(785) 424-7233</a>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder="Full Name *" {...register("name", { required: true })}
                        className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
                        style={{ fontFamily: "var(--font-sans)" }} />
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address *" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        className={`${inputBase} ${errors.email ? errorBorder : normalBorder}`}
                        style={{ fontFamily: "var(--font-sans)" }} />
                    </div>
                  </div>
                  <input type="tel" placeholder="Phone Number *" {...register("phone", { required: true })}
                    className={`${inputBase} ${errors.phone ? errorBorder : normalBorder}`}
                    style={{ fontFamily: "var(--font-sans)" }} />
                  <select {...register("service", { required: true })} defaultValue=""
                    className={`${inputBase} ${errors.service ? errorBorder : normalBorder} appearance-none`}
                    style={{ fontFamily: "var(--font-sans)" }}>
                    <option value="" disabled>Service of Interest *</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <select {...register("preferredTime")} defaultValue=""
                    className={`${inputBase} ${normalBorder} appearance-none`}
                    style={{ fontFamily: "var(--font-sans)" }}>
                    <option value="" disabled>Preferred Contact Time</option>
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <textarea placeholder="Tell us a bit about what you're experiencing (optional)"
                    rows={4} {...register("message")}
                    className={`${inputBase} ${normalBorder} resize-none`}
                    style={{ fontFamily: "var(--font-sans)" }} />
                  {submitError && (
                    <p className="text-sm text-red-600 text-center rounded-xl bg-red-50 px-4 py-3" style={{ fontFamily: "var(--font-sans)" }}>
                      {submitError}
                    </p>
                  )}
                  <button type="submit" disabled={submitting}
                    className="w-full py-4 rounded-xl font-semibold bg-gold text-forest hover:bg-gold/90 disabled:opacity-60 transition-all shadow-lg text-base"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                  <p className="text-xs text-charcoal/40 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    We respond within 1 business day. Your info is 100% private.{" "}
                    <Link href="/privacy" className="underline hover:text-charcoal/60">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact details */}
              <div className="bg-mist rounded-2xl p-7">
                <h3 className="text-lg font-bold text-forest mb-5" style={{ fontFamily: "var(--font-display)" }}>Contact Info</h3>
                <div className="space-y-4 text-sm text-charcoal/70" style={{ fontFamily: "var(--font-sans)" }}>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>1311 Wakarusa Dr Ste 2121</p>
                      <p>Lawrence, KS 66049</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+17854247233" className="hover:text-forest transition-colors">(785) 424-7233</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:admin@bodybalanceks.com" className="hover:text-forest transition-colors">admin@bodybalanceks.com</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-forest rounded-2xl p-7 text-warm-white">
                <h3 className="text-lg font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>Office Hours</h3>
                <div className="space-y-2 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                  {[
                    ["Monday – Friday", "9:00 AM – 5:00 PM"],
                    ["Saturday", "Closed"],
                    ["Sunday", "Closed"],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-warm-white/60">{day}</span>
                      <span className="text-warm-white font-medium">{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="bg-mist rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/30 mb-2" style={{ fontFamily: "var(--font-sans)" }}>Google Maps</p>
                  <a
                    href="https://maps.google.com/?q=1311+Wakarusa+Dr+Ste+2121+Lawrence+KS+66049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-forest hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
