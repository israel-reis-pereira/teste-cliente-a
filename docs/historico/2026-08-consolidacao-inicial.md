# Consolidação inicial da documentação — agosto de 2026

## Finalidade deste registro

Este documento preserva o raciocínio relevante dos materiais de estudo e planejamento produzidos em agosto de 2026. Ele não substitui o README, a documentação de arquitetura, a documentação de componentes nem o roadmap atuais.

Quando houver divergência, o código atual e a documentação atual prevalecem.

## Contexto histórico

O projeto foi iniciado como laboratório para aprender Astro enquanto se construía a base de um site para clientes. A intenção de longo prazo era observar padrões em projetos reais e, somente depois, formar uma base reutilizável para múltiplos clientes.

Os documentos originais estudaram Astro, Cloudflare, Storyblok, renderização estática, SSR, componentes e o uso de IA no processo de desenvolvimento.

## Decisões históricas preservadas

As seguintes decisões continuam como princípios do projeto:

- começar com um site simples e compreensível;
- manter conteúdo, configuração e apresentação separados;
- priorizar geração estática;
- introduzir SSR, Workers, CMS e novas dependências somente diante de uma necessidade real;
- evitar abstrações genéricas antes de repetição comprovada;
- usar templates de terceiros como referência, com revisão de licença e procedência;
- usar IA para análise, aprendizado e revisão, mantendo decisões técnicas verificáveis.

## Decisões posteriormente alteradas

### Cloudflare Pages

Documentos iniciais apresentavam Cloudflare Pages como parte do fluxo de criação. A direção posterior passou a tratar Cloudflare Workers com Static Assets como referência de infraestrutura, sem tornar Pages um requisito.

Nenhuma integração Cloudflare está implementada no código atual.

### Fases e sequências de trabalho

As versões antigas continham várias listas de fases, próximos passos e checklists. Essas sequências eram adequadas ao momento de aprendizado, mas foram substituídas pelo roadmap atual.

### Jornada do Header

Os primeiros registros descreviam um Header com links locais e sem responsividade, menu móvel, ações ou configuração por tenant. O código evoluiu além desse estágio: o Header atual recebe TenantConfig, usa tokens CSS, possui menu móvel e alternância de tema condicional.

As pendências que permanecem estão documentadas em componentes/header.md.

## Estados antigos que não representam o projeto atual

Os materiais antigos registravam situações que ficaram obsoletas, incluindo:

- preparação inicial do ambiente e criação do projeto Astro;
- ausência de commit inicial e de repositório remoto;
- páginas limitadas a Home, Sobre e Contato;
- links fixos dentro do Header;
- ausência de responsividade e de menu móvel;
- arquitetura multi-tenant apenas como possibilidade;
- integração futura tratada como se já estivesse próxima da implementação.

O projeto atual possui quatro rotas estáticas, incluindo Serviços, Layout compartilhado e configuração de dois tenants. Somente empresa-a é utilizado pelas páginas.

## Conteúdo considerado planejamento

Os seguintes temas permaneceram como planejamento ou avaliação, não como implementação:

- CMS e Storyblok;
- SSR, adapter Cloudflare e Workers;
- deploy e domínio;
- blog, produtos, autenticação, banco de dados e APIs;
- seleção de tenant por domínio, rota ou build;
- Astro Rocket;
- uma plataforma ou fábrica de sites.

## Relação com a documentação atual

O estado operacional está no README.

A arquitetura atualmente implementada está em arquitetura/visao-geral.md. As decisões duráveis estão em arquitetura/decisoes-arquiteturais.md. O comportamento e as pendências do cabeçalho estão em componentes/header.md. As próximas etapas ficam exclusivamente em desenvolvimento/roadmap.md.

## Material pendente de identificação

O arquivo aprendizado/codigo-vercel.txt não foi incorporado a esta consolidação. Seu propósito ainda não foi identificado e ele deve ser avaliado separadamente antes de ser documentado, movido ou removido.
