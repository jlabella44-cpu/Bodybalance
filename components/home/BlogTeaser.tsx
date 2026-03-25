"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CoverImage from "@/components/shared/CoverImage";
import type { PostMeta } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Hormone Health": "text-forest bg-forest/10",
  "Men's Health":   "text-forest bg-sage/20",
  "Women's Health": "text-forest bg-gold/15",
  Wellness:         "text-charcoal bg-mist",
};

export default function BlogTeaser({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>
              Stay Informed
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest" style={{ fontFamily: "var(--font-display)" }}>
              From Our Blog
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-forest font-semibold hover:text-gold transition-colors group flex-shrink-0" style={{ fontFamily: "var(--font-sans)" }}>
            View All Posts
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, i) => {
            const colorClass = CATEGORY_COLORS[post.category] ?? "text-charcoal bg-mist";
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/blog/${post.slug}`} className="group block bg-warm-white rounded-2xl overflow-hidden border border-mist shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Cover */}
                  <div className="aspect-video relative overflow-hidden">
                    <CoverImage src={null} alt={post.title} className="absolute inset-0" />
                    <span className={`absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${colorClass}`} style={{ fontFamily: "var(--font-sans)" }}>
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-charcoal/40 mb-3" style={{ fontFamily: "var(--font-sans)" }}>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-forest mb-3 leading-snug group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
