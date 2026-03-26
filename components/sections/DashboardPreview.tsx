// components/sections/DashboardPreview.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import DashboardMockup from "@/components/ui/DashboardMockup";

export default function DashboardPreview() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24">
          <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-6 inline-block">Product Intelligence</h2>
          <p className="text-3xl font-black tracking-tight text-black sm:text-5xl leading-[1.1] text-balance">
            A interface da escala. <br/> Veja a inteligência em ação.
          </p>
        </div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 40, scale: 0.98 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Dashboard Frame - Enhanced Wrapper */}
          <div className="relative rounded-[40px] sm:rounded-[64px] border border-black/[0.08] bg-white p-3 sm:p-6 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden glass-reflection">
             <div className="relative aspect-[16/10] w-full rounded-[32px] sm:rounded-[48px] overflow-hidden border border-black/[0.04] shadow-inner bg-[#fafafa]">
                <DashboardMockup />
                
                {/* Floating Callouts - Conteúdo mais assertivo */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute top-8 right-8 glass-card border-blue-500/20 px-8 py-5 shadow-2xl hidden lg:block backdrop-blur-3xl"
                >
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Motor de Escala</p>
                  <p className="text-xl font-black text-black tracking-tight">Fluxar AI Engine</p>
                  <p className="mt-2 text-[10px] font-bold text-black/30 uppercase tracking-widest">Ativo em 12+ canais</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-8 left-8 glass-card border-emerald-500/20 px-8 py-5 shadow-2xl hidden lg:block backdrop-blur-3xl"
                >
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">IA Omnicanal</p>
                  <p className="text-xl font-black text-black tracking-tight">Enriquecimento Real</p>
                  <p className="mt-2 text-[10px] font-bold text-black/30 uppercase tracking-widest">Otimização Zero-Latency</p>
                </motion.div>
             </div>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute -top-12 -right-12 h-32 w-32 bg-blue-600/5 blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-indigo-600/5 blur-3xl animate-pulse" />
        </motion.div>
      </Container>
    </section>
  );
}
