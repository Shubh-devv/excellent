import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/Hero";
import ClientFlipGrid from "@/components/ClientFlipGrid";
import Mission from "@/components/Mission";
import SelectedWork from "@/components/SelectedWork";
import PinnedMediaMix from "@/components/PinnedMediaMix";
import CtaBrand from "@/components/CtaBrand";
import { stats, serviceTags, pillars, presence } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* SERVICE TAGS TICKER */}
      <div className="overflow-hidden border-b border-ink-line bg-ink-soft py-4">
        <div className="flex w-max animate-marquee gap-8">
          {[...serviceTags, ...serviceTags].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="font-label text-xs tracking-[0.2em] uppercase text-bone whitespace-nowrap flex items-center gap-8"
            >
              {tag}
              <span className="text-red">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <section className="py-16 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 mb-10">
          <SectionHeading eyebrow="Trusted By" title="100+ Brands Across India" align="center" />
        </div>
        <div className="px-6">
          <ClientFlipGrid />
        </div>
      </section>

      {/* MISSION / RHYTHM SECTION */}
      <Mission />

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

      {/* PILLARS */}
      <section className="py-24 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Five Pillars, One Agency"
            subtitle="Everything a brand needs to go from concept to street to stage — under a single roof."
          />
          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className={clsx(
                  "bg-ink p-8 group hover:bg-ink-soft transition-colors",
                  i === pillars.length - 1 && "lg:col-span-2"
                )}
              >
                <div className="font-label text-xs text-red mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl uppercase mb-3 group-hover:text-red transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed">{p.desc}</p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-1 font-label text-xs tracking-[0.15em] uppercase text-bone group-hover:text-red transition-colors"
                >
                  Explore <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-24 border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title="Campaigns That Moved"
              subtitle="Government mahotsavs, corporate launches and reach campaigns produced end to end."
            />
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-label text-xs tracking-[0.15em] uppercase text-red hover:text-red-light shrink-0"
            >
              View All Work <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-14">
            <SelectedWork />
          </div>
        </div>
      </section>

      {/* MEDIA MIX — pinned scrollytelling */}
      <section className="border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 py-24 pb-0">
          <SectionHeading
            eyebrow="The Media Mix"
            title="Every Format, One Roof"
            subtitle="From a single hoarding to a full metro station takeover — keep scrolling."
          />
        </div>
        <PinnedMediaMix />
      </section>

      {/* PRESENCE */}
      <section className="py-20 border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <SectionHeading eyebrow="Where We Work" title="Live Across the Heartland" />
          <div className="flex flex-wrap gap-3">
            {presence.map((city) => (
              <span
                key={city}
                className="font-label text-xs tracking-[0.15em] uppercase border border-ink-line px-4 py-2 hover:border-red hover:text-red transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBrand />
    </>
  );
}
