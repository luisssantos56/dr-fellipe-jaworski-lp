import { Syringe, ShieldAlert, RotateCcw, SlidersHorizontal } from "lucide-react";

const TOPICS = [
  {
    icon: Syringe,
    title: "Como usar corretamente",
    desc: "Aplicação, horário, rotação de local e o que fazer antes de começar — passo a passo, sem achismo.",
  },
  {
    icon: ShieldAlert,
    title: "Como evitar problemas de saúde",
    desc: "Sinais de alerta, efeitos colaterais mais comuns e quando procurar seu médico com urgência.",
  },
  {
    icon: RotateCcw,
    title: "Reboot: quando e como fazer",
    desc: "O que é o reboot, em que situação ele faz sentido e como recomeçar o protocolo com segurança.",
  },
  {
    icon: SlidersHorizontal,
    title: "Manejo e titulação de dose",
    desc: "Como ajustar a dose com o tempo, o que observar no seu corpo e como evitar platôs.",
  },
];

export function Mounjaro() {
  return (
    <section id="mounjaro" className="border-y border-border bg-brand-dark px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-medium text-white">
            Módulo dedicado
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-tight text-balance text-white sm:text-[2.5rem]">
            Tudo sobre usar o Mounjaro do jeito certo
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/70">
            O conteúdo que já ajudou mais de 1,3 milhão de pessoas no Instagram,
            agora estruturado em módulo: uso correto, prevenção de efeitos
            colaterais, reboot e manejo de dose — sempre em conjunto com
            acompanhamento médico.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {TOPICS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <t.icon className="h-5 w-5 text-accent-soft" strokeWidth={1.75} />
              <p className="mt-3 text-[15px] font-medium text-white">{t.title}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[12.5px] text-white/50">
          Conteúdo educacional sobre análogos de GLP-1 (tirzepatida). Não
          substitui prescrição médica — o uso do Mounjaro deve sempre ser
          acompanhado por um médico.
        </p>
      </div>
    </section>
  );
}
