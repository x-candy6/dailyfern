export const revalidate = 300;

/** Privacy policy page. */
export default function PrivacyPage() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl mb-8">Privacy Policy</h1>
          <div className="petal-panel p-8 lg:p-12 prose prose-lg">
            <p>Last updated: March 2026</p>
            <p>Daily Fern respects your privacy. We collect only the information necessary to provide our service and never sell your data to third parties.</p>
            <h2>What we collect</h2>
            <p>We collect email addresses for newsletter subscribers and standard server logs for site operation.</p>
            <h2>Contact</h2>
            <p>For privacy questions, email <a href="mailto:privacy@dailyfern.com">privacy@dailyfern.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
