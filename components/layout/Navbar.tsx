// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass">
      <Container className="flex h-14 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Ir para a página inicial">
          <Image
            src="/logos/linxar.png"
            alt="LINXAR"
            width={28}
            height={28}
            className="rounded-md"
            priority
          />
          <span className="text-sm font-semibold tracking-tight">LINXAR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm sm:flex">
          <Link href="/#inicio" className="text-black/70 hover:text-black" aria-label="Ir para o início">
            Início
          </Link>
          <Link href="/produto" className="text-black/70 hover:text-black" aria-label="Como funciona">
            Como Funciona
          </Link>
          <Link href="/demo" className="text-black/70 hover:text-black" aria-label="Demonstração">
            Demonstração
          </Link>
          <Link href="/quem-somos" className="text-black/70 hover:text-black" aria-label="Quem somos">
            Quem Somos
          </Link>
          <Link
            href="/contato"
            className="rounded-xl border border-black/10 px-3 py-1.5 hover:bg-black/[0.05]"
            aria-label="Contato"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          className="sm:hidden inline-flex size-9 items-center justify-center rounded-lg border border-black/10"
        >
          <span className="sr-only">Abrir menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-menu" className="sm:hidden border-t" role="dialog">
          <Container className="py-2">
            <div className="flex flex-col gap-1 text-sm">
              <Link href="/#inicio" className="rounded-lg px-3 py-2 hover:bg-black/[0.04]" onClick={() => setOpen(false)}>
                Início
              </Link>
              <Link href="/produto" className="rounded-lg px-3 py-2 hover:bg-black/[0.04]" onClick={() => setOpen(false)}>
                Como Funciona
              </Link>
              <Link href="/demo" className="rounded-lg px-3 py-2 hover:bg-black/[0.04]" onClick={() => setOpen(false)}>
                Demonstração
              </Link>
              <Link href="/quem-somos" className="rounded-lg px-3 py-2 hover:bg-black/[0.04]" onClick={() => setOpen(false)}>
                Quem Somos
              </Link>
              <Link href="/contato" className="rounded-lg px-3 py-2 hover:bg-black/[0.04]" onClick={() => setOpen(false)}>
                Contato
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
