import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hormone Therapy & Wellness Services in Lawrence, KS | Body Balance",
  description:
    "Explore Body Balance's full range of services: BHRT, medical weight management, lab testing, and sexual health treatment in Lawrence, KS.",
};

const services = [
  {
    href: "/services/bhrt",
    label: "BHRT",
    name: "Bioidentical Hormone Replacement Therapy",
    description:
      "Restore energy, mood, libido, and vitality with plant-derived hormones matched precisely to your body. For men and women.",
    tag: "Most Popular",
  },
  {
    href: "/services/weight-management",
    label: "Weight",
    name: "Medical Weight Management",
    description:
      "Physician-supervised GLP-1/GIP protocols and metabolic optimization — beyond diet and exercise.",
    tag: null,
  },
  {
    href: "/services/lab-testing",
    label: "Labs",
    name: "Lab Testing & Analysis",
    description:
      "Comprehensive hormone panels that reveal the root cause. No guessing — just data.",
    tag: null,
  },
  {
    href: "/services/sexual-health",
    label: "Sexual Health",
    name: "Sexual Health & Function",
    description:
      "Discreet, clinical treatment for low libido, sexual dysfunction, and intimacy concerns.",
    tag: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            What We Offer
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We Treat the Root Cause,<br />Not Just the Symptoms.
          </h1>
          <p
            className="text-lg text-warm-white/75 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Every service at Body Balance starts with advanced diagnostics and ends
            with a plan built specifically for your body.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group relative bg-mist rounded-3xl overflow-hidden border border-mist hover:border-sage/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-stretch">
                  {/* Number / label accent */}
                  <div className="sm:w-48 bg-forest/5 flex items-center justify-center p-8 sm:p-10">
                    <span
                      className="text-5xl font-bold text-forest/20 group-hover:text-gold/40 transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-8 sm:p-10">
                    {svc.tag && (
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold mb-4"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {svc.tag}
                      </span>
                    )}
                    <h2
                      className="text-2xl font-bold text-forest mb-3 group-hover:text-gold transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {svc.name}
                    </h2>
                    <p
                      className="text-charcoal/65 text-base leading-relaxed mb-5 max-w-xl"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {svc.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-gold transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-forest mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not Sure Where to Start?
          </h2>
          <p
            className="text-charcoal/65 mb-8"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Take our 3-minute symptom assessment and we&apos;ll point you toward the right service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-forest text-warm-white hover:bg-forest/90 transition-all shadow text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Take the Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-warm-white transition-all text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
