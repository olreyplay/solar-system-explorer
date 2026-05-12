import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PlanetsSection from "@/components/PlanetsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Space Explorer
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight">
              Solar System Explorer
            </h1>
          </div>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/10">
            Explore Space
          </button>
        </header>

        <HeroSection />
        <StatsSection />
        <PlanetsSection />
      </div>
    </main>
  );
}
