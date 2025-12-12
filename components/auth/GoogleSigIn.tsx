// components/auth/GoogleSignIn.tsx
"use client";

/**
 * Botão mínimo para iniciar login Google via Auth.js v5.
 * Link direto evita dependências client do pacote.
 */
export default function GoogleSignIn({ callback = "/demo" }: { callback?: string }) {
  const url = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(callback)}`;

  return (
    <a
      href={url}
      className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm hover:bg-black/[0.05] block text-center"
    >
      Continuar com Google
    </a>
  );
}
