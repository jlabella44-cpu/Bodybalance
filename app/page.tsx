import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQAccordion from "@/components/home/FAQAccordion";
import BlogTeaser from "@/components/home/BlogTeaser";
import BookingBanner from "@/components/home/BookingBanner";

export const metadata: Metadata = {
  title: "Hormone Therapy & Wellness Clinic in Lawrence, KS | Body Balance",
  description:
    "Body Balance offers personalized BHRT, medical weight loss, lab testing, and sexual health treatment in Lawrence, KS. Book your free consultation today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <FAQAccordion />
      <BlogTeaser />
      <BookingBanner />
    </>
  );
}
