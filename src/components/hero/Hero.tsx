"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroStats from "./HeroStats";
import HeroVisual from "./HeroVisual";

gsap.registerPlugin(ScrollTrigger);

const headline = "WELCOME ITZFIZZ";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;

    if (!hero || !visual) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          [
            ".hero-eyebrow",
            ".hero-letter",
            ".hero-description",
            ".hero-stat",
            visual,
          ],
          {
            opacity: 1,
            clearProps: "transform",
          },
        );

        return;
      }

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      intro.from(
        ".hero-letter",
        {
          y: 70,
          opacity: 0,
          rotateX: -60,
          transformOrigin: "center bottom",
          duration: 0.9,
          stagger: 0.045,
        },
        "-=0.2",
      );

      intro.from(
        ".hero-description",
        {
          y: 25,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.5",
      );

      intro.from(
        ".hero-stat",
        {
          y: 30,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
        },
        "-=0.4",
      );

      intro.from(
        visual,
        {
          x: "18vw",
          y: "12vh",
          scale: 0.72,
          rotate: -12,
          opacity: 0,
          duration: 1.4,
          ease: "power4.out",
        },
        "-=0.8",
      );

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTimeline.to(
        visual,
        {
          x: "18vw",
          y: "-6vh",
          scale: 1.05,
          rotate: 4,
          ease: "none",
          duration: 0.45,
        },
        0,
      );

      scrollTimeline.to(
        visual,
        {
          x: "38vw",
          y: "-20vh",
          scale: 0.88,
          rotate: 11,
          ease: "none",
          duration: 0.35,
        },
        0.45,
      );

      scrollTimeline.to(
        visual,
        {
          x: "58vw",
          y: "-38vh",
          scale: 0.62,
          rotate: 20,
          opacity: 0.75,
          ease: "none",
          duration: 0.2,
        },
        0.8,
      );

      gsap.to(".hero-content", {
        y: "-18vh",
        opacity: 0.1,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-stats", {
        y: "8vh",
        opacity: 0.2,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-glow-one", {
        x: "-15vw",
        y: "10vh",
        scale: 1.3,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".hero-glow-two", {
        x: "15vw",
        y: "-15vh",
        scale: 1.4,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".hero-grid", {
        y: "12vh",
        scale: 1.08,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".scroll-indicator", {
        opacity: 0,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      });

      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => {
        window.clearTimeout(refreshTimer);
      };
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow-one absolute left-[5%] top-[12%] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] md:h-[420px] md:w-[420px]" />

        <div className="hero-glow-two absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px] md:h-[500px] md:w-[500px]" />

        <div className="hero-grid absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 py-7 sm:px-8 md:px-12 lg:px-20">
        <header className="relative z-40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
            </div>

            <span className="text-xs font-semibold tracking-[0.02em] text-white/80">
              ITZFIZZ
            </span>
          </div>

          <div className="hidden text-[10px] uppercase tracking-[0.35em] text-white/30 sm:block">
            Scroll Experience
          </div>
        </header>

        <div className="relative flex flex-1 flex-col justify-center">
          <div className="hero-content relative z-30 -mt-10 w-full md:-mt-16">
            <p className="hero-eyebrow mb-5 text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs">
              Digital Experience Studio
            </p>

            <h1
              aria-label={headline}
              className="w-full whitespace-nowrap text-[clamp(2.8rem,6.2vw,7.5rem)] font-semibold leading-none tracking-[-0.065em] [perspective:800px]"
            >
              {headline.split("").map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="hero-letter inline-block whitespace-pre"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            <p className="hero-description mt-7 max-w-xl text-xs leading-6 text-white/45 sm:text-sm md:mt-8 md:text-base">
              Scroll-driven motion designed to transform a simple hero into an
              immersive automotive experience.
            </p>
          </div>

          <HeroStats />

          <HeroVisual visualRef={visualRef} />
        </div>

        <div className="scroll-indicator absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.45em] text-white/35">
            Scroll
          </span>

          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <div className="absolute left-0 top-0 h-1/2 w-full animate-pulse bg-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
