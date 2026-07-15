import type { Metadata } from "next";
import clsx from "clsx";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ClientMarquee from "@/components/ClientMarquee";
import {
  govtEvents,
  corporateEvents,
  reachCampaign,
  transitBranding,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Work | Excellent Entertainment Networks",
};

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Campaigns That Moved"
        subtitle="A selection of the government mahotsavs, corporate launches and reach campaigns we've produced end to end."
      />

      {/* GOVT EVENTS */}
      <section className="py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Government Events" title="State Mahotsavs" />
          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-2">
            {govtEvents.map((e, i) => (
              <Reveal
                key={e.title}
                delay={i * 0.06}
                className={clsx("bg-ink p-8", i === govtEvents.length - 1 && "md:col-span-2")}
              >
                <div className="font-label text-xs text-red mb-3">0{i + 1}</div>
                <h3 className="font-display text-2xl uppercase mb-4">{e.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {e.artists.map((a) => (
                    <span
                      key={a}
                      className="font-label text-[11px] tracking-wide uppercase border border-ink-line px-3 py-1 text-mute"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE EVENTS */}
      <section className="py-24 border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Corporate Events" title="Launches, Galas & Fan Activations" />
          <div className="mt-14 space-y-px bg-ink-line">
            {corporateEvents.map((e, i) => (
              <Reveal
                key={e.client}
                delay={i * 0.05}
                className="bg-ink-soft p-8 grid md:grid-cols-[1fr_2fr] gap-4 md:items-center"
              >
                <h3 className="font-display text-2xl uppercase text-red">{e.client}</h3>
                <div>
                  <div className="text-bone">{e.occasion}</div>
                  <div className="text-sm text-mute mt-1">{e.venue}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REACH CAMPAIGN */}
      <section className="py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeading eyebrow="Reach Campaign" title={reachCampaign.brand} />
            <p className="mt-6 text-mute leading-relaxed">{reachCampaign.desc}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Transit Branding" title="On Every Route" />
            <ul className="mt-6 space-y-3">
              {transitBranding.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-ink-line pb-3 text-bone">
                  <span className="h-2 w-2 rounded-full bg-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 mb-8">
          <SectionHeading eyebrow="Trusted By" title="Brands We've Worked With" />
        </div>
        <ClientMarquee />
      </section>
    </>
  );
}
