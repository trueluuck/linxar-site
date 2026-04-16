// app/(routes)/contato/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato · LINXAR",
  description: "Fale com a equipe LINXAR no WhatsApp. Atendimento rápido para dúvidas e parcerias."
};

export default function ContatoPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") || "5542999217736";
  const msg = "Olá! Quero falar com a LINXAR sobre a plataforma.";

  return (
    <main className="relative py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-gradient-to-b from-blue-50/80 via-white to-white"
      />
      
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Vamos conversar?
          </h1>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Estamos prontos para ajudar você a otimizar sua operação de e-commerce.
            Escolha o melhor canal para falar conosco.
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-6">
            <WhatsAppButton 
              phone={phone} 
              message={msg}
              className="rounded-2xl px-10 py-5 text-lg shadow-xl shadow-emerald-500/10 hover:scale-105 active:scale-95 transition-all bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Falar no WhatsApp agora
            </WhatsAppButton>
            
            <p className="text-sm text-black/40">
              Disponível de segunda a sexta, das 09h às 18h.
            </p>
          </div>
          
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-white/50 p-8 backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">Parcerias</h3>
              <p className="mt-4 text-sm text-black/60">Quer levar a LINXAR para seus clientes? Fale com nosso time de parcerias.</p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white/50 p-8 backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">Suporte</h3>
              <p className="mt-4 text-sm text-black/60">Já é cliente e precisa de ajuda técnica? Nosso suporte está à disposição.</p>
            </div>
            <div className="rounded-3xl border border-blue-600/10 bg-blue-600/5 p-8 backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">Administrativo</h3>
              <p className="mt-4 text-sm text-black/90 font-medium">Questões formais e financeiras:</p>
              <a href="mailto:administrativo@linxar.com.br" className="mt-2 block text-sm font-bold text-blue-600 hover:underline">
                administrativo@linxar.com.br
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
