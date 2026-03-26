// components/sections/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Word({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{children}</span>;

  return (
    <motion.span
      initial={{ opacity: 0, y: 4, filter: "drop-shadow(0 0 0 rgba(37,99,235,0))" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "drop-shadow(0 0 8px rgba(37,99,235,0.25))",
      }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [prefReduced, setPrefReduced] = useState(reduced);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const videoUrl = useMemo(() => {
    // Tenta pegar do .env. Se não tiver, verifica se logamos um padrão ou mantemos limpo.
    const envUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
    return envUrl && !prefReduced ? envUrl : "";
  }, [prefReduced]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden isolate">
      {/* Background Atmosphere */}
      <div className="atmosphere-orb w-[500px] h-[500px] bg-blue-600/10 top-[-200px] left-[-100px] animate-pulse" />
      <div className="atmosphere-orb w-[600px] h-[600px] bg-indigo-600/5 bottom-[-300px] right-[-100px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Vídeo online opcional */}
      {videoUrl ? (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Demonstração tecnológica LINXAR"
          />
          <div className="hero-overlay bg-white/20" />
        </div>
      ) : null}

      <Container className="relative flex min-h-[90vh] items-center justify-between pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side: Content */}
          <div className="max-w-2xl text-left">
            <motion.h1
              className="text-balance text-5xl font-black tracking-tighter text-black sm:text-7xl leading-[1.05]"
              initial={reduced ? undefined : { opacity: 0, x: -24 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sua operação <br />
              <span className="italic font-light text-black/40 tracking-wider">merece fluidez.</span> <br />
              A <span className="shimmer-text px-1">LINXAR</span> automatiza <br />
              seu crescimento operacional.
            </motion.h1>

            <p className="mt-8 text-pretty text-lg text-black/60 sm:text-xl leading-relaxed font-medium">
              <Word delay={0} className="font-bold text-blue-600">INTELIGÊNCIA QUE ESCALA</Word>. Automatize, padronize e publique 
              em múltiplos marketplaces — <Word delay={0.15} className="font-bold text-blue-600">mais rápido</Word>, 
              <Word delay={0.3} className="font-bold text-blue-600"> mais inteligente</Word> e sem riscos operacionais.
            </p>

            <motion.div
              className="mt-12 flex flex-wrap items-center justify-start gap-6"
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                href="https://hub.linxar.com.br/login"
                className="btn-premium"
              >
                Testar Grátis Agora
              </Link>
              <Link
                href="#produto"
                className="rounded-2xl border border-black/5 bg-white/40 backdrop-blur-md px-8 py-5 text-lg font-semibold text-black/70 hover:bg-black/5 transition-all active:scale-95"
              >
                Ver Detalhes
              </Link>
            </motion.div>

            {/* Parcerias integradas com máxima ênfase */}
            <motion.div
              className="mt-20 p-8 rounded-[32px] border border-black/[0.04] bg-white transition-all hover:bg-white/[0.8] hover:shadow-[0_32px_64px_rgba(0,0,0,0.05)] relative overflow-hidden group shadow-soft glass-reflection"
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="shimmer-text text-[11px] sm:text-xs font-black uppercase tracking-[0.4em] block mb-8 relative z-10">
                Infraestrutura em parceria com
              </span>
              <div className="flex flex-wrap items-center gap-12 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 relative z-10">
                 <Image src="/logos/utfpr.png" alt="UTFPR" width={140} height={50} className="object-contain hover:scale-105 transition-transform" />
                 <Image src="/logos/sprint.png" alt="Sprint Incubadora" width={150} height={50} className="object-contain hover:scale-105 transition-transform" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Infrastructure */}
          <div className="flex relative items-center justify-center min-h-[350px] sm:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-[320px] sm:max-w-[500px] flex items-center justify-center scale-75 sm:scale-100"
            >
              {/* Central Glow & Hub */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 flex items-center justify-center h-40 w-40 glass-card glass-reflection border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-[40px] overflow-hidden">
                <Image src="/logos/linxar.png" alt="LINXAR Code" width={100} height={100} className="object-contain" />
              </div>

              {/* Connecting Lines SVG Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Top Left */}
                <motion.line x1="250" y1="250" x2="100" y2="120" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                {/* Top Right */}
                <motion.line x1="250" y1="250" x2="400" y2="120" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                {/* Bottom Left */}
                <motion.line x1="250" y1="250" x2="100" y2="380" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                {/* Bottom Right */}
                <motion.line x1="250" y1="250" x2="400" y2="380" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
              </svg>

              {/* Callouts */}
              {/* Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-[80px] left-[20px] glass-card px-5 py-3 border-blue-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Cadastro em Segundos</span>
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute top-[80px] right-[20px] glass-card px-5 py-3 border-blue-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Anúncios que Vendem</span>
                  <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                </div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-[80px] left-[20px] glass-card px-5 py-3 border-blue-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Descrições Personalizadas</span>
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute bottom-[80px] right-[20px] glass-card px-5 py-3 border-blue-500/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/80">Títulos Perpétuos</span>
                  <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                </div>
              </motion.div>

              {/* Floating Orbitals for Extra Depth */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-blue-500/20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-indigo-500/10" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
