// components/sections/NetworkIntelligence.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function NetworkIntelligence() {
  return (
    <section className="py-32 sm:py-48 bg-black text-white overflow-hidden relative">
      <div aria-hidden="true" className="absolute top-0 right-0 h-96 w-96 bg-blue-600/10 blur-[120px] -z-0" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/5 blur-[150px] -z-0" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-32">
          <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-8 inline-block">Infraestrutura de Crescimento</h2>
          <p className="text-4xl sm:text-7xl font-black tracking-tighter leading-[1.05] text-balance">
            A inteligência funcional <br/> para escala <span className="italic font-light text-white/40">operacional.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group flex gap-8 p-10 rounded-[40px] border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.08] hover:translate-x-2 glass-reflection shadow-2xl"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-base text-white/40 mt-3 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square flex items-center justify-center scale-75 sm:scale-100">
               {/* Centro visual */}
               <div className="h-44 w-44 rounded-[40px] bg-white shadow-[0_0_100px_rgba(37,99,235,0.3)] flex items-center justify-center z-20 transition-transform hover:scale-105 duration-500 p-6 glass-reflection">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/logos/linxar.png" 
                      alt="LINXAR" 
                      fill 
                      className="object-contain" 
                      priority
                      quality={100}
                    />
                  </div>
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
