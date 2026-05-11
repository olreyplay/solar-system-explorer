import StatCard from "@/components/StatCard";

export default function StatsSection() {
  return (
    <section className="mt-24 grid gap-6 md:grid-cols-3">
      <StatCard label="Planets" value="8" />

      <StatCard label="Known Moons" value="290+" />

      <StatCard label="Solar System Age" value="4.6B Years" />
    </section>
  );
}
