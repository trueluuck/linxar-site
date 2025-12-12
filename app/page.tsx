// app/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import BrandStrip from "@/components/ui/BrandStrip";
import HeroTitle from "@/components/sections/HeroTitle";
import HeroPitch from "@/components/sections/HeroPitch";

export const metadata: Metadata = {
  title: "LINXAR — Otimize PRODUTOS com IA Omnicanal",
  description:
    "LINXAR conecta EAN/GTIN via QRCODE/CODEBAR, otimiza título, descrição e SEO, e publica em massa nos marketplaces — rápido, consistente e inteligente.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        {/* fundo sutil para profundidade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-gradient-to-b from-white via-blue-50 to-white"
        />
        <Container>
          <div className="mx-auto max-w-3xl text-center pt-16 pb-8 sm:pt-20 sm:pb-10">
            <HeroTitle />

            {/* Parágrafo com animação nas três palavras */}
            <HeroPitch />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <Link href="/demo">Começar Agora</Link>
              </Button>
              <Link
                href="/produto"
                className="rounded-2xl border border-black/10 px-4 py-2 text-sm hover:bg-black/[0.05]"
                aria-label="Entender como a LINXAR funciona"
              >
                Como Funciona
              </Link>
            </div>

            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs text-black/70">
                Pré-incubada na UTFPR • Tecnologia brasileira
              </span>
            </div>

            {/* SOMENTE: UTFPR, LINXAR, SPRINT (nesta ordem) */}
            <div className="mt-6">
              <BrandStrip
                size="md"
                // AUMENTAMOS APENAS A LOGO (não o card)
                logoClassName="max-h-16 sm:max-h-20"
                logos={[
                  { src: "/logos/utfpr.png", alt: "UTFPR" },
                  { src: "/logos/linxar.png", alt: "LINXAR" },
                  { src: "/logos/sprint.png", alt: "Sprint Incubadora da UTFPR" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
