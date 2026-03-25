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

export default function SexualHealthPage() {
  return (
    <>
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
