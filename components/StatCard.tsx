type StatCardProps = {
  label: string;
  value: string;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
        {label}
      </p>

      <h3 className="mt-4 text-5xl font-bold">{value}</h3>
    </div>
  );
}
