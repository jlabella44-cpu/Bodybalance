import Link from "next/link";

const serviceLinks = [
  { href: "/services/bhrt",             label: "Hormone Therapy (BHRT)" },
  { href: "/services/weight-management", label: "Medical Weight Management" },
  { href: "/services/lab-testing",       label: "Lab Testing & Analysis" },
  { href: "/services/sexual-health",     label: "Sexual Health & Function" },
];

const companyLinks = [
  { href: "/",           label: "Home" },
  { href: "/team",       label: "Meet the Team" },
  { href: "/assessment", label: "Symptom Assessment" },
  { href: "/blog",       label: "Blog" },
  { href: "/faq",        label: "FAQ" },
  { href: "/contact",    label: "Book a Consultation" },
];

export default function Footer() {
  return (
    <footer
      className="bg-forest text-warm-white"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">

        {/* Col 1 — Brand */}
        <div className="md:col-span-1">
          <p
            className="text-2xl font-bold text-warm-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Body Balance
          </p>
          <p className="text-warm-white/65 text-sm leading-relaxed mb-6">
            Personalized hormone therapy,<br />
            medical weight management, and<br />
            wellness care in Lawrence, KS.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/bodybalancekansas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/50 hover:text-gold transition-colors"
              aria-label="Body Balance on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/body.balance.ks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/50 hover:text-gold transition-colors"
              aria-label="Body Balance on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-warm-white/65 hover:text-warm-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Company */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
            Company
          </h3>
          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-warm-white/65 hover:text-warm-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact & Hours */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
            Visit Us
          </h3>
          <address className="not-italic text-sm text-warm-white/65 space-y-3">
            <p>
              1311 Wakarusa Dr Ste 2121<br />
              Lawrence, KS 66049
            </p>
            <p>
              <a href="tel:+17854247233" className="hover:text-warm-white transition-colors">
                (785) 424-7233
              </a>
            </p>
            <p>
              <a href="mailto:admin@bodybalanceks.com" className="hover:text-warm-white transition-colors">
                admin@bodybalanceks.com
              </a>
            </p>
            <p className="pt-1">
              Mon – Fri: 9:00 AM – 5:00 PM<br />
              Sat – Sun: Closed
            </p>
          </address>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-gold text-forest hover:bg-gold/90 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-white/35">
          <p>© {new Date().getFullYear()} Body Balance. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-warm-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-warm-white/70 transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline">Lawrence, KS 66049</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
