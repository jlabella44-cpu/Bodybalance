"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormValues = {
  firstName: string;
  phone: string;
  service: string;
};

const services = [
  "Bioidentical Hormone Therapy (BHRT)",
  "Medical Weight Management",
  "Lab Testing & Analysis",
  "Sexual Health & Function",
  "Not Sure — I Need Guidance",
];

export default function BookingBanner() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setSubmitting(true);
    try {
      // TODO Phase 2: wire to Resend API route
      console.log("Form submission:", data);
      await new Promise((r) => setTimeout(r, 600)); // simulate network
      setSubmitted(true);
    } catch {
      // handle error gracefully in production
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative py-20 lg:py-28 bg-forest overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Start Feeling Better?
          </h2>
          <p
            className="text-warm-white/70 text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book a free phone consultation — no commitment required.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-warm-white/10 border border-warm-white/20 rounded-2xl p-10 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-warm-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;ll be in touch shortly!
            </h3>
            <p
              className="text-warm-white/60 text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              In the meantime, call us directly at{" "}
              <a href="tel:+17854247233" className="text-gold hover:underline">
                (785) 424-7233
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {/* First name */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                  className={`w-full px-5 py-4 rounded-full bg-warm-white/10 border text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-colors text-sm ${
                    errors.firstName ? "border-red-400" : "border-warm-white/20"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              {/* Phone */}
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                  className={`w-full px-5 py-4 rounded-full bg-warm-white/10 border text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-colors text-sm ${
                    errors.phone ? "border-red-400" : "border-warm-white/20"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              {/* Service */}
              <div className="flex-1">
                <select
                  {...register("service", { required: true })}
                  className={`w-full px-5 py-4 rounded-full bg-warm-white/10 border text-warm-white focus:outline-none focus:border-gold transition-colors text-sm appearance-none ${
                    errors.service ? "border-red-400" : "border-warm-white/20"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                  defaultValue=""
                >
                  <option value="" disabled className="text-charcoal bg-warm-white">
                    Service Interest
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="text-charcoal bg-warm-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 disabled:opacity-60 transition-all shadow-lg hover:shadow-xl text-sm flex-shrink-0"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {submitting ? "Sending…" : "Get Started"}
              </button>
            </div>

            {/* Phone fallback */}
            <p
              className="text-center text-warm-white/50 text-sm mt-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Prefer to call?{" "}
              <a
                href="tel:+17854247233"
                className="text-warm-white/80 hover:text-gold transition-colors font-medium"
              >
                (785) 424-7233
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
