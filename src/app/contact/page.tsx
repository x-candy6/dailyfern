import BlossomSVG from '@/components/BlossomSVG';

export const revalidate = 300;

/** Contact page. */
export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden bg-[#F6F7FB]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[80vmin] h-[80vmin]">
            <BlossomSVG variant={4} />
          </div>
        </div>
        <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-headline text-[#0B0C10] mb-6">Contact</h1>
            <p className="text-[#6B7280] text-lg max-w-2xl">
              Have a story tip, partnership idea, or just want to say hello?
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F6F7FB]">
        <div className="px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="petal-panel p-8 lg:p-12">
              <p className="excerpt mb-8">
                Reach us at{' '}
                <a href="mailto:hello@dailyfern.com" className="link-accent">
                  hello@dailyfern.com
                </a>
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[#F6F7FB] rounded-2xl">
                  <h3 className="font-display font-bold text-lg mb-2">Story Tips</h3>
                  <p className="text-[#6B7280] text-sm">tips@dailyfern.com</p>
                </div>
                <div className="p-6 bg-[#F6F7FB] rounded-2xl">
                  <h3 className="font-display font-bold text-lg mb-2">Partnerships</h3>
                  <p className="text-[#6B7280] text-sm">partnerships@dailyfern.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
