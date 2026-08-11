"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, AtSign } from "lucide-react";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#metodo", label: "O método" },
  { href: "#mounjaro", label: "Mounjaro" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#preco", label: "Investimento" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-border bg-background/90 px-3 py-2 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(15,76,58,0.25)]" : ""
        }`}
      >
        <a href="#inicio" className="flex items-center gap-2 pl-2">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-line">
            <Image
              src="/images/dr-fellipe.png"
              alt="Dr. Fellipe Jaworski"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-[17px] font-medium tracking-tight">
            Dr. Fellipe Jaworski
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[14px] text-muted transition-colors hover:bg-background-alt hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://www.instagram.com/drfellipejaworski/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] text-muted transition-colors hover:bg-background-alt hover:text-foreground"
          >
            Instagram
            <AtSign className="h-3.5 w-3.5" />
          </a>
          <a
            href="#preco"
            className="rounded-full bg-brand-soft px-4 py-2.5 text-[14px] font-medium text-brand-dark transition-colors hover:bg-brand-line"
          >
            Quero minha vaga
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-[68px] z-40 flex flex-col gap-1 rounded-3xl border border-border bg-background p-3 shadow-xl lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] text-foreground hover:bg-background-alt"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#preco"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-brand px-4 py-3 text-center text-[15px] font-medium text-white"
          >
            Quero minha vaga
          </a>
        </div>
      )}
    </header>
  );
}
