// app/(routes)/demo/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Demonstração • LINXAR",
  description:
    "Entre na fila de espera. Em breve você vai revolucionar a forma de cadastrar e vender online na sua empresa."
};

const FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ??
  // TODO: troque pela URL real do seu formulário Google
  "https://docs.google.com/forms/d/e/1FAIpQLSd_EXEMPLO/viewform?embedded=true";

export default function DemoPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px] bg-gradient-to-b from-blue-50 to-white"
        />
        <Container>
          <div className="mx-auto max-w-3xl pt-12 pb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Em breve: cadastro e vendas com IA
            </h1>
            <p className="mt-2 text-black/70">
              Entre para a fila de espera e seja avisado quando abrirmos convites.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-2 shadow-soft">
              <div className="relative w-full overflow-hidden rounded-xl">
                <iframe
                  title="Fila de espera LINXAR"
                  src={FORM_URL}
                  className="h-[80vh] min-h-[520px] w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-black/50">
                Problemas para carregar?{" "}
                <a
                  href={FORM_URL.replace("?embedded=true", "")}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Abrir formulário em nova aba
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
