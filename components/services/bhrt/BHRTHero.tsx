import Link from "next/link";

export default function BHRTHero() {
  return (
    <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sage/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-warm-white/40 mb-8"
          style={{ fontFamily: "var(--font-sans)" }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-warm-white/70 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-warm-white/70 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-warm-white/60">BHRT</span>
        </nav>

        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Bioidentical Hormone Therapy
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bioidentical Hormone Replacement Therapy (BHRT) in Lawrence, KS
        </h1>

        <p
          className="text-lg text-warm-white/80 leading-relaxed max-w-3xl mb-10"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          If you&apos;ve been struggling with fatigue, weight gain, mood swings, low
          libido, or brain fog, your hormones may be out of balance. At Body
          Balance in Lawrence, KS, we use comprehensive lab testing to identify
          exactly what&apos;s off — then create a personalized BHRT protocol using
          plant-derived hormones that are structurally identical to the ones your
          body makes naturally. No guessing. No cookie-cutter dosing. Just real
          results, backed by science.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book Free Consultation
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-warm-white/40 text-warm-white hover:border-warm-white/80 hover:bg-warm-white/10 transition-all text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Take the Symptom Quiz
          </Link>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
        </svg>
      </div>
    </section>
  );
}
