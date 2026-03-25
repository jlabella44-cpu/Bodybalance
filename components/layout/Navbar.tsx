"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/bhrt", label: "Hormone Therapy (BHRT)" },
      { href: "/services/weight-management", label: "Weight Management" },
      { href: "/services/lab-testing", label: "Lab Testing" },
      { href: "/services/sexual-health", label: "Sexual Health" },
    ],
  },
  { href: "/assessment", label: "Assessment" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (simple approach)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "frosted bg-forest/90 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-xl font-bold tracking-wide"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: scrolled ? "var(--color-warm-white)" : "var(--color-forest)",
                }}
              >
                Body Balance
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                        scrolled
                          ? "text-warm-white/90 hover:text-gold"
                          : "text-forest hover:text-gold"
                      }`}
                      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl bg-warm-white border border-mist py-2"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-charcoal hover:bg-mist hover:text-forest transition-colors"
                              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? "text-warm-white/90 hover:text-gold"
                        : "text-forest hover:text-gold"
                    }`}
                    style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+17854247233"
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-warm-white/80 hover:text-gold" : "text-forest hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                (785) 424-7233
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gold text-forest hover:bg-gold/90 transition-colors shadow-sm"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 mb-1 transition-all ${scrolled || mobileOpen ? "bg-warm-white" : "bg-forest"}`} />
              <span className={`block w-5 h-0.5 mb-1 transition-all ${scrolled || mobileOpen ? "bg-warm-white" : "bg-forest"}`} />
              <span className={`block w-5 h-0.5 transition-all ${scrolled || mobileOpen ? "bg-warm-white" : "bg-forest"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col"
          >
            {/* Close button row */}
            <div className="flex items-center justify-between px-4 h-16">
              <span
                className="text-xl font-bold text-warm-white"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Body Balance
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-warm-white/80 hover:text-warm-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-warm-white hover:text-gold transition-colors block"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-warm-white/70 hover:text-gold transition-colors"
                          style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile bottom CTA */}
            <div className="px-8 pb-10 flex flex-col gap-3">
              <a
                href="tel:+17854247233"
                className="text-warm-white/70 text-sm text-center"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                (785) 424-7233
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-full text-center font-semibold bg-gold text-forest hover:bg-gold/90 transition-colors"
                style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
