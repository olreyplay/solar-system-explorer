import { planets } from "@/data/planets";

type PlanetPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlanetPage({ params }: PlanetPageProps) {
  const { slug } = await params;

  const planet = planets.find((planet) => planet.slug === slug);

  if (!planet) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <h1 className="text-4xl font-bold">Planet Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          {planet.type}
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          {planet.name}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          {planet.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Distance From Sun
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              {planet.distanceFromSun}
            </h2>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Known Moons
            </p>

            <h2 className="mt-4 text-4xl font-bold">{planet.moons}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
