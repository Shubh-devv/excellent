"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import clsx from "clsx";
import Logo from "./Logo";
import RollText from "./RollText";
import { nav, social, phone } from "@/lib/data";

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

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const row = (
    <div className="flex items-center justify-between gap-2 rounded-full bg-bone py-2 pl-5 pr-2 shadow-lg shadow-black/15 md:pl-6">
      <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
        <Logo markSize={30} className="[&_.font-display]:text-lg" />
      </Link>

      <nav className="hidden md:flex items-center gap-1 font-label text-xs tracking-[0.1em] uppercase">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group rounded-full px-5 py-2.5 transition-colors",
                active
                  ? "bg-red text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
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
      <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div className="mx-auto max-w-7xl">{row}</div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-60 flex flex-col bg-bone text-white"
          >
            <div className="flex items-center justify-between px-3 pt-3 md:px-6 md:pt-4">
              <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
                <Logo markSize={30} className="[&_.font-display]:text-lg" />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red transition-colors"
              >
                <HamburgerIcon open />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 px-8 md:px-20">
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35, ease: "easeOut" }}
                    className="flex items-center gap-4 border-b border-white/10 py-3"
                  >
                    <span className="font-label text-xs text-white/40">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex flex-1 items-center font-display text-3xl uppercase leading-tight transition-colors sm:text-4xl md:text-5xl",
                        active ? "text-red" : "text-white hover:text-red"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-8 py-6 font-label text-xs uppercase tracking-[0.15em] text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-20">
              <a href={phone.href} className="hover:text-red transition-colors">
                {phone.display}
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-red transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
