// app/(routes)/produto/page.tsx
import type { Metadata } from "next";
import ProductContent from "@/components/sections/product/ProductContent";

export const metadata: Metadata = {
  title: "LINXAR Hub — Tecnologia Proprietária e Motor de IA",
  description:
    "Descubra as especificações técnicas do Linxar Hub: do Motor MIP v4.6 à integração Enterprise com indústrias e ERPs."
};

export default function ProdutoPage() {
  return (
    <main>
      <ProductContent />
    </main>
  );
}
