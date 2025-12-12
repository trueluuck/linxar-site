// app/(routes)/produto/page.tsx
import type { Metadata } from "next";
import ProductContent from "@/components/sections/product/ProductContent";

export const metadata: Metadata = {
  title: "Produto",
  description:
    "Conheça a plataforma LINXAR: IA para otimizar listagens, centralizar canais e escalar operações em marketplaces."
};

export default function ProdutoPage() {
  return (
    <main>
      <ProductContent />
    </main>
  );
}
