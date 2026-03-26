// components/sections/DashboardPreview.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

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
          initial={reduced ? undefined : { opacity: 0, y: 40, scale: 0.95 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Dashboard Frame */}
          <div className="relative rounded-[48px] border border-black/[0.08] bg-white p-4 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden glass-reflection">
             <div className="relative aspect-[16/10] w-full rounded-[38px] overflow-hidden">
                <Image 
                  src="/dashboard-preview.png" 
                  alt="LINXAR Hub Dashboard" 
                  fill 
                  className="object-cover"
                  priority
                />
                
                {/* Floating Callouts overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute top-1/4 right-8 glass-card border-blue-500/20 px-6 py-4 shadow-2xl hidden lg:block"
                >
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Status do Motor</p>
                  <p className="text-lg font-bold text-black tracking-tight">Fluxar AI Ativo</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute bottom-1/4 left-8 glass-card border-emerald-500/20 px-6 py-4 shadow-2xl hidden lg:block"
                >
                  <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Performance</p>
                  <p className="text-lg font-bold text-black tracking-tight">Escala em Tempo Real</p>
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
