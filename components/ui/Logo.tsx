import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="shrink-0 leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 focus-visible:ring-offset-2 rounded-md"
      aria-label="Дневник тренировок — на главную"
    >
      <svg
        width="74"
        height="59"
        viewBox="0 0 196 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="logo-badge-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#92a3fd" />
            <stop offset="100%" stopColor="#9dceff" />
          </linearGradient>
        </defs>
        <g transform="translate(76 58) scale(1.009615) translate(-76 -58)">
          <circle cx="76" cy="58" r="56" fill="#9dceff" />
          <circle cx="76" cy="58" r="54" fill="#ffffff" />
          <circle
            cx="76"
            cy="58"
            r="52"
            fill="url(#logo-badge-gradient)"
          />
          <rect x="38" y="30" width="18" height="52" rx="8" fill="#ffffff" />
          <rect x="56" y="37" width="13" height="38" rx="6" fill="#ffffff" />
          <rect x="69" y="50" width="14" height="10" rx="5" fill="#ffffff" />
          <rect x="83" y="37" width="13" height="38" rx="6" fill="#ffffff" />
          <rect x="96" y="30" width="18" height="52" rx="8" fill="#ffffff" />
        </g>
        <g transform="rotate(-6 100 110)">
          <text
            x="46"
            y="101"
            textAnchor="start"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="21"
            letterSpacing="-0.5"
            fill="#7b6f72"
          >
            ДНЕВНИК
          </text>
          <text
            x="46"
            y="127"
            textAnchor="start"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="21"
            letterSpacing="-0.5"
            fill="#7b6f72"
          >
            ТРЕНИРОВОК
          </text>
        </g>
      </svg>
    </Link>
  );
}