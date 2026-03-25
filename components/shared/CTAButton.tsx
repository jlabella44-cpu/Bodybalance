import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "gold" | "forest" | "outline-white" | "outline-forest";
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  variant = "gold",
  size = "md",
  children,
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all shadow hover:shadow-lg hover:scale-[1.02]";

  const sizes = {
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    gold: "bg-gold text-forest hover:bg-gold/90",
    forest: "bg-forest text-warm-white hover:bg-forest/90",
    "outline-white":
      "border-2 border-warm-white/60 text-warm-white hover:border-warm-white hover:bg-warm-white/10",
    "outline-forest":
      "border-2 border-forest text-forest hover:bg-forest hover:text-warm-white",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
    </Link>
  );
}
