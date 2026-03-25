import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCTA from "@/components/services/ServiceCTA";
import WeightHero from "@/components/services/weight/WeightHero";
import WeightOfferings from "@/components/services/weight/WeightOfferings";
import WeightProcess from "@/components/services/weight/WeightProcess";
import WeightFaq from "@/components/services/weight/WeightFaq";

export const metadata: Metadata = {
  title: "Medical Weight Loss in Lawrence, KS | GLP-1 Treatment | Body Balance",
  description:
    "Body Balance offers physician-supervised medical weight management in Lawrence, KS — including GLP-1/GIP therapy (semaglutide), metabolic optimization, and personalized plans. Book a free consultation.",
  keywords: [
    "medical weight loss Lawrence KS",
    "GLP-1 weight loss Kansas",
    "semaglutide Lawrence KS",
    "physician weight management Lawrence",
    "medical weight management Kansas",
  ],
  openGraph: {
    title: "Medical Weight Loss in Lawrence, KS | Body Balance",
    description:
      "Physician-supervised GLP-1/GIP protocols and metabolic optimization for sustainable weight loss in Lawrence, KS.",
  },
};

export default function WeightManagementPage() {
  return (
    <>
      <WeightHero />
      <WeightOfferings />
      <WeightProcess />
      <WeightFaq />
      <ServiceCTA
        heading="Ready to Make Weight Loss Actually Work?"
        subheading="Book a free consultation and find out if medical weight management is right for you."
      />
    </>
  );
}
