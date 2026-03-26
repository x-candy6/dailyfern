export const revalidate = 300;

/** Accessibility statement page. */
export default function AccessibilityPage() {
  return (
    <section className="py-20 bg-[#F9F5EC]">
      <div className="px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-8" style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.05, color: '#1A2B1A' }}>Accessibility</h1>
          <div className="petal-panel p-8 lg:p-12 prose prose-lg">
            <p>Daily Fern is committed to making our content accessible to everyone.</p>
            <p>We aim to meet WCAG 2.1 AA standards and continually improve our accessibility.</p>
            <h2>Feedback</h2>
            <p>If you encounter accessibility barriers, please email <a href="mailto:accessibility@dailyfern.com">accessibility@dailyfern.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
