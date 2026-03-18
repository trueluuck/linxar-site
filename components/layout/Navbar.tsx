// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-black/[0.08] bg-white/70 px-6 py-2.5 backdrop-blur-xl shadow-lg shadow-black/[0.03]">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Ir para a página inicial">
            <div className="relative h-7 w-7 transition-transform group-hover:scale-110">
               <Image
                src="/logos/linxar.png"
                alt="LINXAR"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <span className="text-base font-bold tracking-tighter text-black uppercase">LINXAR</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-[13px] font-medium sm:flex">
            <Link href="/" className="text-black/50 hover:text-black transition-colors">Início</Link>
            <Link href="/produto" className="text-black/50 hover:text-black transition-colors">Produto</Link>
            <Link href="/demo" className="text-black/50 hover:text-black transition-colors">Demo</Link>
            <Link href="/contato" className="text-black/50 hover:text-black transition-colors">Contato</Link>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="https://hub.linxar.com.br/login"
              className="rounded-full bg-black px-6 py-2 text-[13px] font-bold text-white hover:bg-black/80 transition-all active:scale-95 shadow-md shadow-black/10"
              aria-label="Entrar no Linxar HUB"
            >
              Entrar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center rounded-full p-2 text-black/70 hover:bg-black/5 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile nav items (Dropdown estilo menu flutuante) */}
      {open && (
        <div className="mx-4 mt-2 sm:hidden">
          <div className="rounded-3xl border border-black/[0.08] bg-white/90 p-4 backdrop-blur-xl shadow-2xl animate-fade-in">
             <div className="flex flex-col gap-2">
                {['Início', 'Produto', 'Demo', 'Contato'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Início' ? '/' : `/${item.toLowerCase().replace('í', 'i')}`}
                    className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-black/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="https://hub.linxar.com.br/login"
                  className="mt-2 rounded-2xl bg-black py-4 text-center text-sm font-bold text-white shadow-xl shadow-black/20"
                  onClick={() => setOpen(false)}
                >
                  Entrar no HUB
                </Link>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}
