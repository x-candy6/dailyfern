export const revalidate = 300;

/** Terms of service page. */
export default function TermsPage() {
  return (
    <section className="py-20 bg-[#F6F7FB]">
      <div className="px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl mb-8">Terms of Service</h1>
          <div className="petal-panel p-8 lg:p-12 prose prose-lg">
            <p>Last updated: March 2026</p>
            <p>By using Daily Fern, you agree to these terms. Our content is for informational purposes only.</p>
            <h2>Use of content</h2>
            <p>All content on Daily Fern is copyright Daily Fern unless otherwise stated. You may share articles with proper attribution.</p>
            <h2>Contact</h2>
            <p>For terms questions, email <a href="mailto:legal@dailyfern.com">legal@dailyfern.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
