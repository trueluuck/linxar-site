// components/ui/FloatingCTA.tsx
"use client";

/**
 * Stub do antigo FloatingCTA.
 * Mantém imports existentes sem renderizar nada.
 * Seguro para remoção visual do recurso.
 */
export type FloatingCTALink = { href: string; label: string };

export default function FloatingCTA(_: {
  links: FloatingCTALink[];
  delayMs?: number;
  scrollTriggerRatio?: number;
  autoCloseAtMs?: number;
}) {
  return null;
}
