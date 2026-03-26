"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Produto", href: "#produto" },
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Infraestrutura", href: "#infraestrutura" },
  { name: "Como Funciona", href: "#como-funciona" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para a navbar

      const currentSection = navItems.reduce((acc, item) => {
        const sectionId = item.href.replace("#", "");
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            return sectionId;
          }
        }
        return acc;
      }, "inicio");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Checagem inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-black/[0.08] bg-white/70 px-6 py-2.5 backdrop-blur-xl shadow-lg shadow-black/[0.03]">
          {/* Brand */}
          <Link href="#inicio" className="flex items-center gap-2 group" aria-label="Ir para o topo">
            <div className="relative h-6 w-6 transition-transform group-hover:scale-110">
               <Image
                src="/logo-navbar@3x.png"
                alt="LINXAR"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-bold tracking-tighter text-black uppercase font-outfit">LINXAR</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-[13px] font-semibold sm:flex tracking-tight">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`transition-colors hover:text-black ${
                  activeSection === item.href.replace("#", "") 
                    ? "text-blue-600 font-bold" 
                    : "text-black/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="https://hub.linxar.com.br/login"
              className="rounded-2xl bg-black px-8 py-2.5 text-[13px] font-bold text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-black/10"
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

      {/* Mobile nav items */}
      {open && (
        <div className="mx-4 mt-2 sm:hidden">
          <div className="rounded-3xl border border-black/[0.08] bg-white/90 p-4 backdrop-blur-xl shadow-2xl animate-fade-in">
             <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.href.replace("#", "") 
                        ? "bg-blue-50 text-blue-600" 
                        : "hover:bg-black/5 text-black/70"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
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
