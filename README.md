 # Cliente A — Astro

  Projeto Astro para desenvolvimento de um site institucional do Cliente A, com uma base inicial de configuração por
  tenant e componentes reutilizáveis.

  ## Estado atual

  O projeto possui uma aplicação Astro estática com quatro páginas, layout global e um cabeçalho configurável por tenant.

  A implementação atual utiliza exclusivamente o tenant empresa-a. Existe uma segunda configuração, empresa-b, mas ela
  ainda não é utilizada por nenhuma rota.

  ## Stack

  - Astro (https://astro.build/) ^7.2.1
  - TypeScript com configuração estrita do Astro
  - CSS nativo em componentes Astro
  - Node.js >=22.12.0

  Não há integrações, adapters, CMS, SSR ou bibliotecas de UI configurados atualmente.

  ## Requisitos

  - Node.js >=22.12.0
  - npm

  ## Instalação

  npm install

  ## Desenvolvimento

  npm run dev

  O servidor de desenvolvimento do Astro é iniciado pela porta padrão 4321, salvo configuração diferente no ambiente.

  ## Build e preview

  Gerar o build estático:

  npm run build

  Visualizar o build localmente:

  npm run preview

  ## Estrutura atual

  src/
  ├── assets/              # Assets herdados do starter do Astro
  ├── components/
  │   ├── Header.astro
  │   ├── Saudacao.astro
  │   └── Welcome.astro
  ├── constants/
  │   └── tenants.ts       # Configurações dos tenants
  ├── layouts/
  │   └── Layout.astro
  ├── pages/
  │   ├── index.astro
  │   ├── sobre.astro
  │   ├── servicos.astro
  │   └── contato.astro
  └── types/
      └── config.ts        # Contratos TypeScript da configuração

  public/
  ├── favicon.ico
  └── favicon.svg

  ## Rotas

   Rota         Página                      Estado
  ━━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━━
   /            src/pages/index.astro       Conteúdo inicial estático
  ───────────  ──────────────────────────  ───────────────────────────
   /sobre       src/pages/sobre.astro       Conteúdo estático
  ───────────  ──────────────────────────  ───────────────────────────
   /servicos    src/pages/servicos.astro    Conteúdo estático
  ───────────  ──────────────────────────  ───────────────────────────
   /contato     src/pages/contato.astro     Conteúdo estático

  ## Componentes

  ### Layout.astro

  Define a estrutura HTML compartilhada, metadados básicos, estilos globais e renderiza o Header. Recebe title e tenantId
  por props.

  ### Header.astro

  Renderiza a identidade, navegação e ações a partir de um TenantConfig.

  Funcionalidades atuais:

  - links de navegação configuráveis;
  - cores por tenant por meio de variáveis CSS;
  - botão de alternância entre tema claro e escuro, quando habilitado;
  - persistência do tema em localStorage;
  - menu móvel com estado aria-expanded;
  - CTA visual “Fale Conosco”, quando habilitado.

  O CTA ainda não possui destino ou ação implementada.

  ### Saudacao.astro

  Componente simples de saudação para “Cliente A”. Está presente no projeto, mas não é renderizado pelas páginas atuais.

  ### Welcome.astro

  Componente herdado do Astro Starter Kit. Está presente no projeto, mas não é renderizado pelas páginas atuais.

  ## Arquitetura atual

  Página
    ↓
  Layout.astro
    ↓
  tenants[tenantId]
    ↓
  Header.astro
    ↓
  interface configurada pelo tenant

  As páginas passam title e tenantId ao Layout. O layout busca a configuração correspondente em src/constants/tenants.ts e
  entrega esse objeto ao Header.

  Os contratos da configuração ficam em src/types/config.ts:

  - identidade do site;
  - links de navegação;
  - cores do tema;
  - flags para alternância de tema e CTA.

  ## Multi-tenant

  A base atual contém duas configurações:

  - empresa-a: usada em todas as rotas existentes;
  - empresa-b: cadastrada para teste de variação visual e de navegação.

  O multi-tenant está implementado apenas no nível de configuração e composição do layout/header. Ainda não há seleção
  dinâmica de tenant por domínio, rota, ambiente ou build separado.

  ## Já implementado

  - páginas estáticas para Home, Sobre, Serviços e Contato;
  - roteamento por arquivos do Astro;
  - layout compartilhado;
  - Header reutilizável e tipado;
  - configuração de links, identidade visual e flags por tenant;
  - navegação responsiva;
  - menu móvel;
  - tema claro/escuro condicional;
  - estilos globais básicos;
  - TypeScript estrito.

  ## Em desenvolvimento

  - conteúdo institucional real das páginas;
  - definição da ação e do destino do CTA;
  - uso efetivo de mais de um tenant;
  - revisão de acessibilidade e estados de navegação;
  - limpeza de componentes e assets herdados do starter;
  - arquitetura de conteúdo, build e publicação.

  ## Próximos passos imediatos

  1. Substituir o conteúdo provisório das páginas por conteúdo institucional.
  2. Definir o comportamento do CTA “Fale Conosco”.
  3. Revisar a acessibilidade do Header, incluindo indicação da rota atual.
  4. Remover ou incorporar os componentes e assets herdados do starter.
  5. Executar e revisar o build estático antes de configurar publicação.

  ## Documentação

  - docs/arquitetura/visao-geral.md: arquitetura atualmente implementada.
  - docs/arquitetura/decisoes-arquiteturais.md: decisões duráveis que orientam a evolução.
  - docs/componentes/header.md: comportamento, contrato e pendências do Header.
  - docs/desenvolvimento/roadmap.md: próximas etapas do projeto.
  - docs/aprendizado/prompts/revisao-header.md: prompt de revisão técnica do Header.
  - docs/historico/2026-08-consolidacao-inicial.md: contexto e decisões históricas de agosto de 2026.
