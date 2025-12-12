/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Importante: remover framer-motion daqui para evitar quebra no RSC/Client Manifest
  experimental: {
    // Se quiser manter para clsx tudo bem, mas framer-motion fora
    optimizePackageImports: ["clsx"]
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
