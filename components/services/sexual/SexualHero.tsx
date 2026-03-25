import Link from "next/link";

export default function SexualHero() {
  return (
    <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-warm-white/40 mb-8" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/" className="hover:text-warm-white/70 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-warm-white/70 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-warm-white/60">Sexual Health</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4" style={{ fontFamily: "var(--font-sans)" }}>
          Discreet &amp; Clinical
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6 max-w-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Sexual Health &amp; Function Treatment in Lawrence, KS
        </h1>
        <p className="text-lg text-warm-white/80 leading-relaxed max-w-3xl mb-10" style={{ fontFamily: "var(--font-sans)" }}>
          Sexual health concerns are more common than most people realize — and more treatable than most people know.
          At Body Balance, we address low libido, sexual dysfunction, and intimacy concerns for both men and women
          with the same clinical precision and personalized approach we bring to all of our care.
          No judgment. No awkwardness. Just effective treatment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg text-base" style={{ fontFamily: "var(--font-sans)" }}>
            Book a Confidential Consultation
          </Link>
          <Link href="/assessment" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-warm-white/40 text-warm-white hover:border-warm-white/80 hover:bg-warm-white/10 transition-all text-base" style={{ fontFamily: "var(--font-sans)" }}>
            Take the Symptom Quiz
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
        </svg>
      </div>
    </section>
  );
}
