// components/sections/NetworkIntelligence.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function NetworkIntelligence() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white overflow-hidden relative">
      <div aria-hidden="true" className="absolute top-0 right-0 h-96 w-96 bg-blue-600/10 blur-[100px] -z-0" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/5 blur-[120px] -z-0" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">Motor de Escala</h2>
          <p className="mt-8 text-4xl sm:text-6xl font-bold tracking-tighter leading-none">
            A inteligência que evolui <br/> com o mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-4">
            {[
              { 
                title: "Infraestrutura Confiável", 
                desc: "Arquitetura desenhada para suportar grandes volumes de dados com integridade absoluta." 
              },
              { 
                title: "Vantagem Competitiva", 
                desc: "Otimização contínua baseada em padrões globais de alta performance e conversão." 
              },
              { 
                title: "Segurança Avançada", 
                desc: "Sua operação integrada sob rígidos padrões de proteção e governança." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-5 p-6 rounded-[24px] border border-white/5 bg-white/[0.03] transition-colors hover:bg-white/[0.06]"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(37,99,235,1)]" />
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-sm text-white/40 mt-1 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square flex items-center justify-center scale-75 sm:scale-100">
               {/* Centro visual */}
               <div className="h-40 w-40 rounded-[40px] bg-blue-600 shadow-[0_0_80px_rgba(37,99,235,0.4)] flex items-center justify-center z-20 transition-transform hover:scale-105 duration-500">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2v10M18.4 4.6l-7 7M11.6 11.6l-7-7M12 22v-10M5.6 19.4l7-7M19.4 19.4l-7-7"/></svg>
               </div>
               
               {/* Linhas de órbita */}
               <div className="absolute h-[320px] w-[320px] rounded-full border border-white/5" />
               <div className="absolute h-[480px] w-[480px] rounded-full border border-white/[0.02]" />
               
               {/* Elementos orbitais */}
               {[0, 72, 144, 216, 288].map((deg, i) => (
                 <motion.div
                   key={i}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 z-10"
                   style={{ rotate: deg }}
                 >
                   <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center absolute top-[-20px] left-1/2 -translate-x-1/2">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
