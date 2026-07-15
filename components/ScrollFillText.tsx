"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import clsx from "clsx";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mr-[0.28em] inline-block">
      <span aria-hidden className="text-mute/25">
        {children}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0 text-bone">
        {children}
      </motion.span>
    </span>
  );
}

export default function ScrollFillText({
  text,
  className,
  height = "180vh",
  eyebrow,
  children,
}: {
  text: string;
  className?: string;
  height?: string;
  eyebrow?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const words = text.split(" ");

  return (
    <div ref={ref} className="relative" style={{ height }}>
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {eyebrow}
        <p className={clsx("max-w-4xl", className)}>
          {words.map((w, i) => (
            <Word
              key={`${w}-${i}`}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {w}
            </Word>
          ))}
        </p>
        {children}
      </div>
    </div>
  );
}
