import PlanetCard from "@/components/PlanetCard";
import { planets } from "@/data/planets";

export default function PlanetsSection() {
  return (
    <section className="mt-24">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Planets
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Explore The Solar System
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </section>
  );
}
