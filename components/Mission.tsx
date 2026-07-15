import RhythmMarquee from "./RhythmMarquee";
import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section className="border-b border-ink-line">
      <div className="py-4">
        <RhythmMarquee text="A 360° Solution Agency" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-2 items-start">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[1.02] tracking-tight">
            Twenty-three years of turning briefs into street-level results.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-mute leading-relaxed text-lg">
          <p>
            We partner with brands, corporates and government bodies across UP &amp;
            Uttarakhand to turn outdoor, print, event and digital briefs into work
            people actually see — from a single hoarding to a full state mahotsav.
          </p>
          <p>
            Every deliverable is planned, produced and installed in-house, so nothing
            gets lost between the pitch and the street.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
