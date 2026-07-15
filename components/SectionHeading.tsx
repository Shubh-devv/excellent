import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const eyebrowRow = Array.from({ length: 4 }, () => eyebrow);

  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className="mb-3 overflow-hidden">
        <div className="flex w-max animate-marquee-fast gap-3 font-label text-xs tracking-[0.3em] text-red uppercase">
          {[...eyebrowRow, ...eyebrowRow].map((t, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap">
              {t}
              <span className="text-mute">—</span>
            </span>
          ))}
        </div>
      </div>
      <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-mute text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
