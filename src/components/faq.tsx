import { Accordion } from "@/components/ui/accordion";

const ITEMS = [
  {
    id: "medicacao",
    title: "O curso ensina a usar o Mounjaro corretamente?",
    content:
      "Sim — esse é o coração do método. Você aprende como aplicar corretamente, como evitar efeitos colaterais e problemas de saúde, o que é e quando fazer o reboot, e como manejar a titulação da dose ao longo do tempo. O conteúdo é educacional e não substitui prescrição — o uso do Mounjaro deve sempre ser acompanhado por um médico.",
  },
  {
    id: "o-que-recebo",
    title: "O que exatamente eu recebo ao comprar?",
    content:
      "Acesso à plataforma com todos os módulos do método (nutrição, treino, mentalidade e manejo do Mounjaro), certificado de conclusão e, no plano Curso + Mentoria, as sessões de mentoria em grupo ao vivo todo mês.",
  },
  {
    id: "sem-medicacao",
    title: "Funciona para quem não usa medicação?",
    content:
      "Sim. O método foi desenhado para qualquer pessoa em jornada de emagrecimento — os módulos de nutrição, treino e mentalidade funcionam com ou sem uso de medicação.",
  },
  {
    id: "diferenca-planos",
    title: "Qual a diferença entre os dois planos?",
    content:
      "O Curso gravado dá acesso a todos os módulos no seu ritmo. O Curso + Mentoria inclui, além disso, encontros ao vivo mensais para tirar dúvidas e ajustar seu protocolo com o time do Dr. Fellipe.",
  },
  {
    id: "tempo-acesso",
    title: "Por quanto tempo tenho acesso ao conteúdo?",
    content:
      "O acesso à plataforma e às atualizações do método é válido durante todo o período do programa, em qualquer dispositivo com internet.",
  },
  {
    id: "atendimento",
    title: "É possível ter consulta individual com o Dr. Fellipe?",
    content:
      "Sim, disponibilizamos pacotes de acompanhamento individual online como upgrade, para quem quer consultas por vídeo além do conteúdo do curso. Fale com a equipe após a matrícula.",
  },
  {
    id: "garantia",
    title: "Tem garantia?",
    content:
      "Sim, você tem garantia incondicional de 7 dias após a compra, conforme o Código de Defesa do Consumidor.",
  },
];

export function Faq() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-[2.5rem]">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-[15.5px] text-muted">
            Ficou com dúvida? Chama no direct do Instagram.
          </p>
        </div>

        <div className="mt-10">
          <Accordion items={ITEMS} defaultOpen={["medicacao"]} />
        </div>
      </div>
    </section>
  );
}
