import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Curso gravado",
    price: "R$ 697",
    installment: "ou 12x no cartão",
    highlight: false,
    features: [
      "Todos os módulos: nutrição, treino, mentalidade e medicação",
      "Certificado de conclusão",
      "Acesso à plataforma no seu ritmo",
      "Atualizações do método incluídas",
      "Suporte por mensagens",
    ],
    cta: "Quero o curso",
  },
  {
    name: "Curso + Mentoria",
    price: "R$ 1.497",
    installment: "ou 12x no cartão",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do curso gravado",
      "Mentoria em grupo ao vivo (Q&A mensal)",
      "Ajuste de protocolo com o time do Dr. Fellipe",
      "Prioridade no plantão de dúvidas",
      "Acesso à comunidade fechada",
    ],
    cta: "Quero curso + mentoria",
  },
];

export function Pricing() {
  return (
    <section id="preco" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-[2.5rem]">
            Escolha como quer começar
          </h2>
          <p className="mt-3 text-[15.5px] text-muted">
            O mesmo método nos dois planos — a diferença é o nível de acompanhamento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-7 ${
                plan.highlight
                  ? "border-brand bg-brand-dark text-white"
                  : "border-border bg-background"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-7 rounded-full bg-accent px-3 py-1 text-[11.5px] font-medium text-white">
                  {plan.badge}
                </span>
              )}
              <p
                className={`text-[14px] font-medium ${
                  plan.highlight ? "text-white/80" : "text-muted"
                }`}
              >
                {plan.name}
              </p>
              <p className="font-display mt-2 text-4xl font-medium">
                {plan.price}
              </p>
              <p
                className={`mt-1 text-[13px] ${
                  plan.highlight ? "text-white/70" : "text-muted"
                }`}
              >
                pagamento único · {plan.installment}
              </p>

              <a
                href="#"
                className={`mt-6 flex items-center justify-center rounded-full px-5 py-3 text-[14.5px] font-medium transition-colors ${
                  plan.highlight
                    ? "bg-white text-brand-dark hover:bg-white/90"
                    : "bg-brand-soft text-brand-dark hover:bg-brand-line"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlight ? "text-accent-soft" : "text-brand"
                      }`}
                    />
                    <span className={plan.highlight ? "text-white/90" : "text-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-muted">
          Valores de referência do método — turmas com vagas limitadas por mês.
          Este material é educacional e não substitui consulta médica individual.
        </p>
      </div>
    </section>
  );
}
