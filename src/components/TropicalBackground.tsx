

interface LeafProps {
  className?: string;
}

function Leaf({ className }: LeafProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path d="M10 190 C 20 90, 90 20, 190 10 C 180 110, 110 180, 10 190 Z" />
      <path
        d="M10 190 L 150 50"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export function TropicalBackground() {
  return (
    <div
      aria-hidden="true"
      className="tropical-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Decorative leaves (static) */}
      <Leaf className="absolute -left-12 -top-12 w-44 rotate-12 text-palm/60 md:w-80" />
      <Leaf className="absolute -bottom-12 -right-12 w-44 -rotate-[168deg] text-palm/60 md:w-80" />

      {/* <div className="absolute bottom-0 right-4 md:right-10">
        <Giraffe className="w-24 origin-bottom animate-sway md:w-36" />
      </div> */}
      <div id="slot-top-left" className="absolute left-4 top-4 md:left-10 md:top-10" />
      <div id="slot-bottom-right" className="absolute bottom-4 right-4 md:bottom-10 md:right-10" />
    </div>
  );
}