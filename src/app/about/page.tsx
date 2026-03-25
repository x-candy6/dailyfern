import BlossomSVG from '@/components/BlossomSVG';

export const revalidate = 300;

/** About page. */
export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#F6F7FB]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[80vmin] h-[80vmin]">
            <BlossomSVG variant={1} />
          </div>
        </div>
        <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-headline text-[#0B0C10] mb-6">About Daily Fern</h1>
            <p className="text-[#6B7280] text-lg lg:text-xl max-w-2xl mx-auto">
              Thoughtful news for a curious world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F6F7FB]">
        <div className="px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="petal-panel p-8 lg:p-12 prose prose-lg">
              <p>
                Daily Fern is an independent news publication covering the stories that shape our world --
                from technology and business to culture, health, and the natural environment.
              </p>
              <p>
                We believe that good journalism is quiet, curious, and unhurried. We&apos;re not here to
                capture your attention -- we&apos;re here to earn your trust.
              </p>
              <h2>Our Values</h2>
              <ul>
                <li><strong>Thoughtfulness over speed:</strong> We take time to understand before we explain.</li>
                <li><strong>Curiosity over clicks:</strong> We follow stories because they matter, not because they trend.</li>
                <li><strong>Clarity over complexity:</strong> We write for readers, not algorithms.</li>
                <li><strong>Independent:</strong> Free from corporate influence and editorial agendas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
