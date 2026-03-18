// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import NetworkIntelligence from "@/components/sections/NetworkIntelligence";
import Steps from "@/components/sections/Steps";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "LINXAR — O motor de INTELIGÊNCIA que padroniza seu e-commerce",
  description:
    "A LINXAR utiliza aprendizado em rede de sellers para padronizar e enriquecer dados de produtos automaticamente para todos os marketplaces.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO - Unificado com suporte a vídeo opcional */}
      <Hero />

      {/* 2. FLUXAR AI - Core Features Bento Grid */}
      <Features />

      {/* 3. NETWORK INTELLIGENCE - Diferencial Tecnológico */}
      <NetworkIntelligence />

      {/* 4. PASSOS / STEPS - Demonstração visual */}
      <Steps />

      {/* 5. TESTIMONIALS - Feedback real */}
      <Testimonials />

      {/* 6. CALL TO ACTION - Final de página */}
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
                href="/demo"
                className="rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                Começar Agora
              </a>
              <a href="/contato" className="text-lg font-bold text-white/70 hover:text-white transition-colors">
                Falar com consultor <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
