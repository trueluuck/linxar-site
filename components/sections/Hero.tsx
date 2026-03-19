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
    <section className="relative isolate overflow-hidden bg-transparent">
      {/* Background removido para mostrar a aurora do layout */}

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

      <Container className="relative flex min-h-[90vh] flex-col items-center justify-center pt-24 pb-16 text-center">
        {/* Badge superior */}
        

        <motion.h1
          className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-black sm:text-7xl leading-[1.05]"
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          O motor de <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent italic tracking-tight">INTELIGÊNCIA</span> que otimiza seus anúncios nos marketplaces.
        </motion.h1>

        <p className="mt-8 mx-auto max-w-2xl text-pretty text-base text-black/60 sm:text-xl leading-relaxed px-4">
          A <Word delay={0} className="font-bold text-blue-600">LINXAR</Word> combina tecnologia proprietária com 
          <Word delay={0.15} className="font-bold text-blue-600"> INTELIGÊNCIA ESPECIALIZADA</Word> para padronizar e 
          enriquecer dados de produtos automaticamente — garantindo 
          <Word delay={0.3} className="font-bold text-blue-600"> consistência absoluta</Word>.
        </p>

        <motion.div
           className="mt-12 flex flex-wrap items-center justify-center gap-6"
           initial={reduced ? undefined : { opacity: 0, y: 12 }}
           animate={reduced ? undefined : { opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="rounded-full bg-blue-600 px-10 py-7 text-lg font-bold shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">
            <Link href="/demo">Testar Grátis Agora</Link>
          </Button>
          <Link
            href="/produto"
            className="rounded-full border border-black/10 bg-white/50 backdrop-blur-md px-10 py-4 text-lg font-bold text-black/70 hover:bg-black/5 transition-all active:scale-95"
          >
            Ver Detalhes
          </Link>
        </motion.div>

        {/* Parcerias restauradas com Logos reais e melhor UI */}
        <motion.div
          className="mt-24 w-full max-w-4xl"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-8">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/20">Parceria Estratégica</span>
            <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <Image src="/logos/utfpr.png" alt="UTFPR" width={110} height={40} className="object-contain" />
               <Image src="/logos/linxar.png" alt="LINXAR" width={110} height={40} className="object-contain" />
               <Image src="/logos/sprint.png" alt="Sprint Incubadora" width={130} height={40} className="object-contain" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
