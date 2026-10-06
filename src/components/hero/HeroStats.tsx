const stats = [
  {
    value: "87%",
    label: "Engagement",
  },
  {
    value: "64%",
    label: "Conversion",
  },
  {
    value: "92%",
    label: "Retention",
  },
];

export default function HeroStats() {
  return (
    <div className="hero-stats relative z-30 mt-10 flex flex-wrap gap-x-8 gap-y-6 md:mt-14 md:gap-x-14 lg:gap-x-20">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="hero-stat min-w-[90px] border-l border-white/10 pl-4 will-change-transform"
        >
          <div className="flex items-start gap-1">
            <span className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
              {stat.value}
            </span>

            <span className="mt-1 text-xs text-orange-400">+</span>
          </div>

          <div className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/35 sm:text-[9px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
