import { motivationalQuotes } from "@/lib/constants";

export default function Marquee() {
  const items = [...motivationalQuotes, ...motivationalQuotes];

  return (
    <div className="bg-rhino-orange py-4 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items].map((quote, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-2xl tracking-[0.25em] text-white mx-8 flex items-center gap-8"
          >
            {quote}
            <span className="text-white/40">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
