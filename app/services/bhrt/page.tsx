import type { Metadata } from "next";
import BHRTHero from "@/components/services/bhrt/BHRTHero";
import WhatIsBHRT from "@/components/services/bhrt/WhatIsBHRT";
import GenderTabs from "@/components/services/bhrt/GenderTabs";
import BHRTBenefits from "@/components/services/bhrt/BHRTBenefits";
import BHRTProcess from "@/components/services/bhrt/BHRTProcess";
import WhyBodyBalance from "@/components/services/bhrt/WhyBodyBalance";
import BHRTFaq from "@/components/services/bhrt/BHRTFaq";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Bioidentical Hormone Replacement Therapy in Lawrence, KS | Body Balance",
  description:
    "Body Balance provides personalized BHRT for men and women in Lawrence, KS. Restore energy, mood, libido, and vitality with lab-based bioidentical hormone therapy. Book a free consultation.",
  keywords: [
    "BHRT Lawrence KS",
    "hormone therapy Lawrence Kansas",
    "testosterone replacement therapy Lawrence KS",
    "bioidentical hormones Kansas",
    "bioidentical hormone replacement therapy Lawrence",
  ],
  openGraph: {
    title: "Bioidentical Hormone Replacement Therapy in Lawrence, KS | Body Balance",
    description:
      "Personalized BHRT for men and women. Lab-based diagnosis, bioidentical hormones, and ongoing monitoring in Lawrence, KS.",
  },
};

export default function BHRTPage() {
  return (
    <>
      <BHRTHero />
      <WhatIsBHRT />
      <GenderTabs />
      <BHRTBenefits />
      <BHRTProcess />
      <WhyBodyBalance />
      <BHRTFaq />
      <ServiceCTA
        heading="Ready to Balance Your Hormones?"
        subheading="Schedule a free consultation and find out if BHRT is right for you."
      />
    </>
  );
}
