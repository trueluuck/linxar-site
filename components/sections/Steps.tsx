// components/sections/Steps.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Leitura e Identificação",
    description: "Nossa IA identifica o produto via GS1/EAN e inicia a normalização dos dados brutos.",
  },
  {
    number: "02",
    title: "Enriquecimento e Regras",
    description: "O motor processa atributos, gera SEO e ajusta o conteúdo às regras de cada canal.",
  },
  {
    number: "03",
    title: "Distribuição Inteligente",
    description: "Publicação fluida nos diversos hubs com monitoramento de integridade dos dados.",
  },
];

export default function Steps() {
  return (
    <section id="passos" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-8 inline-block">Workflow LINXAR</h2>
          <p className="text-4xl font-black tracking-tight text-black sm:text-6xl leading-[1.1] text-balance">
            Dos dados crus para a venda em segundos
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <span className="text-6xl font-black text-blue-600/5 select-none absolute -top-12 -left-4 transition-transform group-hover:scale-110 group-hover:text-blue-600/10">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-black tracking-tight">{step.title}</h3>
              <p className="mt-4 text-base text-black/60 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
