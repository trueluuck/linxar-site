// components/ui/BrandStrip.tsx
import Image from "next/image";
import clsx from "clsx";

type Brand = { src: string; alt: string };

export default function BrandStrip({
  logos,
  size = "md",
  className,
  logoClassName,
}: {
  logos: Brand[];
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Controla apenas o tamanho da logo dentro do card (ex.: "max-h-16 sm:max-h-20"). */
  logoClassName?: string;
}) {
  const cardBase =
    "group rounded-2xl border border-black/10 bg-white shadow-soft flex items-center justify-center";
  const cardSize = {
    sm: "h-16 px-3",
    md: "h-20 px-4",
    lg: "h-24 px-5",
  }[size];

  const imgSizeDefault = {
    sm: "max-h-8 sm:max-h-10",
    md: "max-h-12 sm:max-h-14",
    lg: "max-h-14 sm:max-h-16",
  }[size];

  return (
    <div
      className={clsx(
        "grid grid-cols-3 items-center gap-3 sm:gap-4",
        className
      )}
    >
      {logos.map((b) => (
        <div key={b.alt} className={clsx(cardBase, cardSize)}>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={b.src}
              alt={b.alt}
              width={256}
              height={128}
              priority={false}
              className={clsx(
                // Hover sutil: +3% e sombra leve
                "h-auto w-auto object-contain opacity-90 transition-transform duration-200 ease-out",
                "group-hover:scale-[1.03] group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]",
                logoClassName ?? imgSizeDefault
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
