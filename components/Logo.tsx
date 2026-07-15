import clsx from "clsx";

function Mark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="var(--color-red)"
        strokeWidth="7"
        strokeDasharray="205 45"
        strokeLinecap="round"
        transform="rotate(-45 50 50)"
      />
      <circle cx="50" cy="50" r="10" fill="var(--color-red)" />
    </svg>
  );
}

export default function Logo({
  className,
  tagline = false,
  markSize = 40,
}: {
  className?: string;
  tagline?: boolean;
  markSize?: number;
}) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <Mark size={markSize} />
      <div className="leading-none">
        <div className="font-display tracking-tight text-2xl leading-none">
          <span className="text-red">EXCELLENT</span>
        </div>
        <div className="font-label text-[10px] tracking-[0.3em] text-mute mt-0.5">
          ENTERTAINMENT NETWORKS
        </div>
        {tagline && (
          <div className="font-label text-[10px] tracking-[0.2em] text-red mt-1">
            A 360° SOLUTION AGENCY
          </div>
        )}
      </div>
    </div>
  );
}
