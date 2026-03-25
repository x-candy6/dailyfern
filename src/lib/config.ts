/** Site configuration for Daily Fern. */
export const siteConfig = {
  name: 'Daily Fern',
  tagline: 'Thoughtful news for a curious world.',
  url: 'https://dailyfern.vercel.app',
  description: 'News, culture, technology, health, and more — grounded reporting for the quietly curious.',
  categories: [
    { slug: 'news', label: 'News' },
    { slug: 'sport', label: 'Sport' },
    { slug: 'business', label: 'Business' },
    { slug: 'technology', label: 'Technology' },
    { slug: 'health', label: 'Health' },
    { slug: 'culture', label: 'Culture' },
    { slug: 'arts', label: 'Arts' },
    { slug: 'travel', label: 'Travel' },
    { slug: 'earth', label: 'Earth' },
  ],
} as const;
