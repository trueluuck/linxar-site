// components/sections/product/ProductWalkthrough.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/ui/Container";

const steps = [
  {
    id: "ingest",
    title: "1. Ingestão Inteligente",
    description: "Conectamos diretamente ao seu ERP ou consumimos apenas o EAN/SKU do produto bruto.",
    detail: "Integração via Webhooks e API Rest com indústrias e sistemas legados.",
    color: "bg-blue-600",
  },
  {
    id: "mip",
    title: "2. Motor MIP v4.6 (IA)",
    description: "Nossa IA proprietária deduz pesos, medidas, NCM e gera títulos SEO em segundos.",
    detail: "Processamento via GPT-4o-mini com response_format: JSON estruturado.",
    color: "bg-purple-600",
  },
  {
    id: "finops",
    title: "3. Insights & FinOps",
    description: "Transparência total no custo por anúncio e monitoramento de performance em tempo real.",
    detail: "Rastreamento de tokens consumidos e Health Score do anúncio.",
    color: "bg-emerald-600",
  },
  {
    id: "sync",
    title: "4. Sincronização Hub",
    description: "Distribuição instantânea para Mercado Livre, Amazon, Shopee e outros marketplaces.",
    detail: "Arquitetura Pluggable para máxima estabilidade de conexão.",
    color: "bg-orange-600",
  },
];

export default function ProductWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Especificações Técnicas</h2>
          <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
            Como o Motor Linxar <br/> transforma sua operação.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Navegação de Passos */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-8 rounded-[32px] border transition-all duration-500 group ${
                  activeStep === index 
                    ? "bg-white border-blue-600 shadow-2xl scale-[1.02]" 
                    : "bg-transparent border-black/5 hover:border-black/10"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-2 w-12 rounded-full transition-all duration-500 ${
                    activeStep === index ? step.color : "bg-black/10"
                  }`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    activeStep === index ? "text-blue-600" : "text-black/30"
                  }`}>
                    Passo {index + 1}
                  </span>
                </div>
                <h4 className={`text-xl font-bold transition-colors ${
                  activeStep === index ? "text-black" : "text-black/40"
                }`}>
                  {step.title}
                </h4>
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4"
                  >
                    <p className="text-black/60 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-black/5 flex items-start gap-2">
                       <div className="h-4 w-4 rounded-full bg-blue-600/10 flex items-center justify-center mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                       </div>
                       <p className="text-xs font-bold text-black/40 uppercase tracking-tight">{step.detail}</p>
                    </div>
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Vizualização do Dashboard (Mockup Programático) */}
          <div className="sticky top-32 lg:h-[600px] rounded-[48px] border border-black/[0.08] bg-[#020202] shadow-3xl overflow-hidden p-2">
             <div className="h-full w-full rounded-[40px] bg-zinc-900 overflow-hidden relative border border-white/5">
                {/* Header do Mockup */}
                <div className="h-12 border-b border-white/5 bg-white/5 px-6 flex items-center justify-between">
                   <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-500/50" />
                      <div className="h-2 w-2 rounded-full bg-amber-500/50" />
                      <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
                   </div>
                   <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">LINXAR_HUB_V5_STABLE</div>
                </div>

                {/* Conteúdo Dinâmico */}
                <div className="p-8 h-full">
                   {activeStep === 0 && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="h-10 w-48 rounded-lg bg-white/5 animate-pulse" />
                        <div className="grid grid-cols-2 gap-4">
                           <div className="h-32 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center">
                              <span className="text-xs font-mono text-white/20">ERP_CONNECTING...</span>
                           </div>
                           <div className="h-32 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center">
                              <span className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">EAN: 7891234...</span>
                           </div>
                        </div>
                     </motion.div>
                   )}

                   {activeStep === 1 && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="flex items-center gap-3">
                           <div className="h-2 w-2 rounded-full bg-purple-500 animate-ping" />
                           <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-widest">IA Engine Processing v4.6</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-white/40 space-y-2">
                           <p className="text-emerald-400">{"{"}</p>
                           <p className="pl-4">"title": "Fone de Ouvido Bluetooth Premium X",</p>
                           <p className="pl-4">"ncm": "85183000",</p>
                           <p className="pl-4">"weight": "0.450",</p>
                           <p className="pl-4">"dimensions": "15x20x10",</p>
                           <p className="text-emerald-400">{"}"}</p>
                        </div>
                     </motion.div>
                   )}

                   {activeStep === 2 && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                           <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                              <span className="block text-2xl font-black text-emerald-400 tracking-tighter">98/100</span>
                              <span className="text-[10px] text-emerald-400/50 uppercase font-black tracking-widest">SEO Score</span>
                           </div>
                           <div className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-center">
                              <span className="block text-2xl font-black text-blue-400 tracking-tighter">$0.002</span>
                              <span className="text-[10px] text-blue-400/50 uppercase font-black tracking-widest">FinOps Cost</span>
                           </div>
                        </div>
                        <div className="h-px w-full bg-white/5" />
                        <div className="h-20 rounded-2xl bg-white/[0.02] border border-white/5 animate-pulse" />
                     </motion.div>
                   )}

                   {activeStep === 3 && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-4">
                        {["Mercado Livre", "Amazon", "Shopee", "Magalu"].map((m, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                              <span className="text-xs font-bold text-white/60">{m}</span>
                              <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">SYCNED_OK</span>
                           </div>
                        ))}
                     </motion.div>
                   )}
                </div>

                {/* Overlay Aurora */}
                <div className="absolute -bottom-1/2 -right-1/4 h-[300px] w-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
