// app/(routes)/demo/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Demonstração",
  description: "Participe da fila de espera da LINXAR. Preencha o formulário."
};

export default function DemoPage() {
  // Cole aqui a URL embed do seu Google Forms com ?embedded=true
  const formUrl =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSeEXEMPLO/viewform?embedded=true";

  return (
    <main>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px] bg-gradient-to-b from-blue-50 to-white"
      />
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 border-b border-black/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700">
              Em breve
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Entre na fila de espera
            </h1>
            <p className="mt-2 text-black/70">
              Preencha o formulário e receba as novidades da LINXAR.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <div className="rounded-2xl border border-black/10 bg-white shadow-soft overflow-hidden">
            <iframe
              title="Formulário de espera — LINXAR"
              src={formUrl}
              className="h-[1400px] w-full"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
