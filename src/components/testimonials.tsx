const TESTIMONIALS = [
  {
    quote:
      "Comecei o método no meio de um platô e finalmente entendi o que eu estava fazendo errado — hoje já são 11kg a menos, sem passar fome.",
    name: "Paciente",
    tag: "Método Emagrecimento Saudável",
  },
  {
    quote:
      "A parte da mentalidade fez toda diferença. Não é só dieta, é entender por que eu sempre voltava a engordar.",
    name: "Aluna",
    tag: "Curso + mentoria",
  },
  {
    quote:
      "Uso Mounjaro há alguns meses e o módulo de uso correto da medicação tirou várias dúvidas que meu acompanhamento anterior nunca respondeu.",
    name: "Aluno",
    tag: "Curso + mentoria",
  },
  {
    quote:
      "A mentoria em grupo é ótima: consigo perguntar ao vivo e ver casos parecidos com o meu sendo resolvidos.",
    name: "Paciente",
    tag: "Mentoria mensal",
  },
  {
    quote:
      "Recomendo pra quem já tentou de tudo — aqui é acompanhamento estruturado, não um PDF genérico.",
    name: "Aluna",
    tag: "Método Emagrecimento Saudável",
  },
  {
    quote:
      "Treino simples, cardápio flexível e alguém pra tirar dúvida quando eu travo. Foi isso que faltava.",
    name: "Aluno",
    tag: "Curso gravado",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-border bg-background-alt px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-[2.5rem]">
            Quem já está no método
          </h2>
          <p className="mt-3 text-[15.5px] text-muted">
            Retorno de pacientes e alunos que acompanham o Dr. Fellipe.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="mb-5 break-inside-avoid rounded-2xl border border-border bg-background p-6"
            >
              <p className="text-[14px] leading-relaxed text-foreground">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-[11px] font-medium text-brand-dark">
                  {t.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-[13px] font-medium leading-tight">{t.name}</p>
                  <p className="text-[12px] leading-tight text-muted">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
