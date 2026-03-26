interface BlossomSVGProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/** Botanical leaf watermark for page backgrounds. */
export default function BlossomSVG({ variant = 1, className = '' }: BlossomSVGProps) {
  const configs = [
    { rotate: '0', scale: '1', opacity: '0.12', color: '#2D6A4F' },
    { rotate: '30', scale: '0.85', opacity: '0.1', color: '#1B4332' },
    { rotate: '-20', scale: '1.1', opacity: '0.09', color: '#40916C' },
    { rotate: '15', scale: '0.9', opacity: '0.11', color: '#2D6A4F' },
    { rotate: '-35', scale: '1.05', opacity: '0.1', color: '#1B4332' },
    { rotate: '45', scale: '0.95', opacity: '0.09', color: '#40916C' },
  ];
  const cfg = configs[(variant - 1) % configs.length];

  return (
    <div className={`w-full h-full ${className}`} style={{ opacity: cfg.opacity }}>
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', transform: `rotate(${cfg.rotate}deg) scale(${cfg.scale})` }}
      >
        {/* Main fern frond */}
        <path
          d="M200 380 C200 380 180 300 160 240 C140 180 100 160 80 120 C60 80 90 40 120 60 C150 80 160 120 180 160 C200 200 200 220 200 240 C200 220 200 200 220 160 C240 120 250 80 280 60 C310 40 340 80 320 120 C300 160 260 180 240 240 C220 300 200 380 200 380Z"
          fill={cfg.color}
        />
        {/* Left leaflets */}
        <path
          d="M180 200 C160 190 130 195 110 180 C90 165 95 140 115 145 C135 150 155 170 175 190Z"
          fill={cfg.color}
        />
        <path
          d="M170 240 C148 225 118 228 100 210 C82 192 90 165 110 172 C130 179 150 200 168 225Z"
          fill={cfg.color}
        />
        <path
          d="M162 280 C142 262 114 262 98 242 C82 222 92 195 112 204 C132 213 150 238 160 268Z"
          fill={cfg.color}
        />
        {/* Right leaflets */}
        <path
          d="M220 200 C240 190 270 195 290 180 C310 165 305 140 285 145 C265 150 245 170 225 190Z"
          fill={cfg.color}
        />
        <path
          d="M230 240 C252 225 282 228 300 210 C318 192 310 165 290 172 C270 179 250 200 232 225Z"
          fill={cfg.color}
        />
        <path
          d="M238 280 C258 262 286 262 302 242 C318 222 308 195 288 204 C268 213 250 238 240 268Z"
          fill={cfg.color}
        />
        {/* Small accent leaves */}
        <path
          d="M155 160 C140 148 120 150 108 138 C96 126 102 108 118 114 C134 120 148 138 158 158Z"
          fill={cfg.color}
          opacity="0.7"
        />
        <path
          d="M245 160 C260 148 280 150 292 138 C304 126 298 108 282 114 C266 120 252 138 242 158Z"
          fill={cfg.color}
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
