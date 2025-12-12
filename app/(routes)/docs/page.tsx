// app/(routes)/docs/page.tsx
import Container from "@/components/ui/Container";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a LINXAR pelo WhatsApp."
};

export default function DocsPage() {
  // Formato: DDI+DDD+número, apenas dígitos (ex.: 5541999999999)
  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") || "5541999999999";

  const msg =
    "Olá! Quero falar com a LINXAR sobre a plataforma e próximos passos.";

  return (
    <main className="relative">
      {/* Fundo sutil para dar foco ao CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-gradient-to-b from-blue-50 to-white"
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Fale conosco no WhatsApp
            </h1>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton phone={phone} message={msg}>
                Fale conosco
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
