"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
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
          open && "translate-y-[3.5px]"
        )}
      />
      <span
        className={clsx(
          "h-[2px] w-5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]",
          open && "-translate-y-[3.5px]"
        )}
      />
    </div>
  );
}

export default function SiteNav({ embedded = false }: { embedded?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const row = embedded ? (
    <div className="flex items-center justify-between gap-2 px-2 py-2">
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
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-red hover:bg-red/10 hover:text-red"
        >
          <Phone size={17} />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            open ? "border-red bg-red" : "border-white/15 hover:bg-white/10"
          )}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
    </div>
  ) : (
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
      {embedded ? (
        <div className="relative z-50">{row}</div>
      ) : (
        <header className="relative z-50 px-3 pt-3 md:px-6 md:pt-4">
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
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
          />,
          <motion.div
            key="panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-x-0 top-0 z-30 flex h-[50vh] flex-col overflow-y-auto rounded-b-[2rem] bg-bone text-white shadow-2xl shadow-black/40"
          >
            <div className="flex flex-1 flex-col justify-center gap-1 px-8 pt-24 md:px-16 md:pt-28">
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35, ease: "easeOut" }}
                    className="flex items-center gap-4 border-b border-white/10 py-2.5"
                  >
                    <span className="font-label text-xs text-white/40">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "group flex flex-1 items-center gap-3 font-display text-2xl uppercase leading-tight transition-colors sm:text-3xl md:text-4xl",
                        active ? "text-red" : "text-white hover:text-red"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight
                        size={22}
                        className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 px-8 py-4 font-label text-[11px] uppercase tracking-[0.15em] text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-16">
              <a href={phone.href} className="hover:text-red transition-colors">
                {phone.display}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
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
          </motion.div>,
        ]}
      </AnimatePresence>
    </>
  );
}
