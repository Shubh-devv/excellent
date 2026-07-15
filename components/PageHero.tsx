export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-mute) 1px, transparent 1px), linear-gradient(90deg, var(--color-mute) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="font-label text-xs tracking-[0.3em] text-red uppercase mb-4">
          {eyebrow}
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-mute text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
