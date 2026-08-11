import Image from "next/image";
import { BadgeCheck, MapPin, Stethoscope } from "lucide-react";

export function AboutDoctor() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-[280px_1fr] sm:gap-14">
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/dr-fellipe.png"
            alt="Dr. Fellipe Jaworski, médico CRM-RO 6436"
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-[12.5px] font-medium text-brand-dark">
            <BadgeCheck className="h-3.5 w-3.5" />
            Dr. Fellipe Jaworski
          </p>
          <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-balance sm:text-[2.5rem]">
            Quem te acompanha nessa jornada
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
            Médico com registro ativo (CRM-RO 6436), atua com emagrecimento
            saudável em consultas presenciais em Porto Velho e online para todo o
            Brasil. Construiu uma comunidade de mais de 1,3 milhão de pessoas no
            Instagram compartilhando conteúdo sobre uso correto de medicações
            como Mounjaro e Ozempic, hábitos e nutrição — sempre com uma visão
            crítica, sem promessa milagrosa.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13.5px]">
              <Stethoscope className="h-4 w-4 text-brand" />
              CRM-RO 6436 — Emagrecimento saudável
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13.5px]">
              <MapPin className="h-4 w-4 text-brand" />
              Consultas em Porto Velho ou 100% online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
