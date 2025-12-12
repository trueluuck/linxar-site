// components/sections/HeroTitle.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Título da hero com micro-animação (fade/slide).
 * Mantém o texto EXACTO solicitado pelo usuário.
 */
export default function HeroTitle() {
  const reduced = useReducedMotion();
  const initial = reduced ? {} : { opacity: 0, y: 12 };
  const animate = reduced ? {} : { opacity: 1, y: 0 };

  return (
    <motion.h1
      className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight"
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Cadastrar <span className="whitespace-nowrap">produtos</span>{" "}
      não deveria{" "}
      <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
        dar tanto trabalho
      </span>
      .
    </motion.h1>
  );
}
