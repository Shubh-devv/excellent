import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { stats, presence, setup, cityMedia } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Excellent Entertainment Networks",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Experience. Your Vision."
        subtitle="Excellent Entertainment Networks is the biggest media solution agency in UP & Uttarakhand, established in 2002."
      />

      {/* NARRATIVE */}
      <section className="py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who We Are" title="One Step. Every Format." />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-mute leading-relaxed">
            <p>
              Excellent is a one-step solution for all advertising and marketing needs —
              outdoor advertising, marketing activities, public relations, promotional
              events, corporate events and complete branding solutions. We help brands
              choose the right mix of media for the best advertising outcome, blending
              creativity with a practical, on-ground approach.
            </p>
            <p>
              We don&rsquo;t just enjoy what we do — we love it. Every event is treated
              with the same high standards, creativity and experience, backed by a team
              whose dedication brings peace of mind that you&rsquo;re in the safest pair
              of hands. A thorough, methodical and fun approach, paired with your big
              ideas, has meant one thing time and again: very successful outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-ink-line py-12 px-4 text-center [&:not(:last-child)]:border-r"
            >
              <div className="font-display text-4xl md:text-6xl text-red">{s.value}</div>
              <div className="font-label text-xs tracking-[0.15em] uppercase text-mute mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRESENCE / CITY MEDIA */}
      <section className="py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Where We Work"
            title="A Footprint Across the Heartland"
            subtitle="From the NCR arterial roads to Kanpur's traffic junctions and the Sangam corridor in Allahabad."
          />

          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-2">
            {cityMedia.map((c, i) => (
              <Reveal key={c.city} delay={i * 0.06} className="bg-ink p-8">
                <h3 className="font-display text-xl uppercase mb-2 text-red">{c.city}</h3>
                <p className="text-sm text-mute leading-relaxed">{c.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            {presence.map((city) => (
              <span
                key={city}
                className="font-label text-xs tracking-[0.15em] uppercase border border-ink-line px-4 py-2"
              >
                {city}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SETUP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Our Setup"
              title="Production, In-House"
              subtitle="Our own fabrication floor means faster turnarounds and tighter quality control on every campaign we run."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {setup.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-ink-line pb-4 text-bone"
                >
                  <span className="h-2 w-2 rounded-full bg-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
