import Image from "next/image";

interface CoverImageProps {
  src?: string | null;
  alt: string;
  className?: string;
}

/**
 * Renders a next/image <Image> when `src` is supplied,
 * or falls back to a branded gradient placeholder.
 * Use this everywhere we plan to eventually show a photo.
 */
export default function CoverImage({ src, alt, className = "" }: CoverImageProps) {
  if (src) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Gradient placeholder — same aspect-ratio container, swap src in when ready
  return (
    <div
      className={`w-full h-full bg-gradient-to-br from-forest/10 to-sage/20 flex items-end p-4 ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}
