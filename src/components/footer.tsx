import Image from "next/image";
import { AtSign, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-line">
              <Image
                src="/images/dr-fellipe.png"
                alt="Dr. Fellipe Jaworski"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-[16px] font-medium">
              Dr. Fellipe Jaworski
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-muted">
            Método de Emagrecimento Saudável — curso e mentoria com acompanhamento
            médico real. Dr. Fellipe Jaworski, CRM-RO 6436, atende em Porto Velho
            e online para todo o Brasil.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-medium">Método</p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] text-muted">
            <li><a href="#metodo" className="hover:text-foreground">O que tem dentro</a></li>
            <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
            <li><a href="#preco" className="hover:text-foreground">Investimento</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-medium">Contato</p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] text-muted">
            <li>
              <a
                href="https://www.instagram.com/drfellipejaworski/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <AtSign className="h-3.5 w-3.5" />
                @drfellipejaworski
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@drfellipejaworski.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                contato@drfellipejaworski.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-2 border-t border-border pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dr. Fellipe Jaworski. CRM-RO 6436.</p>
        <p>
          Conteúdo educacional, não substitui consulta médica individual.
        </p>
      </div>
    </footer>
  );
}
