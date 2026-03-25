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
  openGraph: {
    title: "Hormone Therapy & Wellness Clinic in Lawrence, KS | Body Balance",
    description:
      "Body Balance offers personalized BHRT, medical weight loss, lab testing, and sexual health treatment in Lawrence, KS.",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Body Balance",
  description:
    "Personalized hormone therapy, medical weight loss, lab testing, and sexual health treatment in Lawrence, KS.",
  url: "https://www.bodybalanceks.com",
  telephone: "+17854247233",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1311 Wakarusa Dr Ste 2121",
    addressLocality: "Lawrence",
    addressRegion: "KS",
    postalCode: "66049",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9717,
    longitude: -95.2353,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: "HormoneTherapy",
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/bodybalanceks",
    "https://www.instagram.com/bodybalanceks",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
