// app/(routes)/docs/page.tsx
import Container from "@/components/ui/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentação · LINXAR",
  description: "Aprenda a otimizar sua operação de e-commerce com as APIs e ferramentas da LINXAR."
};

export default function DocsPage() {
  return (
    <main className="relative py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-gradient-to-b from-blue-50/50 via-white to-white"
      />
      
      <Container>
        <div className="mx-auto max-w-4xl pt-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Documentação <span className="text-blue-600">LINXAR</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Estamos preparando algo incrível. Em breve, todo o guia técnico e APIs estarão disponíveis aqui.
          </p>
          
          <div className="mt-16 rounded-3xl border border-black/5 bg-white/40 p-12 backdrop-blur-md shadow-2xl">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-black tracking-tight">Em desenvolvimento</h2>
            <p className="mt-4 text-black/50">Precisa de ajuda técnica agora? Fale diretamente com nosso time de engenharia.</p>
            <div className="mt-8 flex justify-center gap-4">
               <Link href="/contato" className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all">
                  Suporte Técnico
               </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
