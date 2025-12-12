// components/layout/Footer.tsx
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <Container className="py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-black/60">
            © {year} LINXAR • Plataforma de otimização de listagens com IA
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/produto" className="text-black/70 hover:text-black">
              Como Funciona
            </Link>
            <Link href="/quem-somos" className="text-black/70 hover:text-black">
              Quem Somos
            </Link>
            <Link href="/demo" className="text-black/70 hover:text-black">
              Demonstração
            </Link>
            <Link href="/docs#privacidade" className="text-black/70 hover:text-black">
              Privacidade
            </Link>
            <Link href="/docs#contato" className="text-black/70 hover:text-black">
              Contato
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
