import type { Metadata } from "next";
import clsx from "clsx";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  outdoorCategories,
  atlTtl,
  printing,
  sportsEvents,
  festivalCoverage,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Excellent Entertainment Networks",
};

function CategoryGrid({
  data,
}: {
  data: { title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-px bg-ink-line md:grid-cols-2 lg:grid-cols-3">
      {data.map((group, i) => (
        <Reveal
          key={group.title}
          delay={i * 0.05}
          className={clsx("bg-ink p-8", i === data.length - 1 && "lg:col-span-2")}
        >
          <h3 className="font-display text-xl uppercase text-red mb-4">{group.title}</h3>
          <ul className="space-y-2 text-sm text-mute">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-red">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function TagCloud({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="font-label text-xs tracking-widest uppercase border border-ink-line px-4 py-2 hover:border-red hover:text-red transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="A 360° Service Stack"
        subtitle="Every format of outdoor, print, event, sport and digital media — sold and produced under one roof."
      />

      {/* OUTDOOR */}
      <section id="outdoor" className="scroll-mt-24 py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="01 — Outdoor Media"
            title="Brand Builders to Mobile Media"
            subtitle="Static and moving formats across every touchpoint a consumer crosses in a day."
          />
          <div className="mt-14">
            <CategoryGrid data={outdoorCategories} />
          </div>
        </div>
      </section>

      {/* PRINTING */}
      <section id="printing" className="scroll-mt-24 py-24 border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="02 — Branding & Printing"
            title="Large Format & Conventional"
            subtitle="An in-house production floor with laser cutting, CNC routing and every print process a campaign needs."
          />
          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-2">
            {printing.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05} className="bg-ink-soft p-8">
                <h3 className="font-display text-xl uppercase text-red mb-4">{group.title}</h3>
                <TagCloud items={group.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="scroll-mt-24 py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="03 — Event & Promotion"
            title="ATL, TTL & Festival Coverage"
            subtitle="From TVCs and radio to gate branding on the ground at state mahotsavs."
          />
          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-3">
            {atlTtl.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05} className="bg-ink p-8">
                <h3 className="font-display text-xl uppercase text-red mb-4">{group.title}</h3>
                <ul className="space-y-2 text-sm text-mute">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-16">
            <h3 className="font-display text-xl uppercase text-red mb-4">Festival Coverage</h3>
            <TagCloud items={festivalCoverage} />
          </Reveal>
        </div>
      </section>

      {/* SPORTS + DIGITAL */}
      <section id="digital" className="scroll-mt-24 py-24 border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="04 — Sports Branding"
              title="Stadium to Scoreboard"
              subtitle="On-ground branding for national cricket venues, from boundary fencing to player kits."
            />
            <div className="mt-8">
              <TagCloud items={sportsEvents} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Digital"
              title="Beyond the Street"
              subtitle="A complete digital arm to extend outdoor reach into search, social and mobile."
            />
            <div className="mt-8">
              <TagCloud items={atlTtl.find((g) => g.title === "Digital")?.items ?? []} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GIFTING */}
      <section id="gifting" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="05 — Corporate Gifting"
            title="Reward Programs, Sourced & Branded"
            subtitle="From premium electronics and home appliances to everyday incentive schemes, scratch cards and loyalty gifts — sourced, personalised and delivered for corporate reward programs."
          />
        </div>
      </section>
    </>
  );
}
