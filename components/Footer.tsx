import Link from "next/link";
import Logo from "./Logo";
import { nav, social, presence } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <Logo tagline markSize={40} />
          <p className="mt-6 text-sm text-mute max-w-xs">
            The biggest media solution agency in UP &amp; Uttarakhand since 2002 —
            outdoor, events, printing, digital and gifting under one roof.
          </p>
        </div>

        <div>
          <div className="font-label text-xs tracking-[0.2em] text-red uppercase mb-4">
            Navigate
          </div>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-bone hover:text-red transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-label text-xs tracking-[0.2em] text-red uppercase mb-4">
            Presence
          </div>
          <ul className="space-y-2 text-sm text-mute">
            {presence.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-label text-xs tracking-[0.2em] text-red uppercase mb-4">
            Connect
          </div>
          <ul className="space-y-3 text-sm">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone hover:text-red transition-colors"
                >
                  {s.label} <span className="text-mute">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mute font-label tracking-wide">
          <span>© {new Date().getFullYear()} Excellent Entertainment Networks. All rights reserved.</span>
          <span>A 360° Solution Agency</span>
        </div>
      </div>
    </footer>
  );
}
