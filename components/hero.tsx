"use client";

import { useEffect, useState } from "react";
import { ArrowDown, FileText, GitBranch, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: point these at your real profiles.
const LINKS = {
  github: "https://github.com/TODO",
  resume: "/resume.pdf", // TODO: drop your resume.pdf in public/
  email: "mailto:TODO",
};

const HEADLINE_LINES = [
  "Agents that negotiate.",
  "Cameras that notice.",
  "Systems that recover when they break.",
];

// Line -> project mapping: Hermes/CLAW, TRAFFIC-EYE, Aegis.
const STATUS_LINES = [
  "Currently building → PERCEPTRA, an RL agent that learns where to look",
  "Currently building → Aegis, four agents with planned failures",
  "Currently building → RL for biopsy site selection",
];

const WORD_STAGGER_MS = 60;
const WORD_BASE_DELAY_MS = 250;
// 12 headline words * 60ms stagger + 700ms duration, then +400ms beat.
const SUBLINE_DELAY_MS = 2050;
const STATUS_DELAY_MS = 2450;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_LINES.length);
    }, 3500);
    return () => clearInterval(id);
  }, [reduced]);

  let wordIndex = 0;

  return (
    <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
      {/* Eyebrow — fades in first */}
      <p
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.28em] text-white/60 sm:text-xs",
          !reduced && "hero-fade",
        )}
        style={reduced ? undefined : { animationDelay: "100ms" }}
      >
        Hrudai · Hyderabad, India
      </p>

      {/* Headline — big serif, word-by-word blur/y/opacity reveal */}
      <h1
        aria-label="Agents that negotiate. Cameras that notice. Systems that recover when they break."
        className="font-display mt-6 text-balance text-[clamp(2.4rem,7vw,4.75rem)] font-medium leading-[1.04] tracking-tight text-white"
      >
        {HEADLINE_LINES.map((line) => (
          <span key={line} aria-hidden="true" className="block">
            {line.split(" ").map((word, i, arr) => {
              const delay =
                WORD_BASE_DELAY_MS + wordIndex++ * WORD_STAGGER_MS;
              return (
                <span key={`${word}-${i}`} className="inline-block">
                  <span
                    className={cn(!reduced && "hero-word")}
                    style={reduced ? undefined : { animationDelay: `${delay}ms` }}
                  >
                    {word}
                  </span>
                  {i < arr.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </span>
        ))}
      </h1>

      {/* Subline — fades in ~400ms after the headline */}
      <p
        className={cn(
          "mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base",
          !reduced && "hero-fade",
        )}
        style={reduced ? undefined : { animationDelay: `${SUBLINE_DELAY_MS}ms` }}
      >
        I’m Hrudai, an AI/ML student graduating in 2027. I run ChaosVerse,
        where I build multi-agent systems and computer vision pipelines, then
        take them to hackathons to see what breaks.
      </p>

      {/* Status line — crossfades every ~3.5s */}
      <div
        className={cn(
          "mt-6 flex min-h-[2.75rem] items-center justify-center sm:min-h-[2rem]",
          !reduced && "hero-fade",
        )}
        style={reduced ? undefined : { animationDelay: `${STATUS_DELAY_MS}ms` }}
      >
        <p
          key={reduced ? "static" : statusIndex}
          aria-live="polite"
          className={cn(
            "font-mono text-[11px] leading-relaxed text-white/55 sm:text-xs",
            !reduced && "hero-status-swap",
          )}
        >
          {STATUS_LINES[reduced ? 0 : statusIndex]}
        </p>
      </div>

      {/* Buttons */}
      <div
        className={cn(
          "pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3",
          !reduced && "hero-fade",
        )}
        style={reduced ? undefined : { animationDelay: `${STATUS_DELAY_MS}ms` }}
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/85"
        >
          See the work
          <ArrowDown
            className="size-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (TODO: add your profile URL)"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/40 hover:text-white"
        >
          <GitBranch className="size-4" aria-hidden="true" />
          GitHub
        </a>
        <a
          href={LINKS.resume}
          aria-label="Resume (TODO: add resume.pdf to public/)"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/40 hover:text-white"
        >
          <FileText className="size-4" aria-hidden="true" />
          Resume
        </a>
        <a
          href={LINKS.email}
          aria-label="Email (TODO: add your email address)"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/40 hover:text-white"
        >
          <Mail className="size-4" aria-hidden="true" />
          Email
        </a>
      </div>
    </div>
  );
}
