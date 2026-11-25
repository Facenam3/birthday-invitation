interface ElephantProps {
  className?: string;
}

export function Elephant({ className }: ElephantProps) {
  return (
    <svg viewBox="0 0 140 150" className={className} aria-hidden="true">
      {/* ears (drawn first so the head sits on top) */}
      <circle cx="26" cy="62" r="28" fill="#8aa3bb" />
      <circle cx="26" cy="62" r="17" fill="#e8aaa2" />
      <circle cx="114" cy="62" r="28" fill="#8aa3bb" />
      <circle cx="114" cy="62" r="17" fill="#e8aaa2" />

      {/* head */}
      <ellipse cx="70" cy="60" rx="38" ry="40" fill="#8aa3bb" />

      {/* eyes */}
      <circle cx="57" cy="52" r="4" fill="#111" />
      <circle cx="83" cy="52" r="4" fill="#111" />

      {/* tusks */}
      <path d="M52 82 Q46 98 56 104" stroke="#fbf8f1" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M88 82 Q94 98 84 104" stroke="#fbf8f1" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* trunk (grouped so it can swing on its own) */}
      <g className="origin-top animate-trunk [transform-box:fill-box]">
        <rect x="58" y="70" width="24" height="70" rx="12" fill="#8aa3bb" />
        <circle cx="66" cy="136" r="2" fill="#7f95a8" />
        <circle cx="74" cy="136" r="2" fill="#7f95a8" />
      </g>
    </svg>
  );
}