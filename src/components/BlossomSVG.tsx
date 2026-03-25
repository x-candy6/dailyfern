interface BlossomSVGProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/** Ambient gradient backgrounds for section backgrounds. */
export default function BlossomSVG({ variant = 1, className = '' }: BlossomSVGProps) {
  const gradients = [
    'radial-gradient(ellipse at 30% 20%, rgba(46, 233, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(160, 46, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(255, 45, 143, 0.1) 0%, transparent 70%)',
    'radial-gradient(ellipse at 20% 30%, rgba(46, 233, 255, 0.3) 0%, transparent 45%), radial-gradient(ellipse at 80% 70%, rgba(160, 46, 255, 0.2) 0%, transparent 50%)',
    'radial-gradient(ellipse at 25% 25%, rgba(255, 106, 0, 0.22) 0%, transparent 45%), radial-gradient(ellipse at 75% 75%, rgba(160, 46, 255, 0.18) 0%, transparent 50%)',
    'radial-gradient(ellipse at 30% 70%, rgba(255, 45, 143, 0.22) 0%, transparent 45%), radial-gradient(ellipse at 70% 30%, rgba(208, 255, 0, 0.15) 0%, transparent 50%)',
    'radial-gradient(ellipse at 20% 20%, rgba(57, 255, 20, 0.2) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(46, 233, 255, 0.18) 0%, transparent 50%)',
    'radial-gradient(ellipse at 35% 35%, rgba(160, 46, 255, 0.25) 0%, transparent 45%), radial-gradient(ellipse at 65% 65%, rgba(255, 45, 143, 0.18) 0%, transparent 50%)',
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
