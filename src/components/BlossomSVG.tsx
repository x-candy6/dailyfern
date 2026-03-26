interface BlossomSVGProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/** Ambient gradient backgrounds for section backgrounds. */
export default function BlossomSVG({ variant = 1, className = '' }: BlossomSVGProps) {
  const gradients = [
    'radial-gradient(ellipse at 30% 20%, rgba(134,239,172,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(74,222,128,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(22,163,74,0.1) 0%, transparent 70%)',
    'radial-gradient(ellipse at 20% 30%, rgba(74,222,128,0.25) 0%, transparent 45%), radial-gradient(ellipse at 80% 70%, rgba(34,197,94,0.15) 0%, transparent 50%)',
    'radial-gradient(ellipse at 25% 25%, rgba(22,163,74,0.2) 0%, transparent 45%), radial-gradient(ellipse at 75% 75%, rgba(21,128,61,0.15) 0%, transparent 50%)',
    'radial-gradient(ellipse at 30% 70%, rgba(187,247,208,0.35) 0%, transparent 45%), radial-gradient(ellipse at 70% 30%, rgba(134,239,172,0.2) 0%, transparent 50%)',
    'radial-gradient(ellipse at 20% 20%, rgba(74,222,128,0.25) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(34,197,94,0.2) 0%, transparent 50%)',
    'radial-gradient(ellipse at 35% 35%, rgba(52,211,153,0.2) 0%, transparent 45%), radial-gradient(ellipse at 65% 65%, rgba(16,185,129,0.15) 0%, transparent 50%)',
  ];

  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        background: gradients[variant - 1] || gradients[0],
        filter: 'blur(60px)',
        transform: 'scale(1.2)',
      }}
    />
  );
}
