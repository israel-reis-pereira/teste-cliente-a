# Decisões arquiteturais

Este documento registra decisões duráveis que orientam a evolução do projeto. Ele não descreve funcionalidades já implementadas; o estado atual está no README e em arquitetura/visao-geral.md.

## Site estático antes de SSR

O projeto deve priorizar geração estática enquanto as páginas puderem ser atendidas por arquivos gerados no build. SSR só deve ser considerado quando houver uma necessidade concreta que não seja bem atendida pelo fluxo estático.

## SSR e adapter Cloudflare por necessidade

O uso de renderização sob demanda e do adapter Cloudflare é condicional. A escolha depende de requisitos reais de execução no servidor, não do simples destino de publicação.

## CMS após necessidade comprovada

O conteúdo permanece local enquanto isso for suficiente. Um CMS deve ser avaliado quando houver conteúdo editável, fluxo editorial ou autonomia do cliente que justifiquem a integração.

## Separação entre conteúdo, configuração e apresentação

O conteúdo da rota, os dados variáveis de tenant e os componentes de interface devem permanecer separados. Essa divisão reduz acoplamento e permite reutilização sem transformar dados específicos em responsabilidade dos componentes.

## Abstrações após repetição real

Componentes, tokens, contratos e mecanismos de multi-tenant devem ser extraídos ou ampliados somente depois de atenderem casos reais repetidos. Necessidades hipotéticas não justificam uma plataforma genérica.

## Astro Rocket como referência

Astro Rocket pode ser estudado como referência e acelerador. Ele não define a arquitetura deste projeto, e qualquer código, asset ou dependência só deve ser incorporado após avaliação de necessidade, licença e procedência.

## Dependências por problema concreto

Novas dependências devem resolver uma necessidade identificada que não seja adequadamente atendida pela base atual. A adoção deve considerar manutenção, impacto no projeto e alternativa mais simples.
