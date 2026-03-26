import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import LeafMark from '@/components/LeafMark';

export default function Footer() {
  const mainCategories = siteConfig.categories.slice(0, 6);
  return (
    <footer className="bg-[#1B4332] text-white py-16 lg:py-20">
      <div className="px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 text-white/90 block mb-4 hover:text-white transition-colors w-fit">
                <LeafMark className="text-[#74C69D] flex-shrink-0" />
                <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontWeight: 600, fontSize: '1.3rem' }}>
                  Daily Fern
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed">{siteConfig.tagline}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                Categories
              </h4>
              <ul className="space-y-2">
                {mainCategories.map((category) => (
                  <li key={category.slug}>
                    <Link href={`/${category.slug}`} className="footer-link text-white/50 hover:text-white/80 text-sm">
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                Company
              </h4>
              <ul className="space-y-2">
                {[['About', '/about'], ['Careers', '/careers'], ['Contact', '/contact'], ['Advertise', '/advertise']].map(([label, href]) => (
                  <li key={href}><Link href={href} className="footer-link text-white/50 hover:text-white/80 text-sm">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                Connect
              </h4>
              <ul className="space-y-2">
                {[['Twitter', 'https://twitter.com/dailyfern'], ['LinkedIn', 'https://linkedin.com/company/dailyfern'], ['Instagram', 'https://instagram.com/dailyfern']].map(([label, href]) => (
                  <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="footer-link text-white/50 hover:text-white/80 text-sm">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2D6A4F]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              &copy; {new Date().getFullYear()} Daily Fern. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Accessibility', '/accessibility']].map(([label, href]) => (
                <Link key={href} href={href} className="text-white/30 text-xs hover:text-white/60 transition-colors" style={{ fontFamily: 'var(--font-geist-sans)' }}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
