import type { Metadata } from "next";
import Link from "next/link";
import CoverImage from "@/components/shared/CoverImage";

export const metadata: Metadata = {
  title: "Meet the Team | Body Balance Lawrence, KS",
  description:
    "Meet the Body Balance team — Justin, Robin, and Josh. Expert, compassionate hormone therapy and wellness care in Lawrence, KS.",
};

const team = [
  {
    name: "Justin",
    title: "Founder & Clinical Director",
    credentials: "NP-C",
    bio: "Justin founded Body Balance after seeing firsthand how conventional medicine often missed the hormonal root causes behind patients' most debilitating symptoms. With a background in emergency medicine and functional health, he brings a data-driven, whole-person perspective to every patient relationship. Justin believes that feeling great shouldn't be a luxury — it should be accessible to everyone willing to invest in their health.",
    photo: null as string | null,
  },
  {
    name: "Robin",
    title: "Patient Care Coordinator",
    credentials: "RN",
    bio: "Robin is often the first voice patients hear at Body Balance, and she takes that responsibility seriously. With years of nursing experience and a gift for making people feel at ease, she guides patients through every step of their journey — from initial questions to lab coordination to ongoing check-ins. Robin is deeply committed to the idea that healthcare should feel personal, not transactional.",
    photo: null as string | null,
  },
  {
    name: "Josh",
    title: "Wellness Advisor",
    credentials: "BS, NASM-CPT",
    bio: "Josh brings the lifestyle side of wellness to the Body Balance equation. With a background in strength training, nutrition coaching, and behavioral change, he helps patients build sustainable habits that amplify the results of their hormone protocols. Josh knows from personal experience that the right hormonal support combined with the right lifestyle is a powerful combination.",
    photo: null as string | null,
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4" style={{ fontFamily: "var(--font-sans)" }}>Our People</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The People Behind Your Care
          </h1>
          <p className="text-lg text-warm-white/75 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            We&apos;re a small, focused team with a big mission: to help people in Lawrence, KS feel
            genuinely well. You&apos;ll work closely with each of us throughout your journey.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-3xl overflow-hidden border border-mist shadow-sm"
              >
                {/* Photo — swaps in automatically when member.photo is set */}
                <div className="md:col-span-1 relative min-h-[240px] md:min-h-0">
                  <CoverImage
                    src={member.photo}
                    alt={`${member.name}, ${member.title} at Body Balance Lawrence KS`}
                    className="absolute inset-0"
                  />
                </div>
                {/* Content */}
                <div className="md:col-span-3 bg-mist p-8 sm:p-10">
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>{member.name}</h2>
                    <span className="text-sm font-medium text-gold" style={{ fontFamily: "var(--font-sans)" }}>{member.credentials}</span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-charcoal/40 mb-4" style={{ fontFamily: "var(--font-sans)" }}>{member.title}</p>
                  <p className="text-charcoal/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest mb-4" style={{ fontFamily: "var(--font-display)" }}>Ready to Meet Us In Person?</h2>
          <p className="text-charcoal/65 mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Book a free consultation and let&apos;s talk about your health goals.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow text-base" style={{ fontFamily: "var(--font-sans)" }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
