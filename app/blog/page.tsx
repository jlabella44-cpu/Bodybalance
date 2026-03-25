import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta, type PostMeta } from "@/lib/posts";
import CoverImage from "@/components/shared/CoverImage";

export const metadata: Metadata = {
  title: "Hormone Health Blog | Body Balance Lawrence, KS",
  description:
    "Evidence-based articles on hormone therapy, weight management, sexual health, and wellness from the clinical team at Body Balance in Lawrence, KS.",
  openGraph: {
    title: "Hormone Health Blog | Body Balance",
    description:
      "Evidence-based articles on hormone therapy, weight management, and wellness from Body Balance in Lawrence, KS.",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Hormone Health": "bg-forest/10 text-forest",
  "Men's Health": "bg-sage/20 text-forest",
  "Women's Health": "bg-gold/15 text-forest",
  "Weight Loss": "bg-mist text-charcoal",
  Wellness: "bg-mist text-charcoal",
};

function PostCard({ post }: { post: PostMeta }) {
  const colorClass = CATEGORY_COLORS[post.category] ?? "bg-mist text-charcoal";
  const dateStr = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-warm-white rounded-2xl border border-mist overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Cover */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <CoverImage src={null} alt={post.title} className="absolute inset-0" />
        <span
          className={`absolute bottom-3 left-3 inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${colorClass}`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {post.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <time
          className="text-xs text-charcoal/40 mb-3 block"
          dateTime={post.date}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {dateStr}
        </time>
        <h2
          className="text-lg font-bold text-forest leading-snug mb-3 group-hover:text-gold transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h2>
        <p
          className="text-sm text-charcoal/65 leading-relaxed flex-1"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-2 text-xs text-charcoal/40" style={{ fontFamily: "var(--font-sans)" }}>
          <span>{post.author}</span>
          <span>·</span>
          <span className="text-gold group-hover:underline">Read article →</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            The Body Balance Blog
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-warm-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hormone Health &amp; Wellness Insights
          </h1>
          <p className="text-warm-white/65 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Evidence-based articles from the Body Balance clinical team on hormones,
            weight management, sexual health, and living better in Lawrence, KS.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-charcoal/40 py-20" style={{ fontFamily: "var(--font-sans)" }}>
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-mist">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-charcoal/60 mb-7" style={{ fontFamily: "var(--font-sans)" }}>
            Book a free consultation and let&apos;s find out what&apos;s actually going on.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gold text-forest hover:bg-gold/90 transition-all shadow text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
