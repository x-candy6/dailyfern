import BlossomSVG from '@/components/BlossomSVG';

export const revalidate = 300;

/** Newsletter subscription page. */
export default function NewsletterPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#F6F7FB]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[80vmin] h-[80vmin]">
            <BlossomSVG variant={6} />
          </div>
        </div>
        <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-headline text-[#0B0C10] mb-6">The Daily Brief</h1>
            <p className="text-[#6B7280] text-lg lg:text-xl max-w-2xl mx-auto">
              Five stories, grounded context, zero noise. Delivered weekdays.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F6F7FB]">
        <div className="px-6 lg:px-12">
          <div className="max-w-lg mx-auto">
            <div className="petal-panel p-8 lg:p-12 border-t-4 border-[#FF2D8F]">
              <form className="flex flex-col gap-4">
                <input type="email" placeholder="your@email.com" className="newsletter-input" />
                <button type="submit" className="btn-accent text-center">Subscribe for free</button>
              </form>
              <p className="text-[#9CA3AF] text-xs text-center mt-4">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
