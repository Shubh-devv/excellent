"use client";

import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { clients } from "@/lib/data";

const SLOTS = 8;

function FlipCard({ startIndex, delay }: { startIndex: number; delay: number }) {
  const [index, setIndex] = useState(startIndex);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(async () => {
        await animate(scope.current, { rotateX: 90 }, { duration: 0.25, ease: "easeIn" });
        setIndex((i) => (i + SLOTS) % clients.length);
        await animate(scope.current, { rotateX: 0 }, { duration: 0.25, ease: "easeOut" });
      }, 2800);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [delay, animate, scope]);

  return (
    <div style={{ perspective: 800 }} className="h-24 md:h-28">
      <div
        ref={scope}
        style={{ transformStyle: "preserve-3d" }}
        className="flex h-full w-full items-center justify-center border border-ink-line bg-ink-soft px-3 text-center"
      >
        <span className="font-display text-base uppercase leading-tight text-bone md:text-lg">
          {clients[index % clients.length]}
        </span>
      </div>
    </div>
  );
}

export default function ClientFlipGrid() {
  const offsets = Array.from({ length: SLOTS }, (_, i) =>
    Math.floor((i * clients.length) / SLOTS)
  );

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-ink-line sm:grid-cols-4">
      {offsets.map((start, i) => (
        <FlipCard key={i} startIndex={start} delay={i * 350} />
      ))}
    </div>
  );
}
