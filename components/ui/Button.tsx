"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  href?: string;
  variant?: "primary" | "ghost";
};

export function Button({
  className,
  asChild,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
