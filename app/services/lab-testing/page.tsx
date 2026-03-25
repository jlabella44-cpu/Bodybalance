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

export default function LabTestingPage() {
  return (
    <>
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
