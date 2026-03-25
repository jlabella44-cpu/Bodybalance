import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Body Balance",
};

const suggestions = [
  { href: "/services/bhrt",              label: "Hormone Therapy (BHRT)" },
  { href: "/services/weight-management", label: "Medical Weight Management" },
  { href: "/services/lab-testing",       label: "Lab Testing & Analysis" },
  { href: "/services/sexual-health",     label: "Sexual Health & Function" },
  { href: "/blog",                       label: "Wellness Blog" },
  { href: "/faq",                        label: "FAQ" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest flex flex-col">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        {/* Large 404 number */}
        <p
          className="text-[10rem] sm:text-[14rem] font-bold leading-none text-warm-white/8 select-none mb-0"
          style={{ fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          404
        </p>

        <div className="-mt-10 sm:-mt-16 mb-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Page Not Found
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            This page doesn&apos;t exist.
          </h1>
          <p
            className="text-warm-white/60 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            It may have moved, been removed, or the URL might be wrong.
            Here are some helpful links:
          </p>
        </div>

        {/* Suggestion grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-xl w-full">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="px-4 py-3 rounded-xl text-sm font-medium text-warm-white/80 bg-warm-white/8 border border-warm-white/10 hover:bg-warm-white/15 hover:text-warm-white transition-all"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {s.label}
            </Link>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold border-2 border-warm-white/30 text-warm-white hover:border-warm-white/70 hover:bg-warm-white/10 transition-all text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
