import Image from "next/image";
import { ArrowRight, Layers, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pt-14 pb-0 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,var(--brand-soft)_0%,transparent_70%)]" />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <a
          href="https://www.instagram.com/drfellipejaworski/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-[13px] text-muted shadow-sm transition-colors hover:border-brand-line"
        >
          <Layers className="h-3.5 w-3.5 text-brand" />
          Método validado com +1,3 milhão de pessoas que acompanham conteúdo sobre Mounjaro e emagrecimento
        </a>

        <h1 className="font-display mt-7 text-[2.6rem] leading-[1.08] tracking-tight text-balance sm:text-6xl">
          Emagreça de forma saudável, usando o Mounjaro do jeito certo
        </h1>

        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          O método do Dr. Fellipe Jaworski (CRM-RO 6436) ensina como usar o
          Mounjaro corretamente, evitar efeitos colaterais, fazer o reboot com
          segurança e manejar a dose — junto com nutrição, treino e mentalidade,
          em um curso com certificado e mentoria em grupo todo mês.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#preco"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Quero começar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:border-brand-line"
          >
            <PlayCircle className="h-4 w-4" />
            Ver o que tem no método
          </a>
        </div>

        <p className="mt-4 text-[13px] text-muted">
          Acesso imediato · Turma com vagas limitadas por mês
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <HeroMock />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}

const MODULES = [
  { n: "00", title: "Comece aqui", img: "/images/modules/comece-aqui.jpg", progress: 100 },
  { n: "01", title: "Mounjaro", img: "/images/modules/mounjaro.jpg", progress: 70 },
  { n: "02", title: "Nutrição", img: "/images/modules/nutricao.jpg", progress: 40 },
  { n: "03", title: "Treino", img: "/images/modules/treino.jpg", progress: 15 },
  { n: "04", title: "Mentalidade", img: "/images/modules/mentalidade.jpg", progress: 0 },
  { n: "05", title: "Reboot & dose", img: "/images/modules/reboot.jpg", progress: 0 },
];

function HeroMock() {
  return (
    <div className="mx-4 overflow-hidden rounded-t-3xl border border-b-0 border-white/10 bg-[#0a0c0a] shadow-[0_30px_80px_-30px_rgba(15,76,58,0.45)] sm:mx-auto">
      <div className="flex items-center gap-6 border-b border-white/10 px-6 py-4 text-[13px]">
        <span className="font-medium text-white">Início</span>
        <span className="text-white/50">Meus módulos</span>
        <span className="hidden text-white/50 sm:inline">Certificado</span>
        <span className="hidden text-white/50 sm:inline">Mentoria</span>
      </div>
      <div className="p-5 sm:p-7">
        <p className="mb-4 text-[11px] font-medium tracking-[0.15em] text-white/45 uppercase">
          Continue assistindo
        </p>
        <div className="grid grid-cols-6 gap-2.5 sm:gap-4">
          {MODULES.map((m) => (
            <div
              key={m.n}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl"
            >
              <Image
                src={m.img}
                alt={m.title}
                fill
                sizes="(max-width: 640px) 16vw, 260px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/50" />
              <span className="font-display absolute top-2 right-2 text-2xl text-white/15 sm:text-3xl">
                {m.n}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                <p className="line-clamp-1 min-h-[11px] text-[9px] leading-tight font-medium tracking-[0.1em] text-white uppercase sm:min-h-[13px] sm:text-[10.5px]">
                  {m.title}
                </p>
                <div className="mt-2 h-[3px] w-full rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
