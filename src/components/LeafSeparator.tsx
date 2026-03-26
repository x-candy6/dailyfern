/** Botanical leaf sprig separator for use between page sections. */
export default function LeafSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left line */}
        <line x1="0" y1="12" x2="44" y2="12" stroke="#C8DFC8" strokeWidth="1" />
        {/* Central leaf sprig */}
        <path
          d="M60 20 C60 20 58 15 56 11 C54 7 51 5.5 50 3.5 C49 1.5 51 0.5 52.5 2 C54 3.5 54.5 6 56 9 C57.5 12 58.5 14 60 16 C61.5 14 62.5 12 64 9 C65.5 6 66 3.5 67.5 2 C69 0.5 71 1.5 70 3.5 C69 5.5 66 7 64 11 C62 15 60 20 60 20Z"
          fill="#2D6A4F"
        />
        {/* Small side leaves */}
        <path d="M56.5 11 C54.5 10 52.5 10.5 51.5 9 C50.5 7.5 51.5 6 53 6.5 C54.5 7 55.5 9 56.5 11Z" fill="#2D6A4F" opacity="0.7" />
        <path d="M63.5 11 C65.5 10 67.5 10.5 68.5 9 C69.5 7.5 68.5 6 67 6.5 C65.5 7 64.5 9 63.5 11Z" fill="#2D6A4F" opacity="0.7" />
        {/* Right line */}
        <line x1="76" y1="12" x2="120" y2="12" stroke="#C8DFC8" strokeWidth="1" />
      </svg>
    </div>
  );
}
