import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f3f2ee] px-6 text-black">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-3xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-black/35">
            The story continues
          </p>

          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
            Scroll-driven experiences that feel alive.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black/45 md:text-base">
            A smooth interaction between content, movement and user input. Every
            transformation is connected directly to the scroll position.
          </p>

          <div className="mt-10">
            <span className="inline-flex rounded-full border border-black/10 px-5 py-2 text-[9px] uppercase tracking-[0.3em] text-black/45">
              Built with GSAP
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
