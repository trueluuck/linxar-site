// components/sections/Features.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

const features = [
  {
    title: "Padronização IA",
    description: "Transforma o caos de dados brutos em infraestrutura operacional consistente, seguindo as regras de cada marketplace via IA.",
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
    title: "Eficiência Radical",
    description: "Automatize o enriquecimento de dados e reduza erros operacionais. O cliente não quer software, quer vender mais.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Escala Obrigatória",
    description: "Infraestrutura robusta desenhada para suportar volumes massivos sem perder a qualidade do SEO.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "IA Omnicanal",
    description: "Transformamos operação em escala e escala em vendas. Publique em dezenas de canais com zero retrabalho.",
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
    <section id="recursos" className="py-32 sm:py-48 bg-transparent">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-24">
          <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-6 inline-block">Fluxar AI Engine</h2>
          <p className="text-4xl font-black tracking-tight text-black sm:text-6xl leading-[1.1] text-balance">
            A inteligência da LINXAR para <br className="hidden sm:block" /> a sua operação multicanal
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={reduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group rounded-[48px] border border-black/[0.04] bg-white p-12 transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] glass-reflection ${feature.className || ""}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                {feature.icon || (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                )}
              </div>
              <h3 className="mt-10 text-2xl font-bold text-black tracking-tight">{feature.title}</h3>
              <p className="mt-6 text-base text-black/60 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Frase de Fechamento de Impacto */}
        <div className="mt-40 text-center relative">
          {/* Subtle Accent Line */}
          <div className="mx-auto w-24 h-px bg-blue-600/20 mb-12" />
          <p className="text-2xl sm:text-5xl font-extralight italic text-black/40 leading-tight max-w-5xl mx-auto tracking-tight">
            “Cadastro não pode ser <span className="text-black font-semibold">gargalo</span>. <br className="hidden sm:block" /> Tem que ser <span className="text-blue-600 font-semibold underline decoration-blue-600/30 underline-offset-8">vantagem competitiva</span>.”
          </p>
        </div>

        {/* Parceiros Marketplaces - Ticker Infinito */}
        <div className="mt-48 border-t border-black/[0.04] pt-24 overflow-hidden">
           <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-black/10 mb-16">Infraestrutura para os maiores canais do mercado</p>
           
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
