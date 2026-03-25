import type { Metadata } from "next";
import SexualHero from "@/components/services/sexual/SexualHero";
import SexualOverview from "@/components/services/sexual/SexualOverview";
import SexualFaq from "@/components/services/sexual/SexualFaq";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Sexual Health & Wellness Treatment in Lawrence, KS | Body Balance",
  description:
    "Discreet, clinically-grounded sexual health treatment for men and women in Lawrence, KS. Low libido, sexual dysfunction, and intimacy concerns addressed with proven therapies.",
  keywords: [
    "sexual wellness clinic Lawrence KS",
    "low libido treatment Kansas",
    "sexual dysfunction treatment Lawrence KS",
    "sexual health clinic Kansas",
  ],
};

const sexualHealthSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Sexual Health & Function Treatment — Body Balance Lawrence KS",
  description:
    "Discreet clinical treatment for low libido, sexual dysfunction, and intimacy concerns for men and women in Lawrence, KS.",
  url: "https://www.bodybalanceks.com/services/sexual-health",
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Sexual Dysfunction" },
  provider: {
    "@type": "MedicalClinic",
    name: "Body Balance",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1311 Wakarusa Dr Ste 2121",
      addressLocality: "Lawrence",
      addressRegion: "KS",
      postalCode: "66049",
    },
    telephone: "+17854247233",
  },
};

export default function SexualHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sexualHealthSchema) }}
      />
      <SexualHero />
      <SexualOverview />
      <SexualFaq />
      <ServiceCTA
        heading="You Deserve to Feel Connected Again"
        subheading="Our team handles sexual health concerns with complete discretion and clinical expertise."
      />
    </>
  );
}
