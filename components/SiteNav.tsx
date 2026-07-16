"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import clsx from "clsx";
import Logo from "./Logo";
import RollText from "./RollText";
import { nav, phone } from "@/lib/data";

const panelVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 340,
      damping: 26,
      when: "beforeChildren" as const,
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: -16,
    transition: { duration: 0.2, ease: [0.65, 0, 0.35, 1] as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px]">
      <span
        className={clsx(
          "h-[2px] w-5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]",
          open && "translate-y-[3.5px] rotate-45"
        )}
      />
      <span
        className={clsx(
          "h-[2px] w-5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]",
          open && "-translate-y-[3.5px] -rotate-45"
        )}
      />
    </div>
  );
}

export default function SiteNav({ embedded = false }: { embedded?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const row = (
    <div
      className={clsx(
        "flex items-center justify-between gap-2",
        embedded
          ? "px-2 py-2"
          : "rounded-full bg-bone py-2 pl-5 pr-2 shadow-lg shadow-black/15 md:pl-6"
      )}
    >
      <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
        <Logo markSize={30} className="[&_.font-display]:text-lg" />
      </Link>

      <nav className="hidden md:flex items-center gap-3 font-label text-xs tracking-[0.1em] uppercase">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group rounded-full border px-5 py-2.5 transition-colors",
                active
                  ? "border-white bg-white/10 text-white"
                  : "border-white/15 text-white/70 hover:border-white/40 hover:bg-white/10 hover:text-white"
              )}
            >
              <RollText text={item.label} accent={!active} />
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={phone.href}
          aria-label={`Call us at ${phone.display}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red"
        >
          <Phone size={17} />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
            open ? "bg-red" : "bg-white/10 hover:bg-white/20"
          )}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {embedded ? (
        <div className="relative z-20">{row}</div>
      ) : (
        <header className="sticky top-0 z-50 px-3 md:px-6">
          <div className="mx-auto max-w-7xl">{row}</div>
        </header>
      )}

      <AnimatePresence>
        {open && [
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/50"
          />,
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-4 top-20 z-40 mx-auto flex max-h-[75vh] max-w-2xl origin-top-right flex-col overflow-hidden rounded-[2rem] bg-white text-bone shadow-2xl sm:inset-x-6 md:inset-x-auto md:right-6 md:top-24 md:w-[420px]"
          >
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-start justify-between gap-4 border-b border-black/10 py-4 font-display text-4xl uppercase leading-none transition-colors last:border-b-0",
                        active ? "text-red" : "text-bone hover:text-red"
                      )}
                    >
                      {item.label}
                      <span className="font-label text-sm text-bone/40">
                        ({String(i + 1).padStart(2, "0")})
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={itemVariants} className="border-t border-black/10 p-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-red px-6 py-4 font-label text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-red-light"
              >
                Get In Touch <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>,
        ]}
      </AnimatePresence>
    </>
  );
}
