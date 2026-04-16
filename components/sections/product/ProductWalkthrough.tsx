// components/sections/product/ProductWalkthrough.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const slides = [
  {
    id: "registry",
    title: "Registro (Registry)",
    description: "Inscrição inteligente de produtos com captura agnóstica de dados.",
    detail: "Fluxo: Captura > Conferência > Atributos > Resultado.",
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="h-4 w-4 rounded bg-blue-600/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 border-2 border-blue-600 border-t-0 border-l-0 rotate-45" />
             </div>
             <span className="text-[10px] font-black text-black">CAPTURA_SCANNER_V2</span>
          </div>
          <span className="text-[10px] font-mono text-blue-600 font-black">75%</span>
        </div>
        <div className="h-2 w-full bg-blue-600/10 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { t: "Scanner EAN", i: "📷" },
            { t: "Manual IA", i: "✨" },
            { t: "Lote CSV", i: "📦" },
            { t: "ERP Sync", i: "🔄" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl border border-black/[0.04] bg-white hover:border-blue-600/20 transition-colors flex items-center gap-3">
              <span className="text-sm">{item.i}</span>
              <span className="text-[10px] font-bold text-black/40 uppercase tracking-tight">{item.t}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-medium text-blue-600/60 uppercase">IA Sugerindo NCM: 8517.12.31</span>
        </div>
      </div>
    )
  },
  {
    id: "catalog",
    title: "Catálogo (Catalog)",
    description: "Gestão centralizada de SKUs com visão omnicanal em tempo real.",
    detail: "Tabela dinâmica com controle de estoque e precificação inteligente.",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {["ML", "AZ", "SH"].map(c => (
              <div key={c} className="h-6 w-6 rounded-lg bg-black/[0.04] flex items-center justify-center text-[8px] font-black text-black/30">{c}</div>
            ))}
          </div>
          <div className="h-6 w-20 bg-emerald-500/10 text-emerald-600 text-[10px] font-black flex items-center justify-center rounded-full">12 ATIVOS</div>
        </div>
        <div className="space-y-2">
          {[
            { name: "iPhone 15 Pro Max", sku: "IPH-15-PM", price: "R$ 8.999", stock: "45", channels: 3 },
            { name: "MacBook Air M3", sku: "MAC-M3-13", price: "R$ 12.499", stock: "12", channels: 2 },
            { name: "AirPods Pro 2", sku: "AIR-P2-GEN", price: "R$ 2.199", stock: "89", channels: 3 }
          ].map((prod, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-black/[0.03] bg-white group hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-black/5 flex items-center justify-center overflow-hidden">
                   <div className="h-6 w-4 bg-black/10 rounded" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-black">{prod.name}</div>
                  <div className="text-[8px] text-black/30 font-mono">{prod.sku}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black text-black">{prod.price}</div>
                <div className="flex gap-1 justify-end mt-1">
                   {[...Array(prod.channels)].map((_, i) => <div key={i} className="h-1 w-1 rounded-full bg-emerald-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Dashboard de saúde do catálogo e monitoramento de market share.",
    detail: "Métricas de SEO Health e volume de inventário por canal.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-600/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20">
               <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
            </div>
            <div className="text-3xl font-black text-blue-600 tracking-tighter">99.4%</div>
            <div className="text-[8px] font-black text-blue-600/40 uppercase tracking-widest mt-2">SEO Health Score</div>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 text-center">
             <div className="text-3xl font-black text-emerald-600 tracking-tighter">R$ 83k</div>
             <div className="text-[8px] font-black text-emerald-600/40 uppercase tracking-widest mt-2">Inventory Value</div>
          </div>
        </div>
        <div className="h-40 w-full rounded-2xl bg-[#fafafa] border border-black/[0.03] p-6 relative overflow-hidden">
           <div className="flex justify-between items-end h-full gap-2">
              {[20, 45, 30, 60, 40, 80, 50, 90, 65, 85].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-600/5 rounded-t-sm"
                />
              ))}
           </div>
           <div className="absolute top-4 left-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">Growth Performance</span>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "analysis",
    title: "Análise (Analysis)",
    description: "War Room para análise de anúncios concorrentes e benchmark de mercado.",
    detail: "Monitoramento de buy-box e análise de elasticidade de preço.",
    content: (
      <div className="space-y-4">
        <div className="p-6 rounded-3xl border border-blue-600/20 bg-blue-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-16 w-16 bg-blue-600/5 blur-2xl rounded-full" />
          <div className="text-[8px] font-black text-blue-600 uppercase mb-3">Marketplace Intelligence</div>
          <div className="flex gap-4 items-center">
             <div className="h-10 w-10 rounded-xl bg-white border border-black/5 flex items-center justify-center font-black text-blue-600 text-xs">A</div>
             <div className="flex-1 h-3 bg-white rounded-full border border-black/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-blue-600" />
             </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {["Competitor A: R$ 8.450 (-2%)", "Competitor B: R$ 8.900 (+4%)", "Competitor C: R$ 8.299 (-5%)"].map((comp, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/[0.03] hover:border-blue-600/10 transition-colors">
              <span className="text-[10px] font-bold text-black/60">{comp.split(':')[0]}</span>
              <span className={`text-[10px] font-black ${comp.includes('-') ? 'text-emerald-500' : 'text-rose-500'}`}>{comp.split(':')[1]}</span>
            </div>
          ))}
        </div>
        <button className="w-full py-4 rounded-2xl bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-600 transition-all group">
          Abrir War Room <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    )
  },
  {
    id: "sales",
    title: "Vendas (Sales)",
    description: "Controle absoluto de pedidos e faturamento NF-e automatizado.",
    detail: "Status de integração com faturamento e pendências fiscais.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {[
            { l: "Revenue", v: "R$ 124k", c: "text-emerald-500", i: "📈" },
            { l: "Orders", v: "1,242", c: "text-blue-500", i: "🛒" },
            { l: "Avg Ticket", v: "R$ 102", c: "text-amber-500", i: "💎" }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-3xl bg-[#fafafa] border border-black/[0.03] text-center group hover:bg-white transition-all">
              <div className="text-lg mb-1">{stat.i}</div>
              <div className={`text-sm font-black ${stat.c}`}>{stat.v}</div>
              <div className="text-[7px] font-black text-black/20 uppercase mt-1 tracking-widest">{stat.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
           <div className="flex justify-between items-center">
              <div className="text-[8px] font-black text-black/30 uppercase tracking-widest">Recent Flux</div>
              <div className="h-1 w-12 bg-black/5 rounded-full" />
           </div>
           {[1, 2, 3].map(i => (
             <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-black/[0.02] bg-white">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-xs">✓</div>
                <div className="flex-1 ml-4">
                   <div className="h-2 w-24 bg-black/5 rounded-full mb-2" />
                   <div className="h-1.5 w-12 bg-black/[0.02] rounded-full" />
                </div>
                <div className="text-[10px] font-black text-black/60">R$ {120 * i},90</div>
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    id: "support",
    title: "Suporte (Support)",
    description: "Central de atendimento unificada com histórico de pedidos.",
    detail: "Chat multi-agente integrado diretamente ao fluxo de pedidos.",
    content: (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end p-4 rounded-[24px] rounded-tr-none bg-blue-600 text-white text-[11px] font-medium max-w-[80%] shadow-lg shadow-blue-600/20">
            Olá, meu pedido #1242 ainda não foi postado. Gostaria de uma previsão.
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="self-start p-4 rounded-[24px] rounded-tl-none bg-white border border-black/[0.05] text-black/70 text-[11px] font-medium max-w-[80%] shadow-sm">
            Olá Lucas! Verificamos aqui. O pagamento foi aprovado e o produto já está em separação. A postagem ocorre até às 17h de hoje.
          </motion.div>
          <div className="flex gap-1 ml-4 mt-2">
             <div className="h-1.5 w-1.5 bg-black/10 rounded-full animate-bounce" />
             <div className="h-1.5 w-1.5 bg-black/10 rounded-full animate-bounce [animation-delay:0.2s]" />
             <div className="h-1.5 w-1.5 bg-black/10 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        </div>
        <div className="mt-6 p-4 rounded-2xl border border-black/5 bg-white flex items-center justify-between shadow-inner">
          <span className="text-[10px] text-black/20 font-medium tracking-tight">Digite sua resposta corporativa...</span>
          <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <div className="h-2 w-2 border-t-2 border-r-2 border-white rotate-45 -ml-0.5" />
          </div>
        </div>
      </div>
    )
  }
];

export default function ProductWalkthrough() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-mono">Especificações Técnicas</h2>
          <h3 className="text-4xl sm:text-7xl font-black tracking-tight text-black leading-tight">
            Como o Motor Linxar <br/> transforma sua operação.
          </h3>
          <p className="mt-8 text-black/40 font-medium text-sm tracking-[0.2em] uppercase">Simulação Real-Time do Ecossistema</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Navegação Vertical de Slides */}
          <div className="lg:col-span-4 space-y-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setActiveSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-full text-left p-6 rounded-[24px] transition-all duration-500 relative group flex gap-4 items-center ${
                  activeSlide === index 
                    ? "bg-[#fafafa] shadow-[0_4px_20px_rgba(0,0,0,0.03)] scale-[1.02]" 
                    : "bg-transparent hover:bg-black/[0.01]"
                }`}
              >
                <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 scale-[2] ${
                  activeSlide === index ? "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" : "bg-black/10"
                }`} />
                <div>
                  <h4 className={`text-sm font-black uppercase tracking-widest transition-colors ${
                    activeSlide === index ? "text-black" : "text-black/30"
                  }`}>
                    {slide.title}
                  </h4>
                  {activeSlide === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-[11px] text-black/50 mt-1 font-medium leading-tight"
                    >
                      {slide.description}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Vizualização do Dashboard (Mockup Hub) */}
          <div className="lg:col-span-8 relative">
             <div className="rounded-[40px] border border-black/[0.08] bg-[#fdfdfd] shadow-2xl overflow-hidden p-2 aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[580px]">
                <div className="h-full w-full rounded-[32px] bg-white overflow-hidden relative border border-black/[0.02] flex flex-col">
                   {/* Header do Hub Mockup */}
                   <div className="h-14 border-b border-black/[0.04] bg-[#fafafa] px-8 flex items-center justify-between">
                      <div className="flex gap-1.5">
                         <div className="h-2.5 w-2.5 rounded-full bg-black/[0.06]" />
                         <div className="h-2.5 w-2.5 rounded-full bg-black/[0.06]" />
                         <div className="h-2.5 w-2.5 rounded-full bg-black/[0.06]" />
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex gap-4">
                           {["Cadastro", "Catálogo", "Vendas", "Análise"].map((tab) => (
                             <div key={tab} className={`text-[9px] font-black uppercase tracking-widest ${tab === slides[activeSlide]?.title.split(' ')[0] ? 'text-blue-600' : 'text-black/20'}`}>
                               {tab}
                             </div>
                           ))}
                        </div>
                        <div className="h-8 w-8 rounded-full bg-blue-600/10 flex items-center justify-center text-[10px] font-black text-blue-600">LF</div>
                      </div>
                   </div>

                   {/* Main Content Area */}
                   <div className="flex-1 p-8 sm:p-12 relative overflow-hidden bg-[#fafafa]/30">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="h-full flex flex-col"
                        >
                           <div className="mb-8">
                             <div className="h-6 w-48 bg-black/5 rounded-lg mb-2" />
                             <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em]">{slides[activeSlide]?.detail}</p>
                           </div>
                           
                           <div className="flex-1">
                              {slides[activeSlide]?.content}
                           </div>

                           {/* Branding sutil dentro do mockup */}
                           <div className="mt-8 pt-8 border-t border-black/[0.03] flex justify-between items-center">
                              <div className="flex gap-2">
                                 {[1,2,3].map(i => <div key={i} className="h-1 w-6 bg-black/[0.04] rounded-full" />)}
                              </div>
                              <span className="text-[8px] font-mono text-black/10 uppercase tracking-[0.4em]">LINXAR_HUB_STABLE_V5.2</span>
                           </div>
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>
             </div>

             {/* Indicadores de progresso do AutoPlay */}
             <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-300 rounded-full ${activeSlide === i ? 'w-12 bg-blue-600' : 'w-4 bg-black/10'}`} 
                  />
                ))}
             </div>

             {/* Efeitos de profundidade */}
             <div className="absolute -z-10 -top-12 -right-12 h-64 w-64 bg-blue-600/5 blur-[100px] rounded-full" />
             <div className="absolute -z-10 -bottom-12 -left-12 h-64 w-64 bg-emerald-600/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
