import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllSlugs } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Body Balance Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const dateStr = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-forest overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url('/grain.png')", backgroundRepeat: "repeat", opacity: 0.04 }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-warm-white/40 mb-8"
            style={{ fontFamily: "var(--font-sans)" }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-warm-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-warm-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-warm-white/55 truncate max-w-[180px]">{post.title}</span>
          </nav>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider bg-gold/20 text-gold px-3 py-1 rounded-full mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {post.category}
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-warm-white/50" style={{ fontFamily: "var(--font-sans)" }}>
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{dateStr}</time>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#F5F0EB" />
          </svg>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-slate prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-forest
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-charcoal/70 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-charcoal prose-strong:font-semibold
              prose-ul:text-charcoal/70 prose-li:leading-relaxed
              prose-hr:border-mist"
            style={{ fontFamily: "var(--font-sans)" }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-mist">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-mist">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Have Questions About Your Hormones?
          </h2>
          <p className="text-charcoal/60 mb-7" style={{ fontFamily: "var(--font-sans)" }}>
            Book a free consultation with the Body Balance team in Lawrence, KS.
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
