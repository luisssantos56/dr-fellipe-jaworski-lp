import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Fellipe Jaworski — Método de Emagrecimento Saudável",
  description:
    "Curso e mentoria com o Dr. Fellipe Jaworski para emagrecer de forma saudável, com acompanhamento médico real: nutrição, treino, mentalidade e o manejo correto do Mounjaro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
