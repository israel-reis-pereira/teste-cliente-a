  # Roadmap de desenvolvimento

  ## Ponto de partida

  O projeto atual possui:

  - quatro rotas estáticas;
  - conteúdo provisório nas páginas;
  - `Layout.astro` compartilhado;
  - `Header.astro` configurável por tenant;
  - configuração de `empresa-a` e `empresa-b`;
  - uso efetivo de `empresa-a` nas rotas existentes;
  - CSS nativo e TypeScript estrito;
  - sem CMS, SSR, adapter ou integração de deploy configurada.

  As etapas abaixo partem desse estado e devem ser realizadas em ordem.

  ## 1. Manter a documentação atualizada

  - manter o README como fonte operacional do estado atual;
  - atualizar a arquitetura, o Header e o roadmap quando o código mudar;
  - manter decisões duráveis separadas de estados de implementação;
  - preservar contexto histórico sem duplicá-lo na documentação atual;
  - evitar registrar como concluído algo que não esteja presente no código.

  Resultado esperado: documentação curta, atualizada e alinhada ao código.

  ## 2. Estabilizar o Cliente A

  - substituir os textos provisórios das páginas Home, Sobre, Serviços e Contato;
  - definir a estrutura e o conteúdo institucional do Cliente A;
  - definir o destino e o comportamento do CTA “Fale Conosco”;
  - revisar os links da navegação;
  - remover ou incorporar componentes e assets herdados do Astro Starter Kit;
  - revisar o Header em desktop e mobile;
  - adicionar indicação da rota atual e melhorar os estados de acessibilidade necessários.

  Resultado esperado: um site institucional coerente para `empresa-a`, sem conteúdo de exemplo ou componentes não
  utilizados.

  ## 3. Validar o build estático

  - executar o build de produção;
  - revisar os arquivos gerados em `dist/`;
  - executar o preview local;
  - validar todas as rotas existentes;
  - corrigir problemas que impeçam a geração ou navegação do site estático.

  Resultado esperado: build estático reproduzível e navegável localmente.

  ## 4. Preparar o repositório para GitHub

  - revisar `.gitignore`;
  - confirmar que arquivos gerados, dependências e variáveis de ambiente não serão versionados;
  - revisar documentação e arquivos de configuração;
  - verificar o estado do repositório antes de novos commits;
  - publicar as alterações relevantes no repositório remoto.

  Resultado esperado: histórico Git organizado e repositório remoto alinhado ao estado local.

  ## 5. Publicar a versão estática

  - escolher e configurar o fluxo de deploy estático;
  - publicar o diretório gerado pelo build;
  - validar as rotas e assets no ambiente publicado;
  - configurar domínio e DNS quando aplicável.

  Resultado esperado: Cliente A disponível como site estático publicado.

  ## 6. Revisar qualidade

  - revisar título e metadados de cada página;
  - criar página 404, se necessária ao fluxo de publicação;
  - revisar acessibilidade, responsividade e navegação por teclado;
  - avaliar desempenho e tamanho de assets;
  - definir testes ou verificações proporcionais à complexidade real do projeto.

  Resultado esperado: uma primeira versão estável, acessível e verificável.

  ## 7. Avaliar CMS

  Esta etapa começa somente após a versão estática do Cliente A estar estabilizada.

  - definir quais conteúdos precisam ser editáveis;
  - definir contratos de dados independentes da interface;
  - avaliar a integração com CMS;
  - decidir o fluxo de atualização de conteúdo e publicação;
  - substituir dados locais apenas onde houver necessidade real.

  Resultado esperado: uma decisão documentada sobre CMS e uma integração limitada ao problema que precisa resolver.

  ## 8. Estudar Astro Rocket

  - comparar a estrutura atual com o template;
  - identificar padrões ou recursos que resolvam necessidades reais;
  - verificar licença, procedência e dependências antes de reaproveitar qualquer código;
  - incorporar somente elementos justificados pelo projeto.

  Resultado esperado: referências úteis identificadas sem substituir a arquitetura atual por um template.

  ## 9. Evoluir abstrações futuras

  Esta etapa depende de repetição real entre projetos ou tenants.

  - avaliar a utilização efetiva de mais de um tenant;
  - definir seleção de tenant por domínio, rota ou build apenas quando necessário;
  - extrair componentes, tokens e contratos que tenham uso comprovado;
  - evitar criar uma plataforma genérica antes de existir mais de um caso real;
  - manter cada abstração documentada e validada por uso prático.

  Resultado esperado: uma base reutilizável que evolui a partir de necessidades comprovadas.
