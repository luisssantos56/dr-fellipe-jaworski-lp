import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="px-4 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[radial-gradient(120%_140%_at_10%_0%,#1c6b4f_0%,#0a3527_60%)] px-6 py-16 text-center sm:px-16">
        <h2 className="font-display text-3xl font-medium tracking-tight text-white text-balance sm:text-[2.75rem]">
          Chega de dietas malucas e promessas vazias
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/80">
          Comece o método com acompanhamento médico real e resultado que se sustenta.
        </p>
        <a
          href="#preco"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-brand-dark transition-colors hover:bg-white/90"
        >
          Quero meu acesso
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-[12.5px] text-white/60">
          Vagas limitadas por turma · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
}
