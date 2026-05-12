import { Planet } from "@/data/planets";

type PlanetCardProps = {
  planet: Planet;
};

export default function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
            {planet.type}
          </p>

          <h3 className="mt-4 text-4xl font-bold">{planet.name}</h3>
        </div>

        <div className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#1d4ed8,#020617)] shadow-[0_0_40px_rgba(59,130,246,0.45)] transition group-hover:scale-110" />
      </div>

      <p className="mt-8 leading-7 text-white/60">{planet.description}</p>

      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Distance
          </p>

          <p className="mt-2 font-semibold">{planet.distanceFromSun}</p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Moons
          </p>

          <p className="mt-2 font-semibold">{planet.moons}</p>
        </div>
      </div>
    </article>
  );
}
