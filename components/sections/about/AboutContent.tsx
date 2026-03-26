// components/sections/about/AboutContent.tsx
"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import BrandStrip from "@/components/ui/BrandStrip";

export default function AboutContent() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background Aurora-friendly */}
        <Container>
          <div className="pt-28 sm:pt-36 pb-6 border-b border-black/5">
            <motion.p
              className="text-xs uppercase tracking-widest text-black/50"
              initial={reduced ? undefined : { opacity: 0, y: -6 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Quem Somos
            </motion.p>
            <motion.h2
              className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-black"
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Tecnologia brasileira para escalar sua operação
            </motion.h2>
            <motion.p
              className="mt-2 max-w-3xl text-black/70"
              initial={reduced ? undefined : { opacity: 0, y: 6 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              A <strong>LINXAR</strong> é uma marca/produto da <strong>FCGROUP</strong> (Fedumenti Group).
              Nascemos da prática com sellers e PMEs, somando engenharia e design para
              otimizar listagens e integrar marketplaces de ponta a ponta.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* História / Rebranding */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              De Seven Layers para LINXAR
            </h2>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-black/60">
              Iniciamos como <strong>Seven Layers Soluções</strong> — nome do nosso CNPJ na origem.
              Durante a pré-incubação e mentoria na UTFPR, com orientação de especialistas, evoluímos nossa estratégia de marca
              para refletir melhor a proposta de valor e a escalabilidade do produto. Assim nasceu a
              <strong> LINXAR</strong>, sintetizando integração, inteligência e velocidade.
            </p>

            {/* SOMENTE: FCGROUP, SEVEN LAYERS, LINXAR — logos maiores sem alterar cards */}
            <BrandStrip
              className="mt-12"
              size="md"
              logoClassName="max-h-16 sm:max-h-24" // aumenta só a logo
              logos={[
                { src: "/logos/fcg.png", alt: "FCGROUP — Fedumenti Group" },
                { src: "/logos/seven.png", alt: "Seven Layers Soluções" },
                { src: "/logos/linxar.png", alt: "LINXAR" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Propósito e Infraestrutura */}
      <section className="py-24 sm:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 -z-10" />
        <Container>
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Nossa Essência</h2>
              <p className="mt-8 text-3xl font-bold leading-tight text-black">
                A LINXAR é a infraestrutura que conecta dados, automação e vendas.
              </p>
              <p className="mt-8 text-black/60 text-lg leading-relaxed">
                Transformamos o caos operacional do cadastro de produtos em crescimento escalável com IA omnicanal. 
                Cadastro não pode ser gargalo. Tem que ser vantagem competitiva.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Missão */}
              <div className="rounded-[40px] border border-black/[0.03] bg-white/40 backdrop-blur-xl p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-black/[0.02]">
                <h3 className="text-xl font-bold text-black">Missão</h3>
                <p className="mt-6 text-base leading-relaxed text-black/60">
                  Automatizar e escalar a operação de produtos no varejo digital, utilizando inteligência artificial 
                  para eliminar tarefas manuais, reduzir erros e impulsionar resultados.
                </p>
              </div>
              
              {/* Visão */}
              <div className="rounded-[40px] border border-black/[0.03] bg-white/40 backdrop-blur-xl p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-black/[0.02]">
                <h3 className="text-xl font-bold text-black">Visão</h3>
                <p className="mt-6 text-base leading-relaxed text-black/60">
                  Ser a principal infraestrutura de automação de produtos para marketplaces na América Latina, 
                  tornando-se referência em escala, eficiência e inteligência operacional.
                </p>
              </div>
            </div>
          </div>

          {/* Valores - Grid Horizontal */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { t: "Eficiência radical", d: "Cortar o que não gera resultado." },
              { t: "Escala obrigatória", d: "Se não escala, não serve." },
              { t: "Simplicidade inteligente", d: "Complexo por dentro, simples por fora." },
              { t: "Resultado acima de ferramenta", d: "O cliente não quer software, quer vender mais." },
              { t: "Evolução contínua", d: "Nunca está pronto, sempre melhorando." }
            ].map((v, i) => (
              <div key={i} className="p-6 border-l border-blue-600/10 hover:border-blue-600 transition-colors">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">{v.t}</h4>
                <p className="mt-3 text-xs text-black/40 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Shark Tank Pitch Narrative */}
      <section className="py-24 sm:py-48 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400 mb-16 opacity-50">Por que LINXAR?</h2>
            <div className="space-y-12">
              <p className="text-4xl sm:text-6xl font-light leading-tight tracking-tight">
                “Se o seu crescimento depende de <span className="text-blue-400 font-medium italic">cadastro manual</span>, seu negócio já está travado.”
              </p>
              <div className="h-px w-24 bg-blue-600/30 mx-auto" />
              <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-light italic max-w-3xl mx-auto">
                A Linxar resolve isso com inteligência artificial omnicanal: você escaneia um código de barras, 
                e a plataforma gera automaticamente SEO e publica em múltiplos canais. 
                Transformamos operação em escala — e escala em vendas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ambiente de Inovação (Sprint – UTFPR) */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="rounded-[48px] border border-black/[0.04] bg-white/30 backdrop-blur-xl p-10 sm:p-16 shadow-soft">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Ambiente de Inovação (Sprint — UTFPR)
            </h2>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-black/60">
              Estamos inseridos no ecossistema da <strong>Sprint Incubadora (UTFPR/Guarapuava)</strong>,
              mecanismo do PROEM que apoia empresas inovadoras de base tecnológica. 
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ul className="rounded-3xl border border-black/[0.05] bg-white/20 backdrop-blur-md p-8 text-base space-y-4">
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/> Laboratórios e suporte técnico</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/> Mentorias e capacitações</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/> Conexão com a rede UTFPR</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/> Comunidade de inovação local</li>
                <li className="mt-6 pt-6 border-t border-black/5">
                  <Link href="https://incubadora.gp.utfpr.edu.br" target="_blank" className="font-bold text-blue-600 hover:underline">
                    Conheça a Incubadora →
                  </Link>
                </li>
              </ul>
              <div className="rounded-3xl border border-black/10 overflow-hidden shadow-2xl">
                <Image
                  src="/assets/incubacao.png"
                  alt="Equipe incubada na Sprint — UTFPR"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Onde estamos + Mapa */}
      <section className="pb-24 sm:pb-40 px-4">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[40px] border border-black/[0.04] bg-white/30 backdrop-blur-xl p-8 sm:p-12 shadow-soft">
              <h3 className="text-xl font-bold italic tracking-tight">Onde estamos</h3>
              <p className="mt-4 text-base text-black/60 leading-relaxed">
                Avenida Professora Laura Pacheco Bastos, 800 — Bloco R, 1º Andar,<br/>
                CEP 85053-525 — Guarapuava/PR
              </p>
              <div className="mt-8">
                <Link
                  href="https://www.google.com/maps/place/UTFPR+GP+-+Bloco+R/@-25.3501154,-51.4812066,1045m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ef3719282e844b:0x5c48348eb637e859!8m2!3d-25.3501203!4d-51.4786263!16s%2Fg%2F11c1ngyyyz?hl=pt-BR"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-black text-white px-8 py-4 text-sm font-bold shadow-xl transition hover:bg-zinc-800"
                >
                  Abrir no Google Maps
                </Link>
              </div>
            </div>
            <div className="rounded-[40px] border border-black/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Mapa UTFPR GP — Bloco R"
                src="https://www.google.com/maps?q=-25.3501203,-51.4786263&z=17&hl=pt-BR&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
