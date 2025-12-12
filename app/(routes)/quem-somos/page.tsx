// app/(routes)/quem-somos/page.tsx
import type { Metadata } from "next";
import AboutContent from "@/components/sections/about/AboutContent";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "LINXAR é uma marca/produto da FCGROUP (Fedumenti Group). Pré-incubada na Sprint – UTFPR Guarapuava. Conheça nossa história, ambiente de inovação e onde estamos."
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
