import Link from 'next/link';
import { contentClient } from '@/lib/content';
import { prepareArticleCard } from '@stackmatix/cms-core';
import BlossomSVG from '@/components/BlossomSVG';
import LeafSeparator from '@/components/LeafSeparator';
import { siteConfig } from '@/lib/config';

export const revalidate = 300;

const CATEGORY_COLORS: Record<string, string> = {
  technology: '#16a34a',
  business: '#15803d',
  culture: '#166534',
  earth: '#22c55e',
  health: '#14532d',
  news: '#16a34a',
  sport: '#4ade80',
  arts: '#86efac',
  travel: '#bbf7d0',
};

/** Homepage with hero, category sections, latest stories, and newsletter CTA. */
export default async function HomePage() {
  const [articles, categoryCounts, techRaw, businessRaw, cultureRaw, earthRaw, healthRaw] = await Promise.all([
    contentClient.getArticles({ limit: 20 }),
    Promise.all(
      siteConfig.categories.map(async (c) =>
        [c.slug, await contentClient.countArticlesByCategory(c.slug)] as const
      )
    ).then((entries) => Object.fromEntries(entries) as Record<string, number>),
    contentClient.getArticlesByCategory('technology', { limit: 3 }),
    contentClient.getArticlesByCategory('business', { limit: 3 }),
    contentClient.getArticlesByCategory('culture', { limit: 3 }),
    contentClient.getArticlesByCategory('earth', { limit: 3 }),
    contentClient.getArticlesByCategory('health', { limit: 3 }),
  ]);
  const articleCards = articles.map(prepareArticleCard);
  const [featured, ...rest] = articleCards;
  const miniArticles = rest.slice(0, 3);

  const techArticles = techRaw.map(prepareArticleCard);
  const businessArticles = businessRaw.map(prepareArticleCard);
  const cultureArticles = cultureRaw.map(prepareArticleCard);
  const earthArticles = earthRaw.map(prepareArticleCard);
  const healthArticles = healthRaw.map(prepareArticleCard);

  const categorySections = [
    { label: 'Tech', slug: 'technology', kicker: 'Trending', articles: techArticles, color: '#16a34a' },
    { label: 'Business', slug: 'business', kicker: 'Analysis', articles: businessArticles, color: '#15803d' },
    { label: 'Culture', slug: 'culture', kicker: 'Spotlight', articles: cultureArticles, color: '#166534' },
    { label: 'Earth', slug: 'earth', kicker: 'Field Notes', articles: earthArticles, color: '#22c55e' },
    { label: 'Health', slug: 'health', kicker: 'Discovery', articles: healthArticles, color: '#14532d' },
  ];

  return (
    <>
      {/* Hero */}
      <section data-aos="fade-up" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F9F5EC]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-[140vmin] h-[140vmin] -translate-y-8">
            <BlossomSVG variant={1} />
          </div>
        </div>

        <div className="relative z-10 px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h1
              className="mb-8 lg:mb-12"
              style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(3.5rem, 8vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#1A2B1A' }}
            >
              Daily Fern
            </h1>

            <div className="grid lg:grid-cols-3 gap-6">
              {featured && (
                <div className="lg:col-span-2">
                  <Link href={featured.href} className="group block">
                    <article className="petal-panel p-8 lg:p-10 border-l-4 border-[#16a34a]">
                      <span className="kicker block mb-4">Featured</span>
                      <h2
                        className="text-4xl lg:text-6xl leading-[1.05] mb-6 group-hover:text-[#2D6A4F] transition-colors"
                        style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                      >
                        {featured.article.title}
                      </h2>
                      <p className="excerpt mb-6 max-w-2xl">{featured.article.excerpt}</p>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="meta-text">{featured.formattedDate}</span>
                        <span className="reading-time">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {featured.article.readingTime} min
                        </span>
                      </div>
                      <span className="link-accent">
                        Read the story
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </article>
                  </Link>
                </div>
              )}

              <div className="space-y-4">
                {miniArticles.map((article) => (
                  <Link key={article.article.id} href={article.href} className="group block">
                    <article className="petal-panel p-4">
                      <span className="category-label block mb-2">{article.article.category}</span>
                      <h3
                        className="text-base leading-tight group-hover:text-[#2D6A4F] transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                      >
                        {article.article.title}
                      </h3>
                      <span className="meta-text mt-2 block">{article.formattedDate}</span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categorySections.map((section, idx) => (
        <section key={section.slug} data-aos="fade-up" className={idx % 2 === 0 ? 'bg-[#F9F5EC]' : 'bg-[#FDFAF3]'}>
          <div className="px-6 lg:px-12 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <LeafSeparator />

              <div className="flex items-center justify-between mb-10">
                <h2
                  className="text-3xl lg:text-4xl"
                  style={{ fontFamily: 'var(--font-lora)', fontWeight: 700, fontStyle: 'italic' }}
                >
                  {section.label}
                </h2>
                <Link href={`/${section.slug}`} className="link-accent text-sm">
                  All {section.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {section.articles[0] && (
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Link href={section.articles[0].href} className="group block">
                      <article className="petal-panel p-8 h-full border-l-4" style={{ borderColor: section.color }}>
                        <span className="kicker block mb-3">{section.kicker}</span>
                        <h3
                          className="text-2xl lg:text-4xl leading-tight mb-4 group-hover:text-[#2D6A4F] transition-colors"
                          style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                        >
                          {section.articles[0].article.title}
                        </h3>
                        <p className="excerpt mb-6 max-w-xl">{section.articles[0].article.excerpt}</p>
                        <div className="flex items-center gap-4">
                          <span className="meta-text">{section.articles[0].formattedDate}</span>
                          <span className="reading-time">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {section.articles[0].article.readingTime} min
                          </span>
                        </div>
                      </article>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {section.articles.slice(1).map((article) => (
                      <Link key={article.article.id} href={article.href} className="group block">
                        <article className="petal-panel p-4">
                          <h4
                            className="text-base leading-tight group-hover:text-[#2D6A4F] transition-colors line-clamp-2"
                            style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                          >
                            {article.article.title}
                          </h4>
                          <span className="meta-text mt-2 block">{article.formattedDate}</span>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Latest Stories */}
      <section data-aos="fade-up" className="bg-[#FDFAF3]">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <LeafSeparator />

            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl lg:text-3xl"
                style={{ fontFamily: 'var(--font-lora)', fontWeight: 700, fontStyle: 'italic' }}
              >
                Latest stories
              </h2>
              <Link href="/news" className="link-accent text-sm">
                View all
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {articleCards.slice(3, 9).map((article) => {
                const catColor = CATEGORY_COLORS[article.article.category] ?? '#16a34a';
                return (
                  <Link key={article.article.id} href={article.href} className="group block article-card">
                    <article className="petal-panel p-5 border-l-4" style={{ borderColor: catColor }}>
                      <span className="category-label block mb-1" style={{ color: catColor }}>
                        {article.article.category}
                      </span>
                      <h4
                        className="text-base leading-tight line-clamp-2 group-hover:text-[#2D6A4F] transition-colors"
                        style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                      >
                        {article.article.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="meta-text">{article.formattedDate}</span>
                        <span className="reading-time">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {article.article.readingTime} min
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section data-aos="fade-up" className="bg-[#F9F5EC]">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <LeafSeparator />

            <h2
              className="text-2xl lg:text-3xl mb-10"
              style={{ fontFamily: 'var(--font-lora)', fontWeight: 700, fontStyle: 'italic' }}
            >
              Browse by topic
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.categories.map((category) => (
                <Link key={category.slug} href={`/${category.slug}`} className="group block">
                  <div className="petal-panel p-6 border-t-2 border-[#2D6A4F] transition-shadow hover:shadow-xl">
                    <h3
                      className="text-xl group-hover:text-[#2D6A4F] transition-colors"
                      style={{ fontFamily: 'var(--font-lora)', fontWeight: 700 }}
                    >
                      {category.label}
                    </h3>
                    <span className="meta-text mt-2 block">
                      {categoryCounts[category.slug] ?? 0} articles
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section data-aos="fade-up" className="bg-[#1B4332] py-20 lg:py-28">
        <div className="px-6 lg:px-12">
          <div className="max-w-xl mx-auto">
            <h2
              className="text-2xl lg:text-3xl mb-4 text-white/90"
              style={{ fontFamily: 'var(--font-lora)', fontWeight: 700, fontStyle: 'italic' }}
            >
              The daily brief
            </h2>
            <p className="text-white/60 mb-6">
              Five stories, grounded context, zero noise -- delivered weekdays.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="your@email.com" className="newsletter-input bg-[#2D6A4F]/30 border-[#40916C] text-white placeholder:text-white/40 flex-1" />
              <button type="submit" className="btn-accent bg-[#F9F5EC] text-[#1B4332] hover:bg-white whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
