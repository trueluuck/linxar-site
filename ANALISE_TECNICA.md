# Relatório Técnico: LINXAR HUB

## 📝 1. Resumo do Projeto
A **LINXAR** é uma plataforma de infraestrutura de inteligência para o comércio digital. O projeto consiste em um site institucional de alta performance (SPA) construído com Next.js, focado em converter grandes sellers de marketplaces. O diferencial competitivo é o posicionamento *Enterprise* com parcerias institucionais (**UTFPR/Sprint**) e um motor de automação de anúncios baseado em IA.

---

## 🏗️ 2. Análise da Tecnologia (Tech Stack)
A stack escolhida é moderna e orientada a performance extrema:

- **Framework**: `Next.js 14` (App Router) - Permite carregamento via Server Components e streaming, essencial para SEO e UX.
- **Linguagem**: `TypeScript` - Garante segurança de tipos durante o desenvolvimento.
- **Estilização**: `Tailwind CSS` - Design system utilitário que minimiza o bundle final.
- **Animações**: `Framer Motion` - Utilizada para micro-interações e o "fator premium" (glassmorphism, orbs).
- **Componentes**: `Radix UI` - Garante acessibilidade e componentes desacoplados de estilo.
- **Infraestrutura**: `Vercel Edge` - Baixa latência global para a entrega dos ativos.

---

## 🔍 3. Redundâncias e Pontos de Atenção
Identificamos as seguintes duplicações ou incoerências na arquitetura atual:

1.  **Componentes de WhatsApp**:
    - `WhatsAppButton.tsx` e `WhatsAppFloat.tsx` possuem lógica de formatação de link URL idêntica (`encodeURIComponent`). Recomenda-se extrair para um helper.
2.  **Dashboard Preview**:
    - Existe um `DashboardMockup.tsx` em `ui/` e um `DashboardPreview.tsx` em `sections/`. É vital que a lógica de "Mockup" seja puramente visual e a de "Preview" contenha o estado/animação específico da seção.
3.  **Configurações de Ambiente**:
    - O número do WhatsApp está hardcoded em `WhatsAppFloat.tsx` como fallback (`5542999217736`). Deveria estar centralizado em uma única constante ou arquivo de configuração.

---

## 💡 4. Sugestões de Melhoria

### Técnicas (Performance & DX)
- **Centralização de Libs**: Criar um arquivo `lib/contacts.ts` para gerenciar links de WhatsApp, email e redes sociais de forma global.
- **Performance de Imagens**: Implementar o uso de `.webp` ou `.avif` para todos os assets na pasta `public` para reduzir ainda mais o LCP.
- **Type Definitions**: Criar uma interface global para as "Features" e "Steps" que são repetidos nos mapas dos componentes.

### UI/UX (Design de Elite)
- **Scroll Progressive Glow**: Adicionar um efeito de luz (glow) que acompanha o scroll lateral no `BrandStrip`.
- **Interactive Orbs**: Fazer com que as Atmosphere Orbs reajam levemente ao movimento do mouse (parallax sutil).
- **Typography Pairing**: Refinar a escala tipográfica para garantir que em telas mobile menores (< 360px), o H1 não quebre em muitas linhas, mantendo o impacto visual.

### Arquitetura
- **Feature Flags**: Preparar o sistema para habilitar/desabilitar seções (ex: Blog, Docs) via variáveis de ambiente, facilitando lançamentos graduais.
- **Error Boundaries**: Implementar limites de erro customizados para que falhas em animações complexas não quebrem a página inteira.

---

## 📈 5. Próximos Passos (Product Roadmap)
1. Unificação dos componentes de contato.
2. Otimização final de assets visuais.
3. Implementação de testes de usabilidade mobile para diferentes densidades de pixel.
