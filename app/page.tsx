// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ProductContent from "@/components/sections/product/ProductContent";
import AboutNarrative from "@/components/sections/about/AboutNarrative";
import AboutCompany from "@/components/sections/about/AboutCompany";
import NetworkIntelligence from "@/components/sections/NetworkIntelligence";
import Steps from "@/components/sections/Steps";
import DashboardPreview from "@/components/sections/DashboardPreview";
import SecureMigration from "@/components/sections/SecureMigration";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "LINXAR Hub — Plataforma Inteligente de Automação de Produtos para Marketplaces",
  description:
    "A LINXAR é uma solução SaaS proprietária que utiliza IA Generativa e Motor MIP v4.6 para automatizar o cadastro, enriquecimento e sincronização de catálogos para indústrias e grandes sellers.",
};

export default function HomePage() {
  return (
    <main className="relative">
      {/* 1. VISÃO & IMPACTO INICIAL - #inicio */}
      <section id="inicio">
        <Hero />
        <DashboardPreview />
      </section>

      {/* 2. O PRODUTO & WALKTHROUGH IA - #produto */}
      <section id="produto" className="scroll-mt-20">
        <ProductContent />
      </section>

      {/* 3. AUTORIDADE & EQUIPE - #quem-somos */}
      <section id="quem-somos" className="scroll-mt-20">
        <AboutCompany />
      </section>

      {/* 4. O DIFERENCIAL TÉCNICO - #infraestrutura */}
      <section id="infraestrutura" className="scroll-mt-20">
        <NetworkIntelligence />
      </section>

      {/* 5. OS PILARES FUNCIONAIS & MARKETPLACES - #recursos */}
      <section id="recursos" className="scroll-mt-20">
        <Features />
      </section>

      {/* 6. JORNADA DE IMPLEMENTAÇÃO - #como-funciona */}
      <section id="como-funciona" className="scroll-mt-20">
        <Steps />
      </section>

      {/* 7. SEGURANÇA NA TRANSIÇÃO - #migracao */}
      <section id="migracao" className="scroll-mt-20">
        <SecureMigration />
      </section>

      {/* 8. VALIDAÇÃO SOCIAL - #depoimentos */}
      <section id="depoimentos" className="scroll-mt-20">
        <Testimonials />
      </section>

      {/* 10. FECHAMENTO & CTA */}
      <section className="py-24 sm:py-32 bg-[#020202] text-white relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl rounded-[48px] border border-white/5 bg-white/[0.02] p-8 sm:p-20 text-center backdrop-blur-3xl shadow-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.1]">
              Pronto para alavancar <br/> suas vendas com IA?
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-white/50 leading-relaxed font-medium">
              Comece a otimizar seus anúncios hoje mesmo com o motor de inteligência da LINXAR.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://hub.linxar.com.br/login"
                className="rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                Começar Agora
              </a>
              <a href="https://wa.me/5542999217736" className="text-lg font-bold text-white/70 hover:text-white transition-colors">
                Falar com consultor <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
