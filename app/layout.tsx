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
        {/* Background Aurora System - 3D Multi-layer Depth */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
          {/* Layer 1: Deep Slow Movement (Base Colors) */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[150px] animate-aurora-deep" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-600/15 blur-[150px] animate-aurora-deep [animation-delay:-5s]" />
          </div>

          {/* Layer 2: Mid Dynamic Movement (Brand Colors) */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-[100px] animate-aurora-mid" />
            <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/15 blur-[100px] animate-aurora-mid [animation-delay:-10s]" />
          </div>

          {/* Layer 3: Floating Highlights (Organic Feel) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[40%] left-[30%] w-[25%] h-[25%] rounded-full bg-white blur-[80px] animate-aurora-floating" />
            <div className="absolute bottom-[30%] right-[20%] w-[20%] h-[20%] rounded-full bg-blue-200/20 blur-[60px] animate-aurora-floating [animation-delay:-3s]" />
          </div>

          {/* Noise Texture Cover */}
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat delayMs={12000} />
      </body>
    </html>
  );
}
