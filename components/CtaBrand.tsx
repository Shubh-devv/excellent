"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RhythmMarquee from "./RhythmMarquee";
import ScrollFillText from "./ScrollFillText";

export default function CtaBrand() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="border-y border-ink-line py-6">
        <RhythmMarquee text="Let's Build Your Brand" speed="fast" />
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] animate-spin-slow"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="var(--color-red)"
            strokeWidth="1.5"
            strokeDasharray="230 50"
            fill="none"
          />
        </svg>

        <ScrollFillText
          text="Ready to move your brand?"
          height="150vh"
          className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95]"
          eyebrow={
            <div className="font-label text-xs tracking-[0.3em] text-red uppercase mb-4">
              Ready When You Are
            </div>
          }
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red text-white px-8 py-4 font-label text-sm tracking-[0.15em] uppercase hover:bg-red-light transition-colors"
            >
              Get In Touch <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </ScrollFillText>
      </div>
    </section>
  );
}
