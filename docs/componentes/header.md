# Header

## Responsabilidade

Header.astro é o cabeçalho compartilhado da aplicação. Ele recebe a configuração de um tenant e renderiza a identidade do site, a navegação e as ações habilitadas para esse tenant.

O componente não escolhe o tenant nem define os dados de navegação. Essas responsabilidades pertencem às páginas, ao layout e à configuração em constants/tenants.ts.

## Configuração recebida

O componente recebe a prop config, tipada como TenantConfig. O contrato está em types/config.ts e inclui:

- id e nome do site;
- links de navegação;
- cores primária, de fundo e de texto;
- flags para alternância de tema e CTA.

Layout.astro resolve a configuração pelo tenantId recebido da página e entrega o objeto completo ao Header.

## Navegação

Os links são lidos da configuração do tenant e renderizados em uma navegação semântica com rótulo acessível. Atualmente, a configuração de empresa-a fornece os links Home, Serviços e Sobre.

O componente não informa visualmente nem por aria-current qual rota está ativa.

## Tema

Quando hasThemeToggle está habilitado, o Header exibe um botão para alternar entre tema claro e escuro.

- a preferência salva é lida de localStorage;
- na ausência de preferência salva, é usada a preferência de cor do sistema;
- o tema é aplicado no elemento html por meio do atributo data-theme;
- a preferência selecionada é salva em localStorage.

As cores específicas do tenant são expostas como variáveis CSS no elemento header. No tema escuro, as cores de fundo e texto do cabeçalho são sobrescritas.

## Menu móvel e responsividade

Em larguras de até 768px, o botão de menu é exibido e a navegação passa a abrir e fechar visualmente.

O botão atualiza:

- aria-expanded;
- aria-label;
- classes de estado para ícones e menu.

O menu móvel é controlado por JavaScript executado no navegador.

## CTA

Quando hasCtaButton está habilitado, o Header exibe o botão visual Fale Conosco em desktop e dentro do menu móvel.

O CTA não possui link, destino, evento de envio ou outra ação implementada.

## Acessibilidade

O componente inclui rótulos para o cabeçalho e para a navegação, controles nomeados e associação entre o botão móvel e o menu por aria-controls.

Pendências reais:

- indicar a rota atual;
- revisar foco visível e fluxo completo de teclado;
- definir o comportamento do menu em interações adicionais, como mudança de rota ou Escape;
- definir a ação acessível do CTA.

## Estado atual

O Header é reutilizável no nível de configuração: links, identidade, cores e flags são recebidos por TenantConfig.

Ele é usado pelo Layout em todas as páginas existentes. O projeto declara empresa-a e empresa-b, mas apenas empresa-a é selecionada pelas rotas atuais.
