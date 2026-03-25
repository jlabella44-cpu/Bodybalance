const signals = [
  "Serving Lawrence, KS Since 2021",
  "No One-Size-Fits-All Plans",
  "Advanced Lab-Based Diagnostics",
  "No Insurance Required — HSA/FSA Accepted",
];

export default function TrustBar() {
  return (
    <div
      className="bg-forest py-4"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {signals.map((signal, i) => (
            <li key={signal} className="flex items-center gap-6">
              <span className="text-xs sm:text-sm font-medium text-warm-white/90 text-center">
                {signal}
              </span>
              {i < signals.length - 1 && (
                <span
                  className="hidden sm:block text-gold/60 text-lg select-none"
                  aria-hidden
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
