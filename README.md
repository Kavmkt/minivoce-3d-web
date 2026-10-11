# MiniVocê 3D — Landing Page

Site de conversão para colecionáveis 3D personalizados (pessoas e pets). Vite + React 18 + Tailwind CSS v4.

## Desenvolvimento
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview
```

## Personalização
Todo o conteúdo (links do app, WhatsApp, prazos, avaliações, FAQ) fica em [`src/data.js`](src/data.js). **Antes de publicar**, troque `APP_URL`, `WHATSAPP`, `REPO_URL`, os prazos de exemplo e as avaliações de exemplo por dados reais.

Cores e fontes são tokens em [`src/index.css`](src/index.css) (`@theme`).

## Deploy
**Vercel:** importe o repositório, framework *Vite*, build `npm run build`, output `dist`.
**Netlify:** importe o repositório; o `netlify.toml` já define build e publish.

## Acessibilidade e performance
Landmarks semânticos, skip link, tabs/accordion com ARIA, foco visível, `prefers-reduced-motion`, ilustrações em SVG (sem imagens pesadas, sem CLS).
