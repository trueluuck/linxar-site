// app/(routes)/demo/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import dynamic from "next/dynamic";

// carrega o herói como client component
const DemoHero = dynamic(() => import("@/components/sections/demo/DemoHero"), { ssr: false });

export const metadata: Metadata = {
  title: "Demonstração • LINXAR",
  description:
    "Entre na fila de espera. Em breve você vai revolucionar a forma de cadastrar e vender online na sua empresa."
};

const FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ??
  // fallback – troque pela URL real quando quiser
  "https://docs.google.com/forms/d/e/1FAIpQLSd_EXEMPLO/viewform?embedded=true";

export default function DemoPage() {
  const openUrl = FORM_URL.replace("?embedded=true", "");
  return (
    <main>
      <DemoHero />

      {/* Card do formulário */}
      <section className="pb-12 sm:pb-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="card p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl">
                <iframe
                  title="Fila de espera LINXAR"
                  src={FORM_URL}
                  className="h-[78vh] min-h-[520px] w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-center text-xs text-black/50">
                Problemas para carregar?{" "}
                <a href={openUrl} target="_blank" rel="noreferrer" className="link">
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
