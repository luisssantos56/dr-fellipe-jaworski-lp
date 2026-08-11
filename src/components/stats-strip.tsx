const STATS = [
  { value: "1,3 mi+", label: "seguidores acompanham o conteúdo" },
  { value: "CRM-RO 6436", label: "registro médico ativo" },
  { value: "4 pilares", label: "nutrição, treino, mentalidade e medicação" },
  { value: "Turmas mensais", label: "com mentoria em grupo ao vivo" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-background-alt px-4 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-xl font-medium text-brand-dark sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[12.5px] leading-snug text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
