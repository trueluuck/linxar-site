// components/sections/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

/**
 * Vídeo online opcional via NEXT_PUBLIC_HERO_VIDEO_URL. Se ausente, hero estático.
 * Respeita prefers-reduced-motion.
 */
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
    const envUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
    return envUrl && !prefReduced ? envUrl : "";
  }, [prefReduced]);

  return (
    <section className="relative isolate">
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
            aria-label="Demonstração visual de tecnologia LINXAR"
          />
          <div className="hero-overlay" />
        </div>
      ) : null}

      <Container className="relative flex min-h-[82vh] flex-col items-center justify-center text-center">
        <motion.h1
          className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Otimize <span className="font-semibold">PRODUTOS</span> com{" "}
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 bg-clip-text text-transparent">
            IA Omnicanal
          </span>
          .
        </motion.h1>

        <motion.p
          className="mt-4 max-w-3xl text-pretty text-base text-black/70 sm:text-lg"
          initial={reduced ? undefined : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
        >
          LINXAR conecta EAN/GTIN via QRCODE ou CODEBAR, otimiza título, descrição e SEO, e
          publica em massa nos marketplaces — rápido, consistente e inteligente.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          initial={reduced ? undefined : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
        >
          {/* CTA → /demo */}
          <Button asChild href="/demo" aria-label="Começar a demonstração agora">
            Começar Agora
          </Button>
          {/* Como Funciona → /produto */}
          <Link
            href="/produto"
            className="btn btn-ghost"
            aria-label="Entender como a LINXAR funciona"
          >
            Como Funciona
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 text-xs text-black/60"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Pré-incubada na UTFPR • Tecnologia brasileira
        </motion.div>
      </Container>
    </section>
  );
}
