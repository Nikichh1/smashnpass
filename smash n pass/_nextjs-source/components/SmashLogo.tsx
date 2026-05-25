type Props = { className?: string };

export default function SmashLogo({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 220 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Smash N' Pass"
    >
      <g>
        {/* burger icon */}
        <g transform="translate(2, 8)">
          {/* top bun */}
          <path
            d="M4 18 Q4 4 22 4 Q40 4 40 18 Z"
            fill="#D99B19"
          />
          <ellipse cx="14" cy="10" rx="1.4" ry="1" fill="#FBF6E8" />
          <ellipse cx="22" cy="8" rx="1.4" ry="1" fill="#FBF6E8" />
          <ellipse cx="30" cy="10" rx="1.4" ry="1" fill="#FBF6E8" />
          {/* lettuce */}
          <path d="M3 19 Q8 16 13 19 Q18 16 23 19 Q28 16 33 19 Q38 16 41 19 L41 22 L3 22 Z" fill="#7CA040" />
          {/* cheese */}
          <path d="M2 22 L42 22 L40 26 L4 26 Z" fill="#F5B82E" />
          {/* patty */}
          <rect x="3" y="26" width="38" height="6" rx="2" fill="#3A1F12" />
          {/* bottom bun */}
          <path d="M4 32 L40 32 Q40 44 22 44 Q4 44 4 32 Z" fill="#A8740D" />
        </g>
        {/* wordmark */}
        <text
          x="52"
          y="32"
          fontFamily="Oswald, Impact, sans-serif" fontWeight="700"
          fontSize="26"
          fill="#FBF6E8"
          letterSpacing="-0.5"
        >
          SMASH
        </text>
        <text
          x="142"
          y="32"
          fontFamily="Oswald, Impact, sans-serif" fontWeight="700"
          fontSize="26"
          fill="#F5B82E"
          letterSpacing="-0.5"
        >
          N&apos;
        </text>
        <text
          x="170"
          y="32"
          fontFamily="Oswald, Impact, sans-serif" fontWeight="700"
          fontSize="26"
          fill="#FBF6E8"
          letterSpacing="-0.5"
        >
          PASS
        </text>
        {/* underline accent */}
        <rect x="52" y="42" width="158" height="2.5" fill="#E63946" />
        <text
          x="52"
          y="56"
          fontFamily="JetBrains Mono, ui-monospace, monospace"
          fontSize="7"
          fill="#8C8478"
          letterSpacing="2"
        >
          BG · SMASH BURGER · SINCE 2023
        </text>
      </g>
    </svg>
  );
}
