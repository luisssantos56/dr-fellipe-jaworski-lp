const STEPS = [
  {
    n: "01",
    title: "Garanta sua vaga",
    desc: "Escolha o plano — curso ou curso + mentoria — e garanta seu acesso.",
  },
  {
    n: "02",
    title: "Receba o acesso na plataforma",
    desc: "Assim que o pagamento é confirmado, você recebe login e acesso imediato ao método.",
  },
  {
    n: "03",
    title: "Siga o protocolo no seu ritmo",
    desc: "Módulos de nutrição, treino, mentalidade e medicação, no computador, tablet ou celular.",
  },
  {
    n: "04",
    title: "Participe da mentoria mensal",
    desc: "Tire dúvidas ao vivo, ajuste seu protocolo e acompanhe sua evolução com o time.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-background-alt px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-[2.5rem]">
            Simples. Direto. Eficiente.
          </h2>
          <p className="mt-3 text-[15.5px] text-muted">
            Do pagamento ao primeiro check-in, em poucos passos
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-line bg-background text-[13px] font-medium text-brand-dark">
                {step.n}
              </span>
              <h3 className="mt-4 text-[15px] font-medium">{step.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
