/** Small botanical leaf mark for the site logo. */
export default function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 19 C9 19 7 14 5.5 10 C4 6 1.5 4.5 1 2.5 C0.5 0.5 2.5 -0.5 4 1 C5.5 2.5 6 5 7.5 8 C9 11 9 12.5 9 14 C9 12.5 9 11 10.5 8 C12 5 12.5 2.5 14 1 C15.5 -0.5 17.5 0.5 17 2.5 C16.5 4.5 14 6 12.5 10 C11 14 9 19 9 19Z"
        fill="currentColor"
      />
    </svg>
  );
}
