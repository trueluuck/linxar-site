// components/sections/about/AboutCompany.tsx
"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import BrandStrip from "@/components/ui/BrandStrip";

export default function AboutCompany() {
  const reduced = useReducedMotion();

  return (
    <div className="scroll-mt-20">
      {/* Liderança e Autoridade */}
      <section className="py-24 sm:py-32 border-t border-black/[0.04] bg-[#fafafa]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8">Liderança e Tecnologia</p>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-black leading-[1.05]">
                Guiados por quem vive <br className="hidden sm:block"/> o varejo digital.
              </h2>
              <p className="mt-8 text-lg text-black/60 leading-relaxed font-medium max-w-xl">
                A LINXAR é liderada por especialistas que entendem a dor do lojista. 
                Sob a visão de Lucas Fedumenti, unimos engenharia de software e inteligência artificial 
                para criar a infraestrutura que indústrias e grandes sellers utilizam para escalar.
              </p>
              
              <div className="mt-12 group">
                <Link 
                   href="https://www.linkedin.com/in/lucas-fedumenti-castro-69681bb1/" 
                   target="_blank"
                   className="inline-flex items-center gap-4 p-4 rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-xl hover:border-blue-600/20 transition-all font-outfit"
                >
                  <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white overflow-hidden font-black">
                     LF
                  </div>
                  <div>
                    <h4 className="font-bold text-black tracking-tight">Lucas Fedumenti</h4>
                    <p className="text-[10px] text-black/40 font-black uppercase tracking-widest">CEO & Founder</p>
                  </div>
                  <div className="ml-4 h-10 w-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
                  <p className="font-black text-blue-600 text-xs uppercase tracking-widest mb-3">Escopo Digital</p>
                  <p className="text-sm text-black/60 leading-relaxed font-medium">Plataforma nativa em nuvem para automação de ativos digitais.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
                  <p className="font-black text-blue-600 text-xs uppercase tracking-widest mb-3">P&D Institucional</p>
                  <p className="text-sm text-black/60 leading-relaxed font-medium">Tecnologia validada no ambiente de inovação da UTFPR.</p>
               </div>
            </div>
          </div>
        </Container>
      </section>


      {/* 2. História / Rebranding */}
      <section className="py-24 sm:py-32 border-t border-black/[0.04]">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              De Seven Layers para LINXAR
            </h2>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-black/60 font-medium">
              Iniciamos como <strong>Seven Layers Soluções</strong> — nome do nosso CNPJ na origem.
              Durante a pré-incubação e mentoria na UTFPR, com orientação de especialistas, evoluímos nossa estratégia de marca
              para refletir melhor a proposta de valor e a escalabilidade do produto. Assim nasceu a
              <strong> LINXAR</strong>, sintetizando integração, inteligência e velocidade.
            </p>

            <BrandStrip
              className="mt-16"
              size="md"
              logoClassName="max-h-16 sm:max-h-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
              logos={[
                { src: "/logos/fcg.png", alt: "FCGROUP — Fedumenti Group" },
                { src: "/logos/seven.png", alt: "Seven Layers Soluções" },
                { src: "/logos/linxar.png", alt: "LINXAR" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* 3. Essência / Missão / Visão */}
      <section className="py-24 sm:py-40 relative overflow-hidden bg-[#020202] text-white">
        <div className="absolute inset-0 bg-blue-600/[0.03] -z-10" />
        <Container>
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-400">Nossa Essência</h2>
              <p className="mt-10 text-3xl font-black leading-tight text-white tracking-tight">
                A LINXAR é a infraestrutura que conecta dados, automação e vendas.
              </p>
              <p className="mt-10 text-white/50 text-lg leading-relaxed font-medium">
                Transformamos o caos operacional do cadastro de produtos em crescimento escalável com IA omnicanal. 
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[48px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 shadow-2xl">
                <h3 className="text-2xl font-black text-white">Missão</h3>
                <p className="mt-8 text-lg leading-relaxed text-white/40 font-medium italic">
                  Automatizar e escalar a operação de produtos no varejo digital, utilizando inteligência artificial 
                  para eliminar tarefas manuais, reduzir erros e impulsionar resultados.
                </p>
              </div>
              
              <div className="rounded-[48px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 shadow-2xl">
                <h3 className="text-2xl font-black text-white">Visão</h3>
                <p className="mt-8 text-lg leading-relaxed text-white/40 font-medium italic">
                  Ser a principal infraestrutura de automação de produtos para marketplaces na América Latina.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-2 lg:grid-cols-5 gap-12">
            {[
              { t: "Eficiência radical", d: "Cortar o que não gera resultado." },
              { t: "Escala obrigatória", d: "Se não escala, não serve." },
              { t: "Simplicidade inteligente", d: "Complexo por dentro, simples por fora." },
              { t: "Resultado acima de ferramenta", d: "O cliente não quer software, quer vender mais." },
              { t: "Evolução contínua", d: "Nunca está pronto, sempre melhorando." }
            ].map((v, i) => (
              <div key={i} className="p-8 border-l border-white/5 hover:border-blue-600 transition-colors group">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400">{v.t}</h4>
                <p className="mt-4 text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-widest group-hover:text-white/60 transition-colors">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Ambiente de Inovação */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="rounded-[64px] border border-black/[0.04] bg-[#fafafa] p-10 sm:p-20 shadow-soft relative overflow-hidden">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-black leading-[1.05]">
              Ambiente de Inovação <br/> (Sprint — UTFPR)
            </h2>
            <p className="mt-10 text-xl leading-relaxed text-black/60 font-medium max-w-3xl text-pretty">
              Estamos inseridos no ecossistema da <strong>Sprint Incubadora (UTFPR/Guarapuava)</strong>,
              mecanismo do PROEM que apoia empresas inovadoras de base tecnológica. 
            </p>
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <ul className="rounded-[40px] border border-black/[0.04] bg-white p-12 text-lg space-y-6 shadow-sm glass-reflection">
                <li className="flex items-center gap-4 font-bold text-black/80 tracking-tight"><div className="h-2 w-2 rounded-full bg-blue-600"/> Laboratórios e suporte técnico</li>
                <li className="flex items-center gap-4 font-bold text-black/80 tracking-tight"><div className="h-2 w-2 rounded-full bg-blue-600"/> Mentorias e capacitações</li>
                <li className="flex items-center gap-4 font-bold text-black/80 tracking-tight"><div className="h-2 w-2 rounded-full bg-blue-600"/> Conexão com a rede UTFPR</li>
                <li className="flex items-center gap-4 font-bold text-black/80 tracking-tight"><div className="h-2 w-2 rounded-full bg-blue-600"/> Comunidade de inovação local</li>
                <li className="mt-8 pt-8 border-t border-black/5">
                  <Link href="https://incubadora.gp.utfpr.edu.br" target="_blank" className="btn-premium inline-block">
                    Conheça a Incubadora →
                  </Link>
                </li>
              </ul>
              <div className="rounded-[48px] border border-black/10 overflow-hidden shadow-2xl relative group">
                <Image
                  src="/assets/incubacao.png"
                  alt="Equipe incubada na Sprint — UTFPR"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
