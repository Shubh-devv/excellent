"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { selectedWork } from "@/lib/data";

const tones: Record<string, string> = {
  deep: "linear-gradient(135deg, #3a0509 0%, #150304 100%)",
  charcoal: "linear-gradient(135deg, #23211c 0%, #0d0c0a 100%)",
  warm: "linear-gradient(135deg, #e5171f 0%, #6e0c11 100%)",
};

export default function SelectedWork() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {selectedWork.map((w, i) => (
        <Reveal key={w.title} delay={i * 0.06}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-sm h-80 p-7 flex flex-col justify-between text-white cursor-default"
            style={{ background: tones[w.tone] }}
          >
            <div className="flex items-start justify-between">
              <span className="font-label text-[10px] tracking-[0.25em] uppercase border border-white/30 px-3 py-1">
                {w.category}
              </span>
              <motion.span
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                whileHover={{}}
                className="opacity-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 transition-all duration-300 rotate-[-30deg] scale-[0.7]"
              >
                <ArrowUpRight size={22} />
              </motion.span>
            </div>

            <div>
              <h3 className="font-display text-2xl uppercase leading-[1.05] mb-3">
                {w.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                {w.blurb}
              </p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
