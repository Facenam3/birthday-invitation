import { profile } from "@/data/profile";
import { invitationContent } from "@/data/content";
import { useCountdown } from "@/hooks/useCountdown";

const COUNTDOWN_SECONDS = 3;

const EVENT_CHIPS: string[] = ["Крштевање", "Прв роденден"];

interface HeroProps {
  onOpen: () => void;
}

export function Hero({ onOpen }: HeroProps) {
  const { count, status, start } = useCountdown(COUNTDOWN_SECONDS, onOpen);
  const isBusy = status !== "idle";

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center p-4 md:p-10"
    >
      <div className="w-full max-w-xl rounded-2xl border border-white/40 bg-cream-light/70 p-6 text-center shadow-xl backdrop-blur-md md:p-10">
        <ul className="mb-4 flex flex-wrap justify-center gap-2 cursor-pointer">
          {EVENT_CHIPS.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-ink/30 bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink"
            >
              {chip}
            </li>
          ))}
        </ul>

        <h1 className="mb-3 text-4xl font-bold leading-tight text-accent md:text-6xl">
          {invitationContent.hero.title}
        </h1>

        <p className="mb-8 text-base font-semibold text-ink md:text-lg">
          {invitationContent.hero.description} {profile.name}.
        </p>

        <button
          type="button"
          onClick={start}
          disabled={isBusy}
          aria-live="polite"
          className="min-w-48 cursor-pointer rounded-xl border-2 border-ink bg-accent px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isBusy ? Math.max(count, 0) : invitationContent.hero.buttonLabel}
        </button>
      </div>
    </section>
  );
}