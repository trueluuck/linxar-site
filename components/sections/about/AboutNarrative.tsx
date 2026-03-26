// components/sections/about/AboutNarrative.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutNarrative() {
  const reduced = useReducedMotion();

  return (
    <section className="scroll-mt-20">
      {/* 1. Por que agora / O gargalo */}
      <div className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400 mb-16 opacity-50">Por que agora</h2>
            <div className="space-y-12">
              <h3 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-balance">
                O gargalo que trava seu <span className="text-blue-400 italic font-medium">crescimento</span>
              </h3>
              <div className="h-px w-24 bg-blue-600/30 mx-auto" />
              <div className="space-y-6 text-xl sm:text-2xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
                <p>
                  Pequenas e médias empresas perdem margem e velocidade tentando manter anúncios atualizados em vários marketplaces. Criar títulos e descrições de qualidade exige tempo e know-how.
                </p>
                <p className="text-white font-medium italic">
                  “Se o seu crescimento depende de cadastro manual, seu negócio já está travado.”
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Como funciona / A Solução */}
      <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-8 inline-block">Como funciona</h2>
            <h3 className="text-4xl font-black tracking-tight text-black sm:text-6xl leading-[1.1] text-balance mb-12">
              Como a LINXAR resolve esse problema
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
               <div className="space-y-6 text-lg text-black/60 leading-relaxed font-medium">
                  <p>
                    A LINXAR é uma plataforma SaaS com motor de otimização por IA generativa. 
                    A partir de um único cadastro, criamos automaticamente títulos, descrições e atributos 
                    prontos para SEO e diretrizes de cada canal.
                  </p>
                  <p>
                    Em seguida, publicamos via API nos marketplaces (Shopee, Amazon, Mercado Livre e outros), 
                    mantendo vendas, pedidos e estoque centralizados.
                  </p>
               </div>
               
               <div className="rounded-[40px] border border-black/[0.04] bg-[#fafafa] p-10 shadow-soft glass-reflection">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">1</div>
                    <span className="text-xl font-bold text-black tracking-tight">Otimização Generativa</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-black/[0.02] shadow-sm">
                     <p className="text-sm font-medium text-black/40 italic">“Título SEO gerado com sucesso para Mercado Livre.”</p>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
