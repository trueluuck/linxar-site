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
        {/* Background Aurora Texture */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] animate-aurora" />
          <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-orange-400/5 blur-[100px] animate-aurora [animation-delay:2s]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[130px] animate-aurora [animation-delay:4s]" />
          <div className="absolute top-[40%] left-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/5 blur-[110px] animate-aurora [animation-delay:1s]" />
        </div>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat delayMs={12000} />
      </body>
    </html>
  );
}
