
  # Visão geral da arquitetura

  ## Escopo atual

  O projeto é uma aplicação Astro estática com páginas institucionais, um layout compartilhado e uma configuração inicial
  por tenant.

  A arquitetura atual separa:

  - conteúdo das páginas;
  - configuração de cada tenant;
  - apresentação reutilizável do cabeçalho;
  - estrutura HTML global.

  ## Fluxo de renderização

  ```text
  src/pages/*.astro
    ↓
  Layout.astro
    ↓
  tenants[tenantId]
    ↓
  Header.astro
    ↓
  HTML, CSS e comportamento no navegador
  ```

  Cada página seleciona explicitamente um `tenantId` e envia esse valor, junto do título da página, ao layout.

  Exemplo conceitual:

  ```astro
  <Layout title="Início" tenantId="empresa-a">
    <!-- conteúdo da página -->
  </Layout>
  ```

  O `Layout` resolve a configuração do tenant em `src/constants/tenants.ts` e a entrega ao `Header`.

  ## Camadas e responsabilidades

  ### Páginas — `src/pages/`

  As páginas definem as rotas por meio do roteamento baseado em arquivos do Astro.

  Responsabilidades atuais:

  - escolher o título da página;
  - selecionar o tenant;
  - fornecer o conteúdo específico da rota ao `<slot />` do layout.

  Rotas existentes:

  - `/`
  - `/sobre`
  - `/servicos`
  - `/contato`

  O conteúdo dessas páginas é estático e ainda provisório.

  ### Layout — `src/layouts/Layout.astro`

  O layout fornece a estrutura compartilhada da aplicação.

  Responsabilidades atuais:

  - declarar o documento HTML e o idioma `pt-BR`;
  - definir metadados básicos, viewport e título;
  - receber `title` e `tenantId`;
  - carregar a configuração do tenant;
  - renderizar o `Header`;
  - renderizar o conteúdo da página por meio de `<slot />`;
  - aplicar estilos globais básicos.

  ### Configuração — `src/constants/tenants.ts`

  Esse arquivo centraliza dados que variam entre tenants.

  Cada configuração contém:

  - identificador;
  - nome do site;
  - links de navegação;
  - cores do tema;
  - flags para alternância de tema e CTA.

  Há duas configurações declaradas:

  - `empresa-a`;
  - `empresa-b`.

  Atualmente, todas as páginas usam `empresa-a`.

  ### Tipos — `src/types/config.ts`

  Define os contratos TypeScript usados pela configuração:

  - `LinkItem`;
  - `TenantConfig`.

  Essa camada descreve a estrutura esperada dos dados e evita que o `Header` dependa de campos não tipados.

  ### Componentes — `src/components/`

  #### `Header.astro`

  É o componente reutilizável que recebe um `TenantConfig` e renderiza:

  - identidade do site;
  - links de navegação;
  - cores configuradas por tenant;
  - CTA visual, quando habilitado;
  - alternância de tema, quando habilitada;
  - menu móvel.

  O comportamento de tema usa `localStorage` e a preferência do sistema operacional. O menu móvel altera seus estados
  visuais e atributos ARIA no navegador.

  #### `Saudacao.astro` e `Welcome.astro`

  Esses componentes existem no projeto, mas não são renderizados pelas páginas atuais.

  `Welcome.astro` e os assets associados são herdados do Astro Starter Kit.

  ## Separação entre conteúdo, configuração e apresentação

  ```text
  Conteúdo da rota
    → página Astro

  Dados variáveis do tenant
    → tenants.ts

  Contrato dos dados
    → config.ts

  Estrutura global
    → Layout.astro

  Apresentação reutilizável do cabeçalho
    → Header.astro
  ```

  Essa separação permite que o cabeçalho reutilize a mesma estrutura para tenants com identidade, links, cores e recursos
  diferentes.

  O conteúdo principal das páginas ainda permanece diretamente nos arquivos de rota; ele não é fornecido por CMS ou por
  uma camada de conteúdo estruturado.

  ## Situação atual do multi-tenant

  O multi-tenant está implementado no nível de configuração e de composição do layout/header.

  Já existe:

  - tipagem para configurações de tenant;
  - duas configurações declaradas;
  - seleção de tenant por prop no layout;
  - aplicação de links, cores e flags no Header.

  Ainda não existe:

  - seleção automática por domínio;
  - rotas dinâmicas por tenant;
  - builds independentes por cliente;
  - origem externa de conteúdo;
  - uso de `empresa-b` por uma página existente.

  A configuração de `empresa-b` contém o link `/portfolio`, mas essa rota ainda não existe no projeto.

  ## Implementação atual

  A aplicação atual é composta por páginas estáticas em Astro, layout compartilhado, Header configurável e CSS local/
  global.

  Não há, na configuração atual:

  - CMS;
  - autenticação;
  - banco de dados;
  - SSR;
  - adapter de deploy;
  - integração com Cloudflare;
  - endpoints de API;
  - framework de interface adicional.

  ## Arquitetura futura

  A evolução planejada pode ampliar a base atual, mas não faz parte da implementação presente.

  Possíveis evoluções incluem:

  - conteúdo institucional real nas páginas;
  - definição funcional do CTA;
  - ampliação da acessibilidade;
  - seleção efetiva de múltiplos tenants;
  - estratégia de publicação estática;
  - CMS ou renderização sob demanda quando houver necessidade comprovada.

  Essas possibilidades devem ser tratadas como decisões futuras. A arquitetura implementada hoje é a descrita nas seções
  anteriores.