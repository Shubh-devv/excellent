import clsx from "clsx";

export default function RhythmMarquee({
  text,
  speed = "slow",
  outline = true,
}: {
  text: string;
  speed?: "slow" | "fast";
  outline?: boolean;
}) {
  const row = Array.from({ length: 6 }, () => text);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={clsx(
          "flex w-max gap-8",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee-fast"
        )}
      >
        {[...row, ...row].map((t, i) => (
          <span
            key={i}
            className={clsx(
              "font-display uppercase text-6xl md:text-8xl leading-none flex items-center gap-8",
              outline ? "text-outline" : "text-bone"
            )}
          >
            {t}
            <span className="text-red text-4xl md:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
