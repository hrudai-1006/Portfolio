"use client";

import Auralis from "@/components/ui/auralis";
import Hero from "@/components/hero";

// Headline line -> project mapping shown below the fold.
const PROJECTS = [
  {
    name: "Hermes / CLAW",
    line: "Agents that negotiate.",
    href: "#work", // TODO: link the Hermes/CLAW write-up or repo
  },
  {
    name: "TRAFFIC-EYE",
    line: "Cameras that notice.",
    href: "#work", // TODO: link the TRAFFIC-EYE write-up or repo
  },
  {
    name: "Aegis",
    line: "Systems that recover when they break.",
    href: "#work", // TODO: link the Aegis write-up or repo
  },
];

export default function AuralisDemo() {
  return (
    <div className="relative w-full">
      <div className="relative h-dvh min-h-svh w-full overflow-hidden bg-[#010103]">
        <Auralis height="100%" className="absolute inset-0 h-full" />
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* Target for the hero's "See the work" button. */}
      <section id="work" className="relative w-full bg-[#010103] px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
            Selected work
          </p>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="group flex flex-col gap-1 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-display text-2xl text-white sm:text-3xl">
                  {p.name}
                </span>
                <span className="font-mono text-xs text-white/50 transition-colors group-hover:text-white/80">
                  {p.line}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
