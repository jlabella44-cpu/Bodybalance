import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Body Balance Lawrence, KS",
  description: "How Body Balance collects, uses, and protects your personal information.",
};

const EFFECTIVE_DATE = "March 25, 2026";
const PRACTICE_NAME = "Body Balance";
const PRACTICE_EMAIL = "admin@bodybalanceks.com";
const PRACTICE_ADDRESS = "1311 Wakarusa Dr Ste 2121, Lawrence, KS 66049";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
          <p className="text-warm-white/55 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-slate prose-base max-w-none
              prose-headings:font-bold prose-headings:text-forest
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
              prose-p:text-charcoal/70 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-ul:text-charcoal/70 prose-li:leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p>
              {PRACTICE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and protect
              information about you when you visit our website at{" "}
              <strong>www.bodybalanceks.com</strong> or contact us about our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Name, email address, and phone number submitted through contact forms</li>
              <li>Health-related information you choose to share when describing your symptoms or goals</li>
              <li>Service preferences and preferred contact times</li>
              <li>Communications you send us by email or phone</li>
            </ul>
            <p>
              We also collect certain information automatically when you visit our website, including
              your IP address, browser type, pages visited, and referring URLs, through standard
              web server logs and analytics tools (such as Google Analytics).
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide, personalize, and improve our services</li>
              <li>Send you appointment reminders and follow-up communications</li>
              <li>Comply with applicable legal and regulatory obligations</li>
              <li>Analyze how our website is used to improve the user experience</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h2>3. HIPAA and Health Information</h2>
            <p>
              Health information you share with our clinical team in the context of a patient relationship
              is governed by our separately provided Notice of Privacy Practices under the Health Insurance
              Portability and Accountability Act (HIPAA). Please request a copy of our Notice of Privacy
              Practices at your first appointment or by contacting us at the address below.
            </p>
            <p>
              Information submitted through our website contact form prior to establishing a patient
              relationship is treated with the same confidentiality standards as clinical information,
              but may not yet be subject to HIPAA protections.
            </p>

            <h2>4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> who assist us in operating our website and business
                (e.g., email delivery, form processing, analytics), who are bound by confidentiality obligations
              </li>
              <li>
                <strong>Legal authorities</strong> if required by law, court order, or to protect the
                rights, property, or safety of our patients, staff, or the public
              </li>
              <li>
                <strong>Healthcare providers</strong> involved in your care, only with your explicit written consent
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain contact form submissions and communications for a reasonable period to respond to
              your inquiry and maintain records of our interactions. Clinical patient records are retained
              in accordance with Kansas state law and applicable federal regulations.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to improve your browsing experience and
              analyze site traffic. You can control cookies through your browser settings; however,
              disabling cookies may affect some site functionality.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of those sites and encourage you to review their privacy policies.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe a child has submitted
              information to us, please contact us immediately.
            </p>

            <h2>9. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information, subject to legal retention obligations</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information below.
            </p>

            <h2>10. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information
              from unauthorized access, loss, or misuse. However, no method of transmission over the
              internet is completely secure.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page with a revised effective date. Continued use of our website after any
              changes constitutes acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li><strong>{PRACTICE_NAME}</strong></li>
              <li>{PRACTICE_ADDRESS}</li>
              <li>
                Email:{" "}
                <a href={`mailto:${PRACTICE_EMAIL}`}>{PRACTICE_EMAIL}</a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+17854247233">(785) 424-7233</a>
              </li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-mist">
            <Link href="/" className="text-sm text-forest hover:text-gold transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
