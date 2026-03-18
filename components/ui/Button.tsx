"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  asChild,
  href,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = cn(
    "btn inline-flex items-center justify-center font-medium transition-all active:scale-[0.98]",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    sizeClasses[size],
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
