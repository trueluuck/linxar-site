// components/sections/SecureMigration.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function SecureMigration() {
  const reduced = useReducedMotion();

  return (
    <section id="migracao" className="py-24 sm:py-32 bg-[#fafafa] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-6 inline-block">Migração Segura</h2>
            <p className="text-4xl font-black tracking-tight text-black sm:text-6xl leading-[1.1] text-balance">
              Já utiliza outro hub? <br/> Migre sem dor de cabeça.
            </p>
            <p className="mt-8 text-lg text-black/60 leading-relaxed font-medium max-w-xl">
              Mudar para a LINXAR é simples e seguro. Nossa equipe garante que você não perca anúncios ativos nem seu histórico de vendas.
            </p>

            <ul className="mt-12 space-y-6">
              {[
                "Preservação total de anúncios e SKUs",
                "Migração guiada por especialistas",
                "Sincronização imediata de estoque e preços",
                "Sem interrupções nas campanhas ativas"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={reduced ? undefined : { opacity: 0, x: -10 }}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-black/80 font-bold"
                >
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-12">
               <a 
                href="https://wa.me/5542991310000" 
                className="btn-premium inline-block"
              >
                Solicitar Migração Assistida
              </a>
            </div>
          </div>

          <div className="relative">
             <motion.div
               initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
               whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
               className="rounded-[48px] border border-black/[0.04] bg-white p-12 shadow-2xl glass-reflection text-center"
             >
                <div className="h-20 w-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto mb-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-black tracking-tight mb-4">Integridade Garantida</h3>
                <p className="text-black/50 font-medium">Nossa arquitetura foi desenhada para sincronizar com múltiplos hubs simultaneamente durante o período de transição.</p>
             </motion.div>
             
             {/* Decorative element */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
