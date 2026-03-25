import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Body Balance Lawrence, KS",
  description: "Terms governing use of the Body Balance website and services.",
};

const EFFECTIVE_DATE = "March 25, 2026";
const PRACTICE_NAME = "Body Balance";
const PRACTICE_EMAIL = "admin@bodybalanceks.com";

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-forest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Terms of Service
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
              Please read these Terms of Service carefully before using the{" "}
              <strong>www.bodybalanceks.com</strong> website operated by {PRACTICE_NAME}.
              By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2>1. Website Use</h2>
            <p>
              This website is provided for informational purposes about {PRACTICE_NAME}&apos;s
              services and to facilitate appointment requests. You agree to use this website
              only for lawful purposes and in a manner that does not infringe the rights of others.
            </p>

            <h2>2. Not Medical Advice</h2>
            <p>
              <strong>
                The content on this website — including articles, blog posts, service descriptions,
                and any other materials — is for informational and educational purposes only.
                It does not constitute medical advice, diagnosis, or treatment.
              </strong>
            </p>
            <p>
              Nothing on this website should be used as a substitute for professional medical
              advice from a licensed healthcare provider who knows your individual health history.
              Always seek the advice of a qualified health provider with questions about a medical
              condition. Never disregard professional medical advice or delay seeking it because
              of something you read on this website.
            </p>

            <h2>3. No Patient-Provider Relationship</h2>
            <p>
              Use of this website, submission of a contact form, or any communication through
              this website does not create a patient-provider relationship between you and
              {PRACTICE_NAME}. A patient-provider relationship is established only through a
              formal intake process, executed agreements, and clinical evaluation.
            </p>

            <h2>4. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to ensure the accuracy of information on this website,
              but we make no warranties or representations as to its completeness, accuracy,
              or timeliness. Medical information and clinical best practices evolve; content
              may not reflect the most current research or clinical guidelines.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and design —
              is the property of {PRACTICE_NAME} and is protected by applicable copyright
              and intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written permission.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided
              for convenience only. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of third-party sites.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {PRACTICE_NAME} and its
              owners, employees, and contractors shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or
              related to your use of, or inability to use, this website or its content.
            </p>
            <p>
              In no event shall our total liability to you for all claims arising from your
              use of this website exceed one hundred dollars ($100).
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless {PRACTICE_NAME} and its
              officers, employees, and agents from any claims, damages, liabilities, and
              expenses arising out of your use of this website or your violation of these Terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              State of Kansas, without regard to conflict of law principles. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of
              the courts located in Douglas County, Kansas.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will post updated
              Terms on this page with a revised effective date. Your continued use of the
              website after any changes constitutes acceptance of the updated Terms.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href={`mailto:${PRACTICE_EMAIL}`}>{PRACTICE_EMAIL}</a>.
            </p>
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
