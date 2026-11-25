interface GiraffeProps {
  className?: string;
}

export function Giraffe({ className }: GiraffeProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      {/* neck */}
      <rect x="42" y="70" width="36" height="90" rx="14" fill="#f2c14e" />
      {/* ears */}
      <ellipse cx="26" cy="44" rx="12" ry="7" fill="#e0a92f" transform="rotate(-20 26 44)" />
      <ellipse cx="94" cy="44" rx="12" ry="7" fill="#e0a92f" transform="rotate(20 94 44)" />
      {/* horns */}
      <line x1="48" y1="22" x2="46" y2="8" stroke="#a83a12" strokeWidth="4" strokeLinecap="round" />
      <line x1="72" y1="22" x2="74" y2="8" stroke="#a83a12" strokeWidth="4" strokeLinecap="round" />
      <circle cx="46" cy="7" r="5" fill="#a83a12" />
      <circle cx="74" cy="7" r="5" fill="#a83a12" />
      {/* head */}
      <ellipse cx="60" cy="48" rx="28" ry="30" fill="#f2c14e" />
      {/* snout */}
      <ellipse cx="60" cy="64" rx="17" ry="11" fill="#f8dc8f" />
      <circle cx="54" cy="64" r="2" fill="#7a4a1d" />
      <circle cx="66" cy="64" r="2" fill="#7a4a1d" />
      {/* eyes */}
      <circle cx="49" cy="46" r="4" fill="#111" />
      <circle cx="71" cy="46" r="4" fill="#111" />
      {/* spots */}
      <circle cx="52" cy="95" r="6" fill="#c9852a" />
      <circle cx="68" cy="115" r="7" fill="#c9852a" />
      <circle cx="54" cy="136" r="6" fill="#c9852a" />
    </svg>
  );
}