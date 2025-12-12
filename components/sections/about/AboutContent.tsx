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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-blue-50 to-white"
        />
        <Container>
          <div className="pt-10 sm:pt-12 pb-6 border-b border-black/5">
            <motion.p
              className="text-xs uppercase tracking-widest text-black/50"
              initial={reduced ? undefined : { opacity: 0, y: -6 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Quem Somos
            </motion.p>
            <motion.h1
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight"
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Tecnologia brasileira para escalar sua operação
            </motion.h1>
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
      <section className="py-8 sm:py-10">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-[22px] sm:text-3xl font-semibold tracking-tight">
              De Seven Layers para LINXAR
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
              Iniciamos como <strong>Seven Layers Soluções</strong> — nome do nosso CNPJ na origem.
              Durante a pré-incubação e mentoria na UTFPR, com orientação de especialistas como
              <strong> Carina Rau</strong> (Propriedade Intelectual), evoluímos nossa estratégia de marca
              para refletir melhor a proposta de valor e a escalabilidade do produto. Assim nasceu a
              <strong> LINXAR</strong>, sintetizando integração, inteligência e velocidade.
            </p>

            {/* SOMENTE: FCGROUP, SEVEN LAYERS, LINXAR — logos maiores sem alterar cards */}
            <BrandStrip
              className="mt-5"
              size="sm"
              logoClassName="max-h-16 sm:max-h-20" // aumenta só a logo
              logos={[
                { src: "/logos/fcg.png", alt: "FCGROUP — Fedumenti Group" },
                { src: "/logos/seven.png", alt: "Seven Layers Soluções" },
                { src: "/logos/linxar.png", alt: "LINXAR" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Ambiente de Inovação (Sprint – UTFPR) */}
      <section className="py-8 sm:py-10">
        <Container>
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
            <h2 className="text-[22px] sm:text-3xl font-semibold tracking-tight">
              Ambiente de Inovação (Sprint — UTFPR)
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
              Estamos inseridos no ecossistema da <strong>Sprint Incubadora (UTFPR/Guarapuava)</strong>,
              mecanismo do PROEM que apoia empresas inovadoras de base tecnológica. A incubadora oferece
              infraestrutura de laboratórios, mentorias e capacitações alinhadas à rede UTFPR.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ul className="rounded-2xl border border-black/10 bg-black/[0.035] p-4 text-[14px] leading-[1.55]">
                <li>• Laboratórios e suporte técnico</li>
                <li>• Mentorias e capacitações</li>
                <li>• Conexão com a rede UTFPR</li>
                <li>• Comunidade de inovação local</li>
                <li className="mt-2">
                  Fonte:{" "}
                  <Link href="https://incubadora.gp.utfpr.edu.br" target="_blank" className="underline">
                    incubadora.gp.utfpr.edu.br
                  </Link>
                </li>
              </ul>
              <div className="rounded-2xl border border-black/10 overflow-hidden">
                <Image
                  src="/assets/incubacao.png"
                  alt="Equipe incubada na Sprint — UTFPR"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Onde estamos + Mapa */}
      <section className="pb-12 sm:pb-14">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
              <h3 className="text-base font-semibold">Onde estamos</h3>
              <p className="mt-1 text-sm text-black/70">
                Avenida Professora Laura Pacheco Bastos, 800 — Bloco R, 1º Andar,
                CEP 85053-525 — Guarapuava/PR
              </p>
              <div className="mt-3">
                <Link
                  href="https://www.google.com/maps/place/UTFPR+GP+-+Bloco+R/@-25.3501154,-51.4812066,1045m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ef3719282e844b:0x5c48348eb637e859!8m2!3d-25.3501203!4d-51.4786263!16s%2Fg%2F11c1ngyyyz?hl=pt-BR"
                  target="_blank"
                  className="btn btn-ghost"
                >
                  Ver no Google Maps
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 overflow-hidden">
              <iframe
                title="Mapa UTFPR GP — Bloco R"
                src="https://www.google.com/maps?q=-25.3501203,-51.4786263&z=17&hl=pt-BR&output=embed"
                className="h-[260px] w-full"
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
