// components/sections/Features.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

const features = [
  {
    title: "Padronização IA",
    description: "Transforma dados brutos em catálogos consistentes, seguindo as regras específicas de cada marketplace automaticamente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m8 17 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    className: "lg:col-span-2",
  },
  {
    title: "Enriquecimento Automático",
    description: "Nossa IA preenche lacunas de dados, gera atributos técnicos e FAQs a partir de uma simples foto ou barcode.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Segurança de Dados",
    description: "Sua operação está protegida por infraestrutura robusta e tratamento seguro de informações em todos os níveis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Inteligência Omnicanal",
    description: "Algoritmos treinados para maximizar a conversão em diversos canais simultaneamente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <path d="M12 2v10M18.4 4.6l-7 7M11.6 11.6l-7-7M12 22v-10M5.6 19.4l7-7M19.4 19.4l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    className: "lg:col-span-2",
  },
];

export default function Features() {
  const reduced = useReducedMotion();

  return (
    <section id="recursos" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">Fluxar AI</h2>
          <p className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl leading-tight">
            A inteligência da LINXAR para <br className="hidden sm:block" /> a sua operação multicanal
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative group rounded-[32px] border border-black/[0.06] bg-white p-10 transition-all hover:bg-gray-50/50 hover:shadow-xl hover:shadow-black/[0.02] ${feature.className || ""}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold text-black tracking-tight">{feature.title}</h3>
              <p className="mt-4 text-base text-black/50 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Parceiros Marketplaces - Ticker Infinito */}
        <div className="mt-32 border-t border-black/[0.06] pt-16 overflow-hidden">
           <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-12">Pronto para os maiores canais do mercado</p>
           
           <div className="relative flex overflow-x-hidden">
             <motion.div 
               className="flex whitespace-nowrap gap-12 sm:gap-20 items-center py-4"
               animate={{ x: [0, -1920] }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             >
               {[
                 "Mercado Livre", "Shopee", "Amazon", "Magalu", "Americanas", "Casas Bahia", 
                 "Netshoes", "Dafiti", "MadeiraMadeira", "Leroy Merlin", "Carrefour", "Extra", 
                 "Ponto", "Centauro", "Mobly", "Zattini", "Kanui", "Via Varejo", "Kabum", 
                 "Zoom", "Buscapé", "Inter Shop", "Aliexpress", "Shein"
               ].concat([
                 "Mercado Livre", "Shopee", "Amazon", "Magalu", "Americanas", "Casas Bahia", 
                 "Netshoes", "Dafiti", "MadeiraMadeira", "Leroy Merlin", "Carrefour", "Extra", 
                 "Ponto", "Centauro", "Mobly", "Zattini", "Kanui", "Via Varejo", "Kabum", 
                 "Zoom", "Buscapé", "Inter Shop", "Aliexpress", "Shein"
               ]).map((mkt, idx) => (
                 <span 
                   key={idx} 
                   className="text-lg sm:text-2xl font-black uppercase tracking-tighter italic text-black/30 hover:text-blue-600 transition-colors cursor-default"
                 >
                   {mkt}
                 </span>
               ))}
             </motion.div>

             {/* Gradientes de desfoque lateral para suavizar o ticker */}
             <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
           </div>
        </div>
      </Container>
    </section>
  );
}
