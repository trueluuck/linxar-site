// app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const WhatsAppFloating = dynamic(
  () => import("@/components/ui/WhatsAppFloating"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LINXAR — Otimize PRODUTOS com IA Omnicanal",
    template: "%s · LINXAR",
  },
  description:
    "LINXAR conecta EAN/GTIN via QRCODE/CODEBAR, otimiza título, descrição e SEO, e publica em massa nos marketplaces — rápido, consistente e inteligente.",
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <Navbar />
        {children}
        <WhatsAppFloating /> {/* aparece em 12s por padrão */}
      </body>
    </html>
  );
}
