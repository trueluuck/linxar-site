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
      <body className={`${inter.variable} min-h-full antialiased font-sans relative`}>
        {/* Background Aurora System - Real Aurora Rays (from photo 3) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
          <div className="absolute inset-0 opacity-40 blur-[40px]">
            <div className="aurora-ray left-[0%] text-emerald-400 [animation-delay:-2s] w-[30vw]" />
            <div className="aurora-ray left-[15%] text-cyan-400 [animation-delay:-5s] w-[25vw]" />
            <div className="aurora-ray left-[35%] text-indigo-600 [animation-delay:-12s] w-[40vw]" />
            <div className="aurora-ray left-[60%] text-pink-500 [animation-delay:-8s] w-[30vw]" />
            <div className="aurora-ray left-[80%] text-orange-500 [animation-delay:-15s] w-[35vw]" />
            <div className="aurora-ray left-[45%] text-emerald-500 [animation-delay:-20s] w-[20vw]" />
          </div>

          {/* Noise Texture Cover */}
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
        </div>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat delayMs={12000} />
      </body>
    </html>
  );
}
