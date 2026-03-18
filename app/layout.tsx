// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "LINXAR — Otimize PRODUTOS com IA Omnicanal",
    template: "%s • LINXAR"
  },
  description:
    "LINXAR conecta EAN/GTIN via QRCODE/CODEBAR, otimiza título, descrição e SEO, e publica em massa nos marketplaces — rápido, consistente e inteligente.",
  metadataBase: new URL("https://linxar.com.br")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className={`${inter.variable} min-h-full antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat delayMs={12000} />
      </body>
    </html>
  );
}
