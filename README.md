# CFA Pilates e Fisioterapia Barretos

MVP institucional estático desenvolvido com Astro e TypeScript.

## Desenvolvimento

Requer Node.js 22.12+ e npm.

```bash
npm install
npm run dev
npm run build
```

## Arquitetura

O conteúdo local fica em `src/data/cfa.ts`, os contratos em `src/types/content.ts` e a camada de acesso em `src/lib/content.ts`. Os componentes e a página consomem somente essa camada, permitindo migrar o conteúdo para Sanity sem reescrever a interface.

Sem configuração Sanity, o site utiliza o fallback local. Para ativar a consulta à API, copie `.env.example` para `.env` e forneça `SANITY_PROJECT_ID` e `SANITY_DATASET`. Defina também `PUBLIC_SITE_URL` antes da publicação para gerar canonical, Open Graph e sitemap com a URL definitiva.

Não há tokens, projetos ou credenciais incluídos no repositório.

## Rotas e SEO

- `/` — página institucional, responsiva e acessível.
- `/sitemap.xml` — sitemap estático.
- `/robots.txt` — regras de rastreamento.

O site não usa analytics, cookies não essenciais, formulário ou iframe de mapa.
