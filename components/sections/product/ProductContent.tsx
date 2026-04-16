// components/sections/product/ProductContent.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion, useReducedMotion } from "framer-motion";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 backdrop-blur-md">
      {children}
    </span>
  );
}

function FeatureCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="rounded-3xl border border-black/5 bg-white/50 p-6 shadow-sm hover:shadow-xl hover:bg-white transition-all backdrop-blur-sm"
    >
      <div className="h-2 w-8 rounded-full bg-blue-600 mb-4" />
      <h4 className="text-lg font-bold text-black tracking-tight">{title}</h4>
      <p className="mt-2 text-sm text-black/60 leading-relaxed">{children}</p>
    </motion.div>
  );
}

import ProductWalkthrough from "./ProductWalkthrough";

export default function ProductContent() {
  const reduced = useReducedMotion();

  return (
    <div className="pb-24">
      {/* Walkthrough do Produto */}
      <ProductWalkthrough />

      {/* 1. Header Hero da página de produto */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(59,130,246,0.08)_0%,rgba(255,255,255,0)_100%)]" />
        <Container>
          <div className="text-center">
            <Chip>Nosso propósito</Chip>
            <motion.h2
              className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight"
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Potencialize suas vendas <br className="hidden sm:block" />
              com a força da <span className="text-blue-600 italic">IA Omnicanal</span>.
            </motion.h2>
            <p className="mt-8 mx-auto max-w-2xl text-lg text-black/60 leading-relaxed">
              Um único cadastro, múltiplos anúncios otimizados e publicados nos principais canais — 
              rápido, consistente e inteligente.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Mais conversão" delay={0.1}>
              Conteúdo otimizado para SEO e políticas de cada canal com algoritmos avançados.
            </FeatureCard>
            <FeatureCard title="Menos retrabalho" delay={0.2}>
              Um cadastro, múltiplos anúncios prontos em minutos. Economize tempo operacional.
            </FeatureCard>
            <FeatureCard title="Catálogo consistente" delay={0.3}>
              Atributos e imagens padronizados em todos os canais para passar confiança.
            </FeatureCard>
            <FeatureCard title="Operação centralizada" delay={0.4}>
              Pedidos, estoque e performance em um só lugar com o LINXAR HUB.
            </FeatureCard>
          </div>
        </Container>
      </section>

      {/* 2. O Gargalo */}
      <section className="py-24 bg-gray-50/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Chip>Por que agora</Chip>
              <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-black">
                O gargalo que trava seu crescimento
              </h2>
              <p className="mt-6 text-lg text-black/60 leading-relaxed">
                Pequenas e médias empresas perdem margem e velocidade tentando manter anúncios
                atualizados em vários marketplaces. Criar títulos e descrições de qualidade,
                padronizar atributos e subir imagens em plataformas diferentes exige tempo e know-how.
              </p>
              <p className="mt-4 text-lg text-black/60 leading-relaxed">
                A consequência é clara: baixa conversão, catálogo inconsistente e uma operação 
                fragmentada que simplesmente não escala.
              </p>
            </div>
            <div className="relative rounded-3xl border border-black/5 bg-white p-2 shadow-2xl overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
               <span className="text-blue-600/20 font-black text-8xl italic select-none">LINXAR</span>
               <div className="absolute inset-0 bg-gradient-to-t from-black/5 opacity-20 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Como a LINXAR destrava */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse lg:flex-row-reverse">
             <div className="lg:order-2">
              <Chip>Como funciona</Chip>
              <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Como a LINXAR resolve esse problema
              </h2>
              <p className="mt-6 text-lg text-black/60 leading-relaxed">
                A LINXAR é uma plataforma SaaS com motor de otimização por IA generativa. A partir
                de um único cadastro, criamos automaticamente títulos, descrições e atributos 
                prontos para SEO e diretrizes de cada canal.
              </p>
              <p className="mt-4 text-lg text-black/60 leading-relaxed">
                Em seguida, publicamos via API nos marketplaces (Shopee, Amazon, Mercado Livre e outros), 
                mantendo vendas, pedidos e estoque centralizados.
              </p>
            </div>
            <div className="lg:order-1 relative rounded-3xl border border-black/5 bg-white p-12 shadow-2xl flex flex-col gap-6 backdrop-blur-md">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                  <div className="h-2 flex-1 rounded-full bg-black/5" />
               </div>
               <div className="space-y-2">
                  <div className="h-4 w-3/4 rounded-full bg-black/5" />
                  <div className="h-4 w-1/2 rounded-full bg-black/5" />
               </div>
               <div className="mt-4 p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10">
                  <p className="text-xs font-bold text-blue-600 tracking-widest uppercase">Otimização Generativa</p>
                  <p className="text-sm text-black/70 mt-1">Título SEO gerado com sucesso para Mercado Livre.</p>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}