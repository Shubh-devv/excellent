"use client";

import { useRef, useState } from "react";
import clsx from "clsx";

export default function RhythmMarquee({
  text,
  speed = "slow",
  outline = true,
  light = false,
}: {
  text: string;
  speed?: "slow" | "fast";
  outline?: boolean;
  light?: boolean;
}) {
  const row = Array.from({ length: 6 }, () => text);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const rowClasses = clsx(
    "flex w-max gap-8",
    speed === "slow" ? "animate-marquee-slow" : "animate-marquee-fast"
  );

  const content = (spotlightFill: boolean) =>
    [...row, ...row].map((t, i) => (
      <span
        key={i}
        className={clsx(
          "font-display uppercase text-6xl md:text-8xl leading-none flex items-center gap-8",
          spotlightFill
            ? light
              ? "text-white"
              : "text-bone"
            : outline
              ? light
                ? "text-outline-light"
                : "text-outline"
              : light
                ? "text-white"
                : "text-bone"
        )}
      >
        {t}
        <span className="text-red text-4xl md:text-5xl">✦</span>
      </span>
    ));

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
      className="relative overflow-hidden whitespace-nowrap"
    >
      <div className={rowClasses}>{content(false)}</div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex transition-opacity duration-300"
        style={{
          opacity: pos ? 1 : 0,
          WebkitMaskImage: pos
            ? `radial-gradient(140px circle at ${pos.x}px ${pos.y}px, black 0%, black 30%, transparent 75%)`
            : undefined,
          maskImage: pos
            ? `radial-gradient(140px circle at ${pos.x}px ${pos.y}px, black 0%, black 30%, transparent 75%)`
            : undefined,
        }}
      >
        <div className={clsx(rowClasses, "drop-shadow-[0_0_24px_rgba(229,23,31,0.6)]")}>
          {content(true)}
        </div>
      </div>
    </div>
  );
}
