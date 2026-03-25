import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  light?: boolean; // white text for dark backgrounds
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxWidth = align === "center" ? "max-w-2xl mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`${textAlign} ${maxWidth} mb-12`}
    >
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-warm-white" : "text-forest"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-warm-white/70" : "text-charcoal/70"
          }`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
