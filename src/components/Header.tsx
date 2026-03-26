'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import LeafMark from '@/components/LeafMark';

/** Site header — Forest Broadsheet style. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainCategories = siteConfig.categories.slice(0, 6);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5EC]/95 backdrop-blur-sm border-b border-[#C8DFC8]">
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          <Link href="/" className="flex items-center gap-2 text-[#1B4332] hover:text-[#2D6A4F] transition-colors">
            <LeafMark className="text-[#2D6A4F] flex-shrink-0" />
            <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.01em' }}>
              Daily Fern
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainCategories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} className="nav-link">
                {category.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/newsletter" className="hidden sm:inline-flex btn-accent text-sm">
              Subscribe
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 -mr-2 text-[#1A2B1A]"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-[#1B4332]">
            <LeafMark className="text-[#2D6A4F]" />
            <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontWeight: 600, fontSize: '1.2rem' }}>
              Daily Fern
            </span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-[#1A2B1A]" aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-5">
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-lora)', fontSize: '1.75rem', fontWeight: 600, color: '#1A2B1A' }}>
            Home
          </Link>
          {siteConfig.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-lora)', fontSize: '1.75rem', fontWeight: 600, color: '#1A2B1A' }}
            >
              {category.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link href="/newsletter" onClick={() => setMenuOpen(false)} className="btn-accent w-full text-center block">
            Get the brief
          </Link>
        </div>
      </div>
    </>
  );
}
