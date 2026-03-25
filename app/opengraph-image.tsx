import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Body Balance — Hormone Therapy & Wellness in Lawrence, KS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#1A3C34",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 70% 20%, rgba(122,158,142,0.15) 0%, transparent 60%)",
          }}
        />

        {/* Gold accent bar */}
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#C9A84C",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: 20,
          }}
        >
          Lawrence, KS
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F5F0EB",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 28,
          }}
        >
          Body Balance
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(245,240,235,0.65)",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          Hormone Therapy · Medical Weight Loss · Lab Testing · Sexual Health
        </div>

        {/* Bottom-right: URL badge */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 18,
            color: "rgba(245,240,235,0.40)",
            letterSpacing: "0.05em",
          }}
        >
          bodybalanceks.com
        </div>
      </div>
    ),
    { ...size },
  );
}
