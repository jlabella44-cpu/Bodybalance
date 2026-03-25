import type { Metadata } from "next";
import LabHero from "@/components/services/lab/LabHero";
import WhyLabsMatter from "@/components/services/lab/WhyLabsMatter";
import WhatWeTest from "@/components/services/lab/WhatWeTest";
import LabFaq from "@/components/services/lab/LabFaq";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Hormone Lab Testing in Lawrence, KS | Body Balance",
  description:
    "Comprehensive hormone and metabolic lab panels in Lawrence, KS. Body Balance uses advanced diagnostics to find the root cause of your symptoms — not guesswork.",
  keywords: [
    "hormone lab test Lawrence KS",
    "comprehensive hormone panel Lawrence KS",
    "hormone testing Kansas",
    "metabolic panel Lawrence KS",
  ],
};

const labSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Hormone & Metabolic Lab Testing — Body Balance Lawrence KS",
  description:
    "Comprehensive hormone panels including estradiol, testosterone, thyroid, cortisol, insulin, and metabolic markers in Lawrence, KS.",
  url: "https://www.bodybalanceks.com/services/lab-testing",
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalTest", name: "Hormone Panel" },
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

export default function LabTestingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(labSchema) }}
      />
      <LabHero />
      <WhyLabsMatter />
      <WhatWeTest />
      <LabFaq />
      <ServiceCTA
        heading="Know What's Actually Going On Inside Your Body"
        subheading="Book a consultation and we'll order a comprehensive panel tailored to your symptoms."
      />
    </>
  );
}
