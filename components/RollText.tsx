export default function RollText({ text }: { text: string }) {
  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-bottom">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
      >
        {text}
      </span>
    </span>
  );
}
