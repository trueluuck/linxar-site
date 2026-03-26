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

      <Container className="relative flex min-h-screen items-center justify-center pt-24 pb-12 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-24 items-center w-full max-w-7xl mx-auto">
          {/* Left Side: Content - RESPONSIVO E OTIMIZADO */}
          <div className="flex flex-col justify-center h-full space-y-8 sm:space-y-12">
            <motion.h1
              className="text-balance text-4xl font-black tracking-tighter text-black sm:text-7xl leading-[1.05] sm:leading-[1.02]"
              initial={reduced ? undefined : { opacity: 0, x: -30 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              Sua operação <br />
              <span className="italic font-light text-black/40 tracking-wider">merece fluidez.</span> <br />
              A <span className="shimmer-text px-1">LINXAR</span> automatiza <br />
              seu crescimento.
            </motion.h1>

            <div className="space-y-8 sm:space-y-10">
              <p className="max-w-xl text-pretty text-base text-black/70 sm:text-xl leading-relaxed font-medium">
                <Word delay={0} className="font-extrabold text-blue-600 uppercase tracking-widest text-[10px] sm:text-xs">Inteligência que escala</Word>. Automatize, padronize e publique 
                em múltiplos marketplaces — <Word delay={0.15} className="font-bold text-blue-600">mais rápido</Word>, 
                <Word delay={0.3} className="font-bold text-blue-600">mais inteligente</Word> e sem riscos operacionais.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6"
                initial={reduced ? undefined : { opacity: 0, y: 12 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  href="https://hub.linxar.com.br/login"
                  className="btn-premium py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl text-center"
                >
                  Testar Grátis Agora
                </Link>
                <Link
                  href="#produto"
                  className="rounded-[20px] border border-black/5 bg-white/40 backdrop-blur-md px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-black/70 hover:bg-black/5 transition-all active:scale-95 text-center"
                >
                  Ver Detalhes
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Visual Infrastructure - ESCALADO PARA MOBILE */}
          <div className="flex relative items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] mt-8 sm:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] flex items-center justify-center scale-75 sm:scale-90 lg:scale-100"
            >
              {/* Central Glow & Hub */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[80px] sm:blur-[100px] rounded-full" />
              <div className="relative z-10 flex items-center justify-center h-28 w-28 sm:h-40 sm:w-40 glass-card glass-reflection border-white/40 shadow-2xl rounded-[32px] sm:rounded-[48px] overflow-hidden group">
                <Image src="/logos/linxar.png" alt="LINXAR" width={80} height={80} className="object-contain sm:w-[100px] sm:h-[100px] group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Connecting Lines SVG Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="partnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <motion.line x1="250" y1="250" x2="50" y2="50" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.5 }} />
                <motion.line x1="250" y1="250" x2="450" y2="50" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} />
                <motion.line x1="250" y1="250" x2="50" y2="450" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.7 }} />
                <motion.line x1="250" y1="250" x2="450" y2="450" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }} />
                <motion.line x1="250" y1="250" x2="0" y2="250" stroke="url(#partnerGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} />
                <motion.line x1="250" y1="250" x2="500" y2="250" stroke="url(#partnerGrad)" strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
              </svg>

              {/* Callouts Principais - REDUZIDOS EM MOBILE */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-[20px] sm:top-[30px] left-[-10px] sm:left-[-15px] glass-card px-3 sm:px-5 py-1.5 sm:py-2 border-blue-500/20 shadow-xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-black">SEO Preditivo IA</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute top-[20px] sm:top-[30px] right-[-10px] sm:right-[-15px] glass-card px-3 sm:px-5 py-1.5 sm:py-2 border-blue-500/20 shadow-xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-black">Motor Omnicanal</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute top-1/2 -translate-y-1/2 left-[-40px] sm:left-[-60px] glass-card p-2 sm:p-3 border-emerald-500/20 shadow-2xl backdrop-blur-xl group"
              >
                <Image src="/logos/utfpr.png" alt="UTFPR" width={50} height={20} className="object-contain sm:w-[70px] opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-1/2 -translate-y-1/2 right-[-40px] sm:right-[-60px] glass-card p-2 sm:p-3 border-emerald-500/20 shadow-2xl backdrop-blur-xl group"
              >
                <Image src="/logos/sprint.png" alt="Sprint" width={60} height={20} className="object-contain sm:w-[80px] opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-[20px] sm:bottom-[30px] left-[-10px] sm:left-[-15px] glass-card px-3 sm:px-5 py-1.5 sm:py-2 border-blue-500/20 shadow-xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-black">Enriquecimento Global</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-[20px] sm:bottom-[30px] right-[-10px] sm:right-[-15px] glass-card px-3 sm:px-5 py-1.5 sm:py-2 border-blue-500/20 shadow-xl backdrop-blur-3xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-black">Escala Infinita</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Orbitals for Extra Depth - ESCALADO EM MOBILE */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none scale-[1] sm:scale-[1.3]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-500/20 blur-[2px]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-indigo-500/10 blur-[4px]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
