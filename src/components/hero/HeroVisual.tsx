import Image from "next/image";
import type { RefObject } from "react";

interface HeroVisualProps {
  visualRef: RefObject<HTMLDivElement | null>;
}

export default function HeroVisual({ visualRef }: HeroVisualProps) {
  return (
    <div
      ref={visualRef}
      className="pointer-events-none absolute bottom-[-2%] right-[-22%] z-20 w-[min(105vw,900px)] will-change-transform sm:right-[-18%] sm:w-[min(90vw,900px)] md:right-[-12%] md:w-[min(70vw,900px)] lg:right-[-6%]"
    >
      <div className="absolute left-1/2 top-1/2 h-[45%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[90px] md:blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

      <div className="absolute left-1/2 top-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]" />

      <div className="relative">
        <Image
          src="/images/mclaren-top-view.png"
          alt="Orange sports car"
          width={2047}
          height={977}
          priority
          draggable={false}
          className="relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.55)]"
        />
      </div>

      <div className="absolute right-[14%] top-[24%] z-20 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_25px_rgba(251,146,60,0.9)]" />

      <div className="absolute bottom-[22%] left-[16%] z-20 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
    </div>
  );
}
