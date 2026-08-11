import {
  Apple,
  Dumbbell,
  Brain,
  Pill,
  Users,
  Award,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

const MODULES = [
  { icon: Apple, title: "Nutrição", desc: "Cardápio flexível, sem dietas malucas" },
  { icon: Dumbbell, title: "Treino", desc: "Rotina simples para manter massa magra" },
  { icon: Brain, title: "Mentalidade", desc: "Hábitos que sustentam o resultado" },
  { icon: Pill, title: "Manejo do Mounjaro", desc: "Uso correto, reboot e titulação de dose" },
  { icon: Users, title: "Mentoria em grupo", desc: "Q&A ao vivo todo mês" },
  { icon: Award, title: "Certificado", desc: "De conclusão do método" },
  { icon: MessageCircle, title: "Comunidade", desc: "Troca com quem está na mesma jornada" },
  { icon: CalendarCheck, title: "Ajuste de protocolo", desc: "Revisão contínua com o time" },
];

export function Method() {
  return (
    <section id="metodo" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[12.5px] text-muted">
          Baseado no conteúdo que já ajudou milhares de pacientes do Dr. Fellipe — organizado em um método único
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MODULES.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-brand-line"
            >
              <m.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <p className="mt-3 text-[14px] font-medium">{m.title}</p>
              <p className="mt-1 text-[12.5px] leading-snug text-muted">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-[2.5rem]">
            O acompanhamento que você
            <br className="hidden sm:block" /> sempre quis ter encontrado
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted">
            Nada de fórmula mágica ou promessa vazia: protocolo estruturado,
            revisado por um médico, com espaço para tirar dúvida de verdade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <FeatureCard
            title="Mounjaro sem achismo"
            desc="Como usar corretamente, sinais de alerta, efeitos colaterais comuns e como fazer o reboot — para usar com segurança, sempre em conjunto com seu médico."
          >
            <div className="rounded-xl border border-border bg-background-alt p-4">
              <p className="mb-3 text-[11px] font-medium tracking-wide text-muted uppercase">
                Sinais de alerta
              </p>
              <div className="space-y-2">
                {["Náusea persistente", "Queda de energia", "Perda de massa magra"].map(
                  (s) => (
                    <div
                      key={s}
                      className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-[12.5px]"
                    >
                      <span>{s}</span>
                      <span className="h-2 w-10 rounded-full bg-brand-line" />
                    </div>
                  )
                )}
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Direto ao ponto, sem enrolação"
            desc="Módulos objetivos, pensados para quem tem rotina cheia: o que fazer, como fazer e o que evitar — sem vídeo de duas horas para chegar no que importa."
          >
            <div className="space-y-2.5">
              {[
                { l: "Aula do módulo 1", tag: "concluído" },
                { l: "Check-in da semana", tag: "concluído" },
                { l: "Mentoria ao vivo", tag: "em breve" },
              ].map((row) => (
                <div
                  key={row.l}
                  className="flex items-center justify-between rounded-xl border border-border bg-background-alt px-4 py-3"
                >
                  <span className="text-[13px]">{row.l}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] ${
                      row.tag === "concluído"
                        ? "bg-brand-soft text-brand-dark"
                        : "bg-white text-muted"
                    }`}
                  >
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
      {children}
      <h3 className="mt-6 text-[17px] font-medium">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
