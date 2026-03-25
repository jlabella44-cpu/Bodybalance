import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hormone Therapy & Wellness Clinic in Lawrence, KS | Body Balance",
    template: "%s | Body Balance",
  },
  description:
    "Body Balance offers personalized BHRT, medical weight loss, lab testing, and sexual health treatment in Lawrence, KS. Book your free consultation today.",
  metadataBase: new URL("https://www.bodybalanceks.com"),
  openGraph: {
    siteName: "Body Balance",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
