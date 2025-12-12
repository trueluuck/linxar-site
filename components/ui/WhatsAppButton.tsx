// components/ui/WhatsAppButton.tsx
"use client";

import { cn } from "@/lib/utils";

type Props = {
  phone: string; // apenas dígitos, ex: 5541999998888
  message?: string;
  className?: string;
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
};

export default function WhatsAppButton({
  phone,
  message = "Olá, tenho interesse na LINXAR e gostaria de falar com o time.",
  className,
  variant = "primary",
  children
}: Props) {
  // Por quê: encode para URL segura no WhatsApp
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        className
      )}
      aria-label="Fale conosco no WhatsApp"
    >
      {children ?? "Fale conosco"}
    </a>
  );
}
