// app/(routes)/contato/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato · LINXAR",
  description:
    "Fale com a equipe LINXAR no WhatsApp. Atendimento rápido para dúvidas, parcerias e demonstrações."
};

// Use variável de ambiente se quiser (ex.: NEXT_PUBLIC_WHATSAPP="554291234567")
// Fallback para um número genérico — troque pelo seu oficial:
const WA_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP?.trim() || "55(42)99921-7736";

const WA_URL = `https://wa.me/${5542999217736}?text=${encodeURIComponent(
  "Olá, tenho interesse na LINXAR. Podemos conversar?"
)}`;

export default function ContatoPage() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[240px] bg-gradient-to-b from-white via-blue-50 to-white"
      />
      <Container>
        <div className="mx-auto max-w-xl text-center pt-16 pb-16 sm:pt-24 sm:pb-24">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Fale conosco
          </h1>
          <p className="mt-3 text-black/70">
            Atendimento direto no WhatsApp para dúvidas, parcerias e
            demonstrações.
          </p>

          <div className="mt-7">
            <Link
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white shadow-sm hover:bg-emerald-700 active:scale-[0.99] transition"
              aria-label="Abrir conversa no WhatsApp"
            >
              {/* Ícone WhatsApp minimalista */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M19.5 13.5a7.5 7.5 0 1 1-13.24-5.02L6 4.5l4.07.77A7.5 7.5 0 0 1 19.5 13.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 9.8c.2 1.9 2.6 4.2 4.6 4.7M13.1 14.5c.8.2 1.8-.3 2.2-1.1M8.8 10.1c-.3-.8.1-1.8.9-2.1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Fale no WhatsApp
            </Link>
          </div>

          <p className="mt-4 text-xs text-black/50">
            Disponível em horário comercial. Número: +{WA_NUMBER}
          </p>
        </div>
      </Container>
    </main>
  );
}
