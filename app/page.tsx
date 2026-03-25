import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hormone Therapy & Wellness Clinic in Lawrence, KS | Body Balance",
  description:
    "Body Balance offers personalized BHRT, medical weight loss, lab testing, and sexual health treatment in Lawrence, KS. Book your free consultation today.",
};

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center"
      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-forest mb-6"
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        Feel Like Yourself Again
      </h1>
      <p className="text-lg text-charcoal/70 max-w-xl mb-8">
        Personalized BHRT, medical weight loss, and wellness treatment — built
        around your body, not a template.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-colors shadow"
        >
          Book Free Consultation
        </Link>
        <Link
          href="/assessment"
          className="px-8 py-3.5 rounded-full font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-warm-white transition-colors"
        >
          Take the Assessment
        </Link>
      </div>
      <p className="mt-6 text-sm text-charcoal/40">
        Home page sections coming in Phase 2
      </p>
    </div>
  );
}
