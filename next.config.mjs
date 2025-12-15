// next.config.mjs (trecho relevante)
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["clsx"] },
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
  async headers() {
    return [
      {
        source: "/demo",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://docs.google.com https://forms.gle https://www.google.com https://*.gstatic.com; child-src 'self' https://docs.google.com https://forms.gle;"
          }
        ]
      }
    ];
  }
};
export default nextConfig;
