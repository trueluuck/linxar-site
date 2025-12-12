// components/ui/WhatsAppFloating.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Botão flutuante de WhatsApp (global).
 * - Surge após 12s (padrão), configurável via NEXT_PUBLIC_WA_DELAY_MS.
 * - Emite 'wa-floating:visible' quando ficar visível (para coordenação com outros componentes).
 * - Grava 'wa-floating-visible' em sessionStorage (informativo).
 * - Número via NEXT_PUBLIC_WHATSAPP (fallback genérico).
 */
export default function WhatsAppFloating({
  delayMs,
  defaultMessage = "Olá, tenho interesse na LINXAR. Podemos conversar?",
}: {
  delayMs?: number; // sobrescreve env/12s
  defaultMessage?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Lê delay: prop > env > 12s
  const resolvedDelay =
    typeof delayMs === "number"
      ? Math.max(0, delayMs)
      : Math.max(0, Number(process.env.NEXT_PUBLIC_WA_DELAY_MS ?? 12_000));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);

    const t = window.setTimeout(() => {
      setVisible(true);
    }, resolvedDelay);

    return () => {
      window.clearTimeout(t);
      mq.removeEventListener?.("change", onChange);
    };
  }, [resolvedDelay]);

  // Emite evento global + marca visibilidade
  useEffect(() => {
    if (!visible || typeof window === "undefined") return;
    try {
      sessionStorage.setItem("wa-floating-visible", "1");
    } catch {
      /* noop */
    }
    window.dispatchEvent(new CustomEvent("wa-floating:visible"));
  }, [visible]);

  const number =
    process.env.NEXT_PUBLIC_WHATSAPP?.trim() || "5542999999999";

  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  const close = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={[
        "fixed bottom-5 right-5 z-50",
        reducedMotion ? "" : "transition-all duration-500 ease-out",
      ].join(" ")}
      aria-live="polite"
    >
      <div className="mb-2 max-w-[240px] rounded-2xl border border-emerald-200 bg-white/90 px-3 py-2 text-xs text-black/80 shadow-lg backdrop-blur">
        Precisa de ajuda? Fale com nosso time pelo WhatsApp.
      </div>

      <div className="relative">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg hover:bg-emerald-700 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Abrir conversa no WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19.5 13.5a7.5 7.5 0 1 1-13.24-5.02L6 4.5l4.07.77A7.5 7.5 0 0 1 19.5 13.5Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8.5 9.8c.2 1.9 2.6 4.2 4.6 4.7M13.1 14.5c.8.2 1.8-.3 2.2-1.1M8.8 10.1c-.3-.8.1-1.8.9-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-medium">Fale no WhatsApp</span>
        </Link>

        <button
          type="button"
          onClick={close}
          aria-label="Fechar botão flutuante de WhatsApp"
          className="absolute -top-2 -left-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow hover:bg-black/[0.04]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
