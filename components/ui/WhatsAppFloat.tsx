// components/ui/WhatsAppFloat.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type Props = {
  /** atraso para aparecer (ms). Padrão: 12s */
  delayMs?: number;
  /** mensagem que já vai no WhatsApp */
  message?: string;
  /** texto do balão ao lado do botão */
  bubbleText?: string;
};

const DISMISS_KEY = "linxar_whatsapp_bubble_dismissed";

export default function WhatsAppFloat({
  delayMs = 12000,
  message = "Olá! Quero falar com a LINXAR.",
  bubbleText = "Precisa de ajuda? Fale com a LINXAR no WhatsApp."
}: Props) {
  const [visible, setVisible] = useState(false);        // controla o conjunto (botão+balão)
  const [bubbleOpen, setBubbleOpen] = useState(false);  // só o balão
  const reduced = useReducedMotion();

  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP?.toString().replace(/[^\d]/g, "") || "";

  // Aparece após o delay
  useEffect(() => {
    const t = window.setTimeout(() => {
      setVisible(true);
      // abre o balão somente se ainda não foi dispensado nesta sessão
      const dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
      if (!dismissed) setBubbleOpen(true);
    }, delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  if (!phone) return null;

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const closeBubble = () => {
    setBubbleOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          exit={reduced ? {} : { opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="relative flex items-end gap-3">
            {/* Balão de mensagem */}
            <AnimatePresence>
              {bubbleOpen && (
                <motion.div
                  key="bubble"
                  initial={reduced ? false : { opacity: 0, scale: 0.96, y: 8 }}
                  animate={reduced ? {} : { opacity: 1, scale: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="max-w-xs rounded-2xl border border-black/10 bg-white/95 px-3 py-2 shadow-soft backdrop-blur"
                  role="dialog"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-2">
                    <p className="text-sm leading-snug text-black/80">{bubbleText}</p>
                    <button
                      onClick={closeBubble}
                      aria-label="Fechar aviso do WhatsApp"
                      title="Fechar"
                      className="shrink-0 rounded-md px-1 text-black/50 hover:bg-black/[0.06] hover:text-black/70"
                    >
                      ✕
                    </button>
                  </div>
                  {/* setinha do balão */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-1.5 bottom-3 h-3 w-3 rotate-45 rounded-[2px] border-r border-b border-black/10 bg-white/95"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botão verde do WhatsApp */}
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale no WhatsApp com a LINXAR"
              className="group inline-flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg ring-1 ring-black/5 transition-transform hover:translate-y-0.5 active:translate-y-0"
              onClick={closeBubble}
            >
              {/* ícone WhatsApp */}
              <svg aria-hidden="true" viewBox="0 0 32 32" width="26" height="26">
                <path
                  d="M19.11 17.36c-.29-.15-1.68-.83-1.94-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.15-1.24-.45-2.36-1.43-.87-.77-1.46-1.72-1.64-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.87-2.11-.23-.55-.45-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.15.19 2.01 3.06 4.86 4.29.68.29 1.22.45 1.64.58.69.22 1.33.19 1.83.12.56-.08 1.68-.69 1.92-1.36.24-.67.24-1.24.17-1.36-.06-.11-.25-.18-.54-.33z"
                  fill="currentColor"
                />
                <path
                  d="M26.67 5.33A13.27 13.27 0 0 0 16 2.67c-7.33 0-13.33 6-13.33 13.33 0 2.35.62 4.55 1.73 6.46L2.67 29.33 9.1 27.9a13.25 13.25 0 0 0 6.9 1.93c7.33 0 13.33-6 13.33-13.33 0-3.54-1.38-6.87-3.66-9.17zm-10.67 21.3c-2.21 0-4.26-.67-5.96-1.82l-.43-.29-3.53.8.75-3.44-.3-.53a10.6 10.6 0 0 1-1.6-5.66c0-5.87 4.8-10.67 10.67-10.67 2.85 0 5.54 1.11 7.55 3.12s3.12 4.69 3.12 7.55c0 5.87-4.8 10.67-10.67 10.67z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
