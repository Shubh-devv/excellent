import { mediaMix } from "@/lib/data";

const colors = [
  "#14130f",
  "#7a0f14",
  "#2b2620",
  "#9c0d13",
  "#1c1a17",
  "#3a0509",
];

export default function PinnedMediaMix() {
  return (
    <div className="relative">
      {mediaMix.map((item, i) => (
        <div
          key={item.letter}
          className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
          style={{ backgroundColor: colors[i % colors.length], zIndex: i + 1 }}
        >
          <span
            className="font-display text-[10rem] leading-none md:text-[16rem]"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.18)",
            }}
          >
            {item.letter}
          </span>
          <h3 className="font-display -mt-8 text-4xl uppercase text-white md:-mt-14 md:text-6xl">
            {item.title}
          </h3>
          <p className="mt-6 max-w-lg text-sm uppercase tracking-[0.2em] text-white/60 md:text-base">
            {item.items.join(" · ")}
          </p>
          <span className="font-label mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            {String(i + 1).padStart(2, "0")} / {String(mediaMix.length).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
