// components/sections/product/ProductContent.tsx
"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

function Chip({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <span
      id={id}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.035] px-3 py-1 text-xs text-black/60"
    >
      {children}
    </span>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-black/70 leading-relaxed">{children}</p>
    </div>
  );
}

export default function ProductContent() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Cabeçalho + valor */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="pt-8 pb-4 sm:pt-10 sm:pb-5">
            <Chip id="proposito">Nosso propósito</Chip>
            <motion.h1
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight"
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              Como a <span className="text-blue-600">LINXAR</span> destrava sua operação
            </motion.h1>
            <p className="mt-2 max-w-3xl text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
              Um único cadastro, múltiplos anúncios otimizados e publicados nos principais canais —
              com catálogo consistente, SEO pronto e controle centralizado.
            </p>

            {/* Benefícios em cards */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard title="Mais conversão">
                Conteúdo otimizado para SEO e políticas de cada canal.
              </FeatureCard>
              <FeatureCard title="Menos retrabalho">
                Um cadastro, múltiplos anúncios prontos em minutos.
              </FeatureCard>
              <FeatureCard title="Catálogo consistente">
                Atributos e imagens padronizados em todos os canais.
              </FeatureCard>
              <FeatureCard title="Operação centralizada">
                Pedidos, estoque e performance em um só lugar.
              </FeatureCard>
            </div>
          </div>
        </Container>
      </section>

      {/* 1) O GARGALO (primeiro) */}
      <section className="py-6 sm:py-7">
        <Container>
          <Chip id="porque-agora">Por que agora</Chip>
          <h2 className="mt-2 text-[22px] sm:text-3xl font-semibold tracking-tight">
            O gargalo que trava seu crescimento
          </h2>
          <p className="mt-2 max-w-4xl text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
            Pequenas e médias empresas perdem margem e velocidade tentando manter anúncios
            atualizados em vários marketplaces. Criar títulos e descrições de qualidade,
            padronizar atributos, subir imagens, publicar e ainda acompanhar pedidos/estoque
            em plataformas diferentes exige tempo, know-how e ferramentas caras. A consequência:
            baixa conversão, catálogo inconsistente e uma operação espalhada que não escala.
          </p>
        </Container>
      </section>

      {/* 2) Como a LINXAR destrava (depois) */}
      <section className="py-6 sm:py-7">
        <Container>
          <Chip id="como-funciona">Como funciona</Chip>
          <h2 className="mt-2 text-[22px] sm:text-3xl font-semibold tracking-tight">
            Como a LINXAR destrava sua operação
          </h2>
          <p className="mt-2 max-w-4xl text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
            A LINXAR é uma plataforma SaaS com motor de otimização por IA generativa. A partir
            de um único cadastro, criamos automaticamente títulos, descrições, imagens, atributos
            e FAQs, prontos para SEO e diretrizes de cada canal. Em seguida, publicamos via API
            nos marketplaces (Shopee, Amazon, Mercado Livre e outros), mantendo vendas, pedidos,
            estoque e performance centralizados. Resultado: previsibilidade e eficiência para
            escalar sem contratar mais gente.
          </p>
          {/* 🔥 Removidos os botões/links de ação conforme solicitado */}
        </Container>
      </section>

      {/* Fechamento */}
      <section className="py-6 sm:py-8">
        <Container>
          <h2 className="text-[22px] sm:text-3xl font-semibold tracking-tight">
            Resultados reais em marketplaces, sem aumentar a equipe
          </h2>
          <p className="mt-2 max-w-4xl text-[15px] sm:text-[16px] leading-[1.55] text-black/75">
            Com a LINXAR, sua operação sai do retrabalho e ganha escala: um cadastro vira múltiplos
            anúncios otimizados e publicados nos principais canais — com catálogo consistente, SEO
            pronto e controle centralizado.
          </p>
        </Container>
      </section>
    </>
  );
}
  