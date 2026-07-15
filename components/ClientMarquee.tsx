import { clients } from "@/lib/data";

export default function ClientMarquee() {
  const row = [...clients, ...clients];

  return (
    <div className="overflow-hidden border-y border-ink-line bg-ink-soft py-6">
      <div className="flex w-max animate-marquee-slow gap-12">
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="font-display text-2xl md:text-3xl uppercase text-mute/70 whitespace-nowrap hover:text-red transition-colors"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
