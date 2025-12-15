// components/sections/demo/DemoHero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DemoHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-14 pb-8">
      {/* fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-blue-50 to-white"
      />
      {/* blobs decorativos */}
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-56 w-[44rem] -translate-x-1/2 blur-3xl">
        <div className="h-full w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 opacity-60" />
      </div>

      <div className="container max-w-4xl px-4 text-center">
        {/* Selo "Em breve" */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700"
          initial={reduced ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-label="Em breve"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
          </span>
          Em breve
        </motion.div>

        {/* Título */}
        <motion.h1
          className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          Uma nova forma de{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            cadastrar e vender online
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-black/70 sm:text-lg"
          initial={reduced ? undefined : { opacity: 0, y: 6 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          Sua empresa pode ser pioneira. Entre na fila de espera e tenha acesso
          antes do concorrente.
        </motion.p>
      </div>
    </section>
  );
}
