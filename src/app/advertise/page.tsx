import BlossomSVG from '@/components/BlossomSVG';

export const revalidate = 300;

/** Advertise page. */
export default function AdvertisePage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden bg-[#F6F7FB]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[80vmin] h-[80vmin]">
            <BlossomSVG variant={3} />
          </div>
        </div>
        <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-headline text-[#0B0C10] mb-6">Advertise</h1>
            <p className="text-[#6B7280] text-lg max-w-2xl">Reach a thoughtful, engaged audience.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F6F7FB]">
        <div className="px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="petal-panel p-8 lg:p-12">
              <p className="excerpt mb-6">
                Daily Fern readers are curious, educated professionals who value depth over volume.
                If your brand shares those values, we&apos;d like to talk.
              </p>
              <p className="excerpt">
                Contact us at <a href="mailto:advertising@dailyfern.com" className="link-accent">advertising@dailyfern.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
