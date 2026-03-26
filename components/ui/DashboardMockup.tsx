// components/ui/DashboardMockup.tsx
"use client";

import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <div className="relative w-full h-full bg-[#fafafa] rounded-[32px] overflow-hidden flex shadow-inner">
      {/* Sidebar Simulado */}
      <div className="w-16 sm:w-20 border-r border-black/[0.04] p-4 flex flex-col items-center gap-6 bg-white/50">
        <div className="h-8 w-8 rounded-xl bg-blue-600 mb-4 flex items-center justify-center text-white text-[10px] font-black italic">LX</div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-2 w-full rounded-full bg-black/5" />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 sm:p-10 flex flex-col gap-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-2 w-32 rounded-full bg-black/10" />
            <div className="h-2 w-20 rounded-full bg-black/5" />
          </div>
          <div className="flex gap-3">
             <div className="h-8 px-4 rounded-xl border border-black/5 bg-white flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">IA ATIVA</span>
             </div>
          </div>
        </div>

        {/* Dash Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Card 1: IA Normalizer */}
           <div className="col-span-1 md:col-span-2 rounded-3xl border border-black/[0.04] bg-white p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xs font-black uppercase tracking-widest text-black/30">Motor de Normalização IA</h3>
                 <div className="h-6 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <div className="h-1 w-1 bg-blue-600 rounded-full mx-1 shadow-[0_0_8px_blue]" />
                    <div className="h-1 w-1 bg-blue-600 rounded-full mx-1 animate-ping" />
                 </div>
              </div>
              
              <div className="space-y-4">
                 {[
                   { label: "Dados Brutos", color: "bg-black/5", width: "w-full" },
                   { label: "Processamento Omnicanal", color: "bg-blue-600/10", width: "w-3/4" },
                   { label: "Publicação SEO Otimizada", color: "bg-emerald-600/10", width: "w-1/2" }
                 ].map((bar, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-black/20">
                         <span>{bar.label}</span>
                         <span>{100 - (i * 15)}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-black/[0.03] overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: bar.width }}
                           transition={{ duration: 1.5, delay: i * 0.2 }}
                           className={`h-full rounded-full ${i === 1 ? 'bg-blue-600' : i === 2 ? 'bg-emerald-500' : 'bg-black/10'}`} 
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Card 2: Marketplaces Status */}
           <div className="col-span-1 rounded-3xl border border-black/[0.04] bg-white p-6 shadow-sm flex flex-col justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30">Canais Ativos</h3>
              <div className="flex flex-wrap gap-2 my-4">
                 {['ML', 'SH', 'AMZ', 'MGL', 'VTX'].map((m, i) => (
                   <div key={i} className="h-8 w-8 rounded-lg bg-black/[0.02] border border-black/[0.04] flex items-center justify-center text-[10px] font-black text-black/20 group-hover:text-blue-600 transition-colors">
                      {m}
                   </div>
                 ))}
              </div>
              <div className="h-32 w-full rounded-2xl bg-[#fcfcfc] border border-black/[0.02] relative overflow-hidden p-4">
                 <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-blue-600/5 to-transparent shadow-[inset_0_-1px_0_rgba(0,0,0,0.02)]" />
                 <motion.div 
                   animate={{ 
                     height: ["20%", "60%", "40%", "80%", "30%"],
                     transition: { duration: 4, repeat: Infinity, repeatType: "mirror" }
                   }}
                   className="absolute bottom-0 left-4 right-4 bg-blue-600/10 border-t border-blue-600/20" 
                 />
              </div>
           </div>
        </div>

        {/* Feature List (Mock) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="h-12 rounded-2xl border border-black/[0.02] bg-white flex items-center px-4 gap-3">
                <div className="h-px w-4 bg-black/10" />
                <div className="h-1.5 w-12 rounded-full bg-black/5" />
             </div>
           ))}
        </div>
      </div>
      
      {/* Visual Depth Elements */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[32px] shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]" />
    </div>
  );
}
