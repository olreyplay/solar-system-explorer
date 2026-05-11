export default function HeroSection() {
  return (
    <section className="pt-24">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            The Universe
          </p>

          <h2 className="mt-6 max-w-5xl text-6xl font-bold leading-none tracking-tight md:text-8xl">
            Explore The Planets Beyond Earth.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Discover planets, moons, orbital systems, and fascinating facts
            about our solar system.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold transition hover:bg-blue-400">
              Start Exploring
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/10">
              View Statistics
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-500/20" />

          <div className="absolute h-[350px] w-[350px] rounded-full border border-blue-500/10" />

          <div className="h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#1d4ed8,#020617)] shadow-[0_0_120px_rgba(59,130,246,0.45)]" />
        </div>
      </div>
    </section>
  );
}
