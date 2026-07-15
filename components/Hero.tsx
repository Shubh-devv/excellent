import { social } from "@/lib/data";

const abbrev: Record<string, string> = {
  Facebook: "FB",
  Instagram: "IG",
  Pinterest: "PIN",
  Twitter: "X",
};

function SocialBadge({ s }: { s: (typeof social)[number] }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer"
      aria-label={s.label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-label text-[10px] uppercase tracking-wide text-white/70 transition-colors hover:border-red hover:text-red sm:h-11 sm:w-11"
    >
      {abbrev[s.label] ?? s.label.slice(0, 2).toUpperCase()}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="h-[calc(100vh-1rem)] px-2 pb-2 pt-2">
      <div className="relative mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-[2rem] bg-[#14130f] text-white md:rounded-[2.5rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, white 0px, white 1px, transparent 1px, transparent 90px)",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red/10 blur-[100px]" />

        <div className="relative flex flex-1 flex-col items-center justify-center gap-4 px-6 py-4 text-center sm:gap-6">
          <h1 className="font-display uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,10vw,8rem)]">
            Excellent
          </h1>
          <p className="text-base text-white/60 sm:text-lg md:text-xl">
            A 360° Solution Agency, Since 2002
          </p>
        </div>

        <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-6 md:px-10 md:py-4">
          <div className="flex gap-2 sm:gap-3">
            <SocialBadge s={social[0]} />
            <SocialBadge s={social[1]} />
          </div>
          <div className="font-label text-[10px] uppercase tracking-[0.15em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
            Est. 2002 <span className="text-red">✦</span> UP &amp; Uttarakhand&rsquo;s Biggest Agency
          </div>
          <div className="flex gap-2 sm:gap-3">
            <SocialBadge s={social[2]} />
            <SocialBadge s={social[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
