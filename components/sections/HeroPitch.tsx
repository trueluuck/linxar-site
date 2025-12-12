// components/sections/HeroPitch.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Brilho leve no fim do fade + reanima quando volta ao viewport.
 * Usa drop-shadow para simular glow (sem alterar tipografia).
 */
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

  // Evita animação para usuários com prefers-reduced-motion.
  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 4, filter: "drop-shadow(0 0 0 rgba(59,130,246,0))" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "drop-shadow(0 0 10px rgba(59,130,246,0.35))",
      }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export default function HeroPitch() {
  return (
    <p className="mt-4 text-base sm:text-lg text-black/70">
      Com{" "}
      <Word delay={0} className="font-semibold text-blue-600">
        IA OMNICANAL
      </Word>
      , a{" "}
      <Word delay={0.15} className="font-semibold text-blue-600">
        LINXAR
      </Word>{" "}
      cria títulos, descrições e anúncios prontos para vários marketplaces — em{" "}
      <Word delay={0.3} className="font-semibold text-blue-600">
        segundos
      </Word>
      .
    </p>
  );
}
