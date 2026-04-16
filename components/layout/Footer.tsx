// components/layout/Footer.tsx
"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Produto",
    links: [
      { name: "Funcionalidades", href: "#produto" },
      { name: "Como Funciona", href: "#como-funciona" },
      { name: "Infraestrutura", href: "#infraestrutura" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Quem Somos", href: "#quem-somos" },
      { name: "Depoimentos", href: "#depoimentos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacidade", href: "#" },
      { name: "Termos", href: "#" },
    ],
  },
  {
    title: "Contato",
    links: [
      { name: "administrativo@linxar.com.br", href: "mailto:administrativo@linxar.com.br" },
      { name: "Suporte WhatsApp", href: "https://wa.me/5542991310000" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 sm:py-24 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 group" aria-label="Voltar para o topo">
              <div className="relative h-8 w-8 transition-transform group-hover:scale-110">
                <Image
                  src="/logo-navbar@3x.png"
                  alt="LINXAR"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold tracking-tighter text-white font-outfit uppercase">
                LINXAR<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base text-white/30 leading-relaxed font-medium">
              A infraestrutura de inteligência que padroniza o e-commerce global através de automação escalável e processamento seguro.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">{group.title}</h3>
              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © {currentYear} LINXAR AI Optimization • UTFPR TECH
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
            <p>Brasília, Brasil</p>
            <div className="h-1 w-1 rounded-full bg-blue-500/30" />
            <p>Omnichannel Engine</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
