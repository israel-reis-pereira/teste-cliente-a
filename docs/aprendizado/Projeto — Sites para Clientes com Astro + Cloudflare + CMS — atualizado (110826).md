# Projeto — Sites para Clientes com Astro + Cloudflare + CMS

## 1. Objetivo

Quero criar uma estrutura profissional para desenvolver e hospedar **vários sites de clientes**.

A ideia é ter:

- Cliente A
- Cliente B
- Cliente C
- etc.

Cada cliente terá seu próprio site, conteúdo e CMS, mas eu serei responsável pelo desenvolvimento e infraestrutura.

O cliente deve conseguir administrar o conteúdo sem saber programar.

Exemplos:

- criar posts no blog;
- criar produtos;
- editar textos;
- trocar imagens;
- criar páginas;
- editar conteúdo de páginas.

Quero começar com uma demonstração chamada **Cliente A**.

---

# 2. Stack escolhida

A arquitetura recomendada até agora é:

### Frontend
**Astro**

### Hospedagem / infraestrutura
**Cloudflare Pages + Workers**

### CMS
**Storyblok**

### Código
**GitHub**

### Domínio / DNS
**Cloudflare**

### Imagens
Inicialmente, usar os recursos do próprio Storyblok/CMS.

### Backend
Cloudflare Workers somente quando o projeto realmente precisar de lógica dinâmica/API/SSR.

---

# 3. Por que Cloudflare?

Para o meu objetivo de ter vários sites, a Cloudflare parece mais interessante do que Vercel.

A ideia não é pagar US$20 por cada site.

A arquitetura desejada é:

```text
                    MINHA CONTA CLOUDFLARE

                           │
          ┌────────────────┼────────────────┐
          │                │                │
      Cliente A        Cliente B        Cliente C
          │                │                │
        Astro            Astro            Astro
          │                │                │
       Pages             Pages            Pages
          │                │                │
     cliente-a.com    cliente-b.com    cliente-c.com
```

---

# 4. Cloudflare Free

Para sites Astro predominantemente estáticos, a intenção é começar no **Free**.

Exemplos:

- site institucional;
- landing page;
- portfólio;
- blog estático;
- páginas que não precisam de SSR.

A ideia é não pagar por infraestrutura antes de existir necessidade.

---

# 5. Cloudflare Workers Paid

Quando um projeto precisar de:

- SSR;
- API;
- autenticação;
- lógica no servidor;
- processamento dinâmico;

podemos utilizar Workers.

O plano pago começa em aproximadamente **US$5/mês por conta**, com cobrança baseada no consumo dos recursos.

Importante:

**não tratar os US$5 como "10 milhões de requisições e acabou".**

O modelo da Cloudflare é baseado em recursos/consumo.

Também não devemos pensar que Workers Paid é simplesmente uma versão barata de um suposto "Pages Pro".

A arquitetura correta é:

```text
Cloudflare
│
├── Pages
│   └── hospedagem de sites
│
├── Workers
│   └── execução de código / SSR / APIs
│
├── DNS / CDN / segurança
│
└── outros serviços
    ├── R2
    ├── D1
    ├── KV
    └── etc.
```

---

# 6. Cloudflare Pro de domínio

Não devemos pagar US$20 de Cloudflare Pro automaticamente.

O plano Pro de domínio é outra camada, voltada principalmente para recursos adicionais de rede, segurança e otimização.

Para um site Astro comum, ele **não é requisito para hospedar o site**.

A estratégia é:

```text
Free
  ↓
necessidade de computação
  ↓
Workers Paid
  ↓
necessidade específica de segurança/serviço
  ↓
contratar recurso adicional
```

---

# 7. Por que Astro?

Escolhemos Astro porque:

- é excelente para sites de conteúdo;
- gera sites muito rápidos;
- funciona muito bem com conteúdo estático;
- suporta SSR quando necessário;
- pode consumir APIs de CMS headless;
- combina bem com Cloudflare;
- permite criar componentes reutilizáveis.

Para esse projeto, não estamos tentando construir uma aplicação gigantesca.

Queremos criar uma **fábrica de sites profissionais reutilizáveis**.

---

# 8. Por que Storyblok?

O Storyblok foi escolhido como primeira opção de CMS porque queremos que o cliente consiga administrar o site sem mexer no código.

A ideia é:

```text
CLIENTE
   │
   ▼
Storyblok
   │
   │ conteúdo
   ▼
Astro
   │
   ▼
Cloudflare
   │
   ▼
Site público
```

O cliente não precisa saber:

- Astro;
- TypeScript;
- GitHub;
- Cloudflare;
- API;
- HTML;
- CSS.

Ele trabalha no CMS.

---

# 9. Estrutura de cada cliente

A ideia é manter os clientes isolados.

Exemplo:

```text
Minha estrutura

Cliente A
├── Site Astro
├── GitHub
├── Cloudflare
└── Storyblok Space A

Cliente B
├── Site Astro
├── GitHub
├── Cloudflare
└── Storyblok Space B

Cliente C
├── Site Astro
├── GitHub
├── Cloudflare
└── Storyblok Space C
```

Não queremos inicialmente colocar todos os clientes dentro de um único CMS misturado.

Isso facilita:

- permissões;
- segurança;
- organização;
- manutenção;
- cobrança;
- eventual transferência do projeto para o cliente.

---

# 10. Como quero vender isso

Não quero vender simplesmente:

> "hospedagem Cloudflare".

Quero oferecer algo como:

**Site profissional + CMS + hospedagem + manutenção.**

Exemplo conceitual:

```text
Mensalidade

- hospedagem
- domínio/DNS
- SSL
- CDN
- CMS
- manutenção
- suporte
- atualizações
```

A infraestrutura normal fica incluída na mensalidade.

Caso o cliente cresça e ultrapasse franquias/limites de serviços de terceiros, o contrato deve prever que custos adicionais podem ser repassados ao cliente mediante aviso.

---

# 11. Estratégia para evitar prejuízo

Quero ser precavido com custos.

A lógica será:

```text
Cliente pequeno
      ↓
infraestrutura gratuita
      ↓
custo baixo
      ↓
cliente cresce
      ↓
monitorar consumo
      ↓
se necessário:
upgrade
      ↓
avisar cliente
      ↓
repassar custo adicional
```

Não quero assumir custos ilimitados.

---

# 12. Demonstração que vamos construir

O primeiro projeto será:

## Cliente A — Aurora Studio

Um site fictício para demonstrar o sistema.

Estrutura:

```text
Cliente A
│
├── Home
│
├── Sobre
│
├── Blog
│   ├── Primeiro artigo
│   ├── Novidades
│   └── Dicas
│
└── Produtos
    ├── Produto A
    ├── Produto B
    └── Produto C
```

---

# 13. Home da demonstração

Queremos algo semelhante a:

```text
┌───────────────────────────────────────────────┐
│ AURORA STUDIO       Início Sobre Blog Produtos│
├───────────────────────────────────────────────┤
│                                               │
│       CRIAMOS EXPERIÊNCIAS DIGITAIS           │
│                                               │
│       Sites rápidos, modernos e fáceis        │
│       de administrar.                         │
│                                               │
│       [ Conheça nosso trabalho ]              │
│                                               │
├───────────────────────────────────────────────┤
│                                               │
│               ÚLTIMOS ARTIGOS                 │
│                                               │
│  [Artigo 1]   [Artigo 2]   [Artigo 3]         │
│                                               │
├───────────────────────────────────────────────┤
│                                               │
│                  PRODUTOS                     │
│                                               │
│  [Produto 1]  [Produto 2]  [Produto 3]       │
│                                               │
└───────────────────────────────────────────────┘
```

---

# 14. Blog

O CMS terá um tipo de conteúdo semelhante a:

```text
Blog Post

├── título
├── slug
├── imagem
├── resumo
├── conteúdo
├── autor
├── data
└── SEO
```

O cliente poderá:

```text
Blog
  ↓
Novo artigo
  ↓
preencher conteúdo
  ↓
Publicar
```

E o Astro criará/renderizará:

```text
/blog/meu-primeiro-artigo
```

Sem precisar criar manualmente um arquivo `.astro` para cada artigo.

---

# 15. Produtos

Também teremos um tipo de conteúdo:

```text
Produto

├── nome
├── descrição
├── preço
├── imagem
├── categoria
└── destaque
```

O cliente poderá criar produtos pelo CMS.

Exemplo:

```text
Pizza Calabresa

Calabresa, cebola e queijo.

R$ 49,90
```

O Astro exibirá isso no site.

---

# 16. Páginas e componentes

Uma ideia importante do projeto é permitir que o cliente monte páginas utilizando blocos previamente criados por nós.

Exemplo:

```text
Página
│
├── Hero
├── Texto
├── Imagem
├── Galeria
├── Produtos
├── Blog
├── FAQ
└── Contato
```

O cliente não escreve HTML.

Ele escolhe componentes:

```text
+ Hero
+ Texto
+ Imagem
+ Galeria
+ Produtos
+ Blog
+ FAQ
+ Contato
```

Nós controlamos o design e o comportamento desses componentes.

---

# 17. Fluxo final

O objetivo é chegar nisso:

```text
                 GITHUB
                    │
                    ▼
                  ASTRO
                    │
             ┌──────┴──────┐
             │             │
          estático        SSR
             │             │
             ▼             ▼
       Cloudflare       Workers
          Pages
             │             │
             └──────┬──────┘
                    │
                    ▼
                STORYBLOK
                    │
           ┌────────┼────────┐
           ▼        ▼        ▼
       Cliente A Cliente B Cliente C
```

---

# 18. O que vamos fazer amanhã

Não tentar fazer tudo de uma vez.

A ordem será:

### ETAPA 1
Verificar ambiente:

```bash
node -v
npm -v
```

Foi onde paramos.

Recomendação: Node.js 22 LTS.

---

### ETAPA 2

Criar o projeto Astro preparado para Cloudflare:

```bash
npm create cloudflare@latest -- cliente-a --framework=astro --platform=pages
```

---

### ETAPA 3

Rodar localmente:

```bash
cd cliente-a
npm run dev
```

Abrir:

```text
http://localhost:4321
```

Primeiro confirmar que o Astro está funcionando.

---

### ETAPA 4

Criar o layout visual do Cliente A.

---

### ETAPA 5

Criar componentes:

```text
Header
Hero
BlogCard
ProductCard
Footer
```

---

### ETAPA 6

Criar a estrutura do Storyblok.

---

### ETAPA 7

Conectar Astro ↔ Storyblok.

Instalar:

```bash
npm install @storyblok/astro
```

---

### ETAPA 8

Criar no CMS:

```text
Home
Blog Post
Produto
Página
```

---

### ETAPA 9

Criar conteúdo de demonstração:

```text
3 artigos
3 produtos
1 página Sobre
```

---

### ETAPA 10

Configurar Visual Editor/preview.

---

### ETAPA 11

Testar:

```text
CMS
 ↓
alterar conteúdo
 ↓
Astro
 ↓
site
```

---

### ETAPA 12

Criar repositório GitHub.

---

### ETAPA 13

Publicar no Cloudflare.

---

### ETAPA 14

Testar o site público.

---

# 19. Regra importante para amanhã

Quero fazer isso de maneira guiada.

Não instalar várias coisas ao mesmo tempo.

Quando eu executar um comando, vou:

1. executar;
2. verificar resultado;
3. te mandar o resultado;
4. somente então continuar.

Se houver erro:

**não tentar resolver sozinho.**

Mandar o erro completo para análise.

---

# 20. Objetivo final da demonstração

No final quero conseguir mostrar para um possível cliente:

### Site

```text
cliente-a.com
```

### Painel

```text
Storyblok
```

### Cliente cria:

```text
Novo artigo
```

### Publica

E o site passa a mostrar o artigo.

Depois:

```text
Novo produto
```

Publica.

E o produto aparece no site.

Tudo isso sem eu editar o código.

---

# 21. Visão de longo prazo

Depois que o Cliente A estiver funcionando, quero transformar a estrutura em um **template reutilizável**.

Assim:

```text
Cliente A
    ↓
template base
    ↓
customização
    ↓
deploy

Cliente B
    ↓
mesmo template
    ↓
novo conteúdo/design
    ↓
deploy

Cliente C
    ↓
mesmo template
    ↓
novo conteúdo/design
    ↓
deploy
```

A ideia é não reconstruir um site inteiro do zero para cada cliente.

Quero construir uma base profissional e reutilizável.

---

# 22. Decisão atual

Por enquanto:

**Astro + Storyblok + Cloudflare + GitHub**

é a stack principal que quero testar.

Não quero pagar Cloudflare Pro de US$20 antecipadamente.

Começar com:

**Cloudflare Free**

e usar:

**Workers Paid**

quando houver necessidade real de computação/SSR.

Também não quero pagar CMS antecipadamente se o plano gratuito for suficiente para a demonstração.

---

# 23. Primeiro passo amanhã

Abrir o terminal e executar:

```bash
node -v
```

depois:

```bash
npm -v
```

Mandar os resultados.

A partir disso, continuar passo a passo na construção do **Cliente A**.

---

# 24. ARQUITETURA ATUALIZADA — MAPA DO SISTEMA

> **Status:** arquitetura de trabalho em 11/08/2026.
>
> Este documento deve ser atualizado sempre que uma decisão arquitetural importante for tomada.
> O objetivo é servir como "memória do projeto" para futuras conversas com outras IAs.

## 24.1 Visão geral

```text
                           USUÁRIO / VISITANTE
                                  │
                                  ▼
                         domínio do cliente
                         cliente-a.com
                                  │
                                  ▼
                         CLOUDFLARE DNS
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │       CLOUDFLARE        │
                    │                         │
                    │  Workers + Static       │
                    │  Assets + CDN + SSL     │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
              SITE ESTÁTICO              SITE DINÂMICO
                    │                         │
                    ▼                         ▼
             arquivos prontos          Cloudflare Worker
             HTML/CSS/JS                     │
                    │                        ▼
                    │                      Astro
                    │                        │
                    │                        ▼
                    │                    Storyblok
                    │
                    └────────────┬───────────┘
                                 │
                                 ▼
                              USUÁRIO
```

## 24.2 O papel de cada peça

### Astro

É o **framework responsável pelo site**.

Usamos Astro para:

- páginas;
- layouts;
- componentes;
- HTML;
- CSS;
- integração com conteúdo;
- geração estática;
- SSR quando realmente necessário.

Astro não é a hospedagem.

### Adapter

O adapter é a **ponte entre Astro e a plataforma de execução**.

Para Cloudflare, quando o projeto precisar de SSR/on-demand rendering ou recursos específicos de Workers:

```text
Astro
  ↓
@astrojs/cloudflare
  ↓
Cloudflare Workers
```

O adapter não substitui a Cloudflare e não é um serviço de hospedagem.

### Cloudflare

É a **infraestrutura/plataforma**.

Pode fornecer:

- DNS;
- CDN;
- SSL;
- segurança;
- Workers;
- Static Assets;
- R2;
- D1;
- KV;
- outros serviços.

Para projetos novos, a arquitetura principal será pensada em torno de **Cloudflare Workers + Static Assets**, em vez de tratar Pages como requisito arquitetural.

### Cloudflare Workers

É a **execução de código na Cloudflare**.

Pode executar:

- SSR;
- APIs;
- lógica de servidor;
- autenticação;
- integrações;
- processamento dinâmico.

Não devemos usar Workers automaticamente. Primeiro avaliamos se o projeto realmente precisa de execução no servidor.

### Storyblok

É o **CMS**.

O cliente trabalha principalmente aqui.

Exemplos:

```text
Blog
Produtos
Páginas
Textos
Imagens
SEO
```

O CMS controla o conteúdo.

O código controla o sistema visual.

### GitHub

É o **controle do código-fonte**.

Guarda:

- código Astro;
- componentes;
- configurações;
- estilos;
- histórico;
- versões.

### DNS

O domínio aponta para a infraestrutura Cloudflare.

Exemplo:

```text
cliente-a.com
      ↓
Cloudflare DNS
      ↓
infraestrutura do site
```

---

# 25. ESTÁTICO VS SSR

## 25.1 Site estático

No modelo estático:

```text
Código + conteúdo
       ↓
      build
       ↓
HTML/CSS/JS prontos
       ↓
Cloudflare
       ↓
visitante
```

A página não precisa ser reconstruída a cada visita.

### Vantagens

- simples;
- rápido;
- barato;
- excelente para sites institucionais;
- ótimo para landing pages;
- ótimo para portfólios;
- ótimo para muitos sites de conteúdo.

## 25.2 SSR

SSR significa **Server-Side Rendering**.

É uma estratégia de renderização em que a página é gerada no servidor durante a requisição.

```text
visitante
   ↓
Cloudflare Worker
   ↓
Astro
   ↓
dados/API/CMS
   ↓
HTML
   ↓
visitante
```

SSR não é um framework.

É uma **estratégia de renderização**.

Exemplos de frameworks que podem trabalhar com SSR:

- Astro;
- Next.js;
- Nuxt;
- SvelteKit.

## 25.3 SSR pode aumentar custos

SSR envolve execução de código por requisição.

Portanto:

```text
site estático
→ entrega de arquivos prontos

SSR
→ execução de código
→ geração de resposta
```

Isso pode aumentar o consumo e a complexidade.

**Regra do projeto:**

> Não usar SSR apenas porque podemos. Usar SSR quando existir uma necessidade real.

---

# 26. CMS NÃO SIGNIFICA NECESSARIAMENTE SSR

Um site Astro conectado ao Storyblok pode ser arquitetado de maneiras diferentes.

### Opção A — CMS + build

```text
Cliente
   ↓
Storyblok
   ↓
publicação / webhook
   ↓
build
   ↓
Astro
   ↓
Cloudflare
```

### Opção B — CMS + SSR

```text
Cliente
   ↓
Storyblok
   ↓
visitante
   ↓
Cloudflare Worker
   ↓
Astro
   ↓
Storyblok
   ↓
HTML
```

A decisão será tomada conforme o projeto.

Para o Cliente A, começar simples é a preferência.

---

# 27. ARQUITETURA DA FÁBRICA DE SITES

O objetivo de longo prazo não é criar cada site do zero.

Queremos construir:

```text
                     SITE FACTORY
                          │
              ┌───────────┴───────────┐
              │                       │
        DESIGN SYSTEM           COMPONENTES
              │                       │
              ├──────────┬────────────┤
              │          │            │
             Hero       Cards         FAQ
              │          │            │
              └──────────┴────────────┘
                          │
                 TEMPLATE / STARTER
                          │
             ┌────────────┼────────────┐
             │            │            │
         Cliente A    Cliente B    Cliente C
             │            │            │
        Storyblok A   Storyblok B   Storyblok C
             │            │            │
         domínio A    domínio B     domínio C
```

## Regra fundamental

> **O template não deve ser um site pronto.**
>
> Deve ser uma biblioteca de capacidades para montar sites.

---

# 28. SEPARAÇÃO ENTRE CONTEÚDO E CÓDIGO

Esta é uma regra fundamental da arquitetura:

```text
STORYBLOK
   │
   └── conteúdo
       ├── título
       ├── texto
       ├── imagem
       ├── artigo
       └── produto


ASTRO
   │
   └── apresentação
       ├── layout
       ├── tipografia
       ├── cores
       ├── espaçamento
       ├── responsividade
       └── componentes
```

Assim o cliente pode mudar conteúdo sem alterar o código.

---

# 29. CLIENTES COM DIFERENTES NÍVEIS DE AUTONOMIA

Não devemos tratar todos os clientes da mesma maneira.

## Nível 1 — Cliente que não quer administrar

A agência administra o CMS.

Fluxo:

```text
Cliente
   ↓
envia conteúdo
   ↓
agência
   ↓
CMS
```

## Nível 2 — Cliente que quer editar conteúdo

O cliente recebe acesso limitado ao CMS.

Pode:

- editar textos;
- trocar imagens;
- criar artigos;
- editar produtos;
- publicar conteúdo permitido.

## Nível 3 — Cliente avançado

O cliente pode montar páginas usando blocos previamente desenvolvidos:

```text
+ Hero
+ Texto
+ Imagem
+ Galeria
+ Cards
+ Produtos
+ Blog
+ FAQ
+ Depoimentos
+ Contato
```

O cliente continua sem escrever HTML/CSS.

A agência mantém o controle sobre o sistema visual.

---

# 30. ISOLAMENTO DOS CLIENTES

A arquitetura inicial será:

```text
CLIENTE A
├── repositório GitHub
├── projeto Astro
├── Cloudflare
├── domínio
└── Storyblok Space A

CLIENTE B
├── repositório GitHub
├── projeto Astro
├── Cloudflare
├── domínio
└── Storyblok Space B
```

Não misturar inicialmente todos os clientes em um único Space.

### Motivos

- permissões;
- segurança;
- organização;
- manutenção;
- cobrança;
- transferência futura;
- isolamento de conteúdo.

---

# 31. TEMPLATE DE TERCEIROS

Já existe um template Astro desenvolvido por outro desenvolvedor e disponibilizado no GitHub.

Esse template pode ser utilizado como **referência e acelerador**, desde que a licença permita.

Antes de incorporar qualquer parte ao produto comercial:

1. verificar a licença do repositório;
2. verificar dependências e respectivas licenças;
3. identificar quais recursos realmente precisamos;
4. entender o código antes de adotá-lo;
5. separar o que é específico daquele template do que será nossa arquitetura;
6. evitar dependência desnecessária de código que não controlamos.

### Regra

> Não transformar um template de terceiros em nossa arquitetura sem antes entendê-lo.

Podemos aproveitar:

- componentes;
- padrões;
- estilos;
- utilitários;
- ideias de organização;
- integrações;
- recursos já resolvidos.

Mas nossa base deve continuar sendo compreensível e sustentável.

---

# 32. ESTRATÉGIA PARA O TEMPLATE PRÓPRIO

Primeira fase:

```text
Cliente A
   ↓
site construído do zero
```

Segunda fase:

```text
Cliente A
   ↓
identificar componentes reutilizáveis
   ↓
design system
```

Terceira fase:

```text
site-template
   ├── componentes
   ├── layouts
   ├── estilos
   ├── SEO
   └── integrações
```

Quarta fase:

```text
site-template
      │
 ┌────┼────┐
 A    B    C
```

Somente depois avaliar uma arquitetura de packages/monorepo ou biblioteca compartilhada.

---

# 33. FLUXO DE DESENVOLVIMENTO

A ordem oficial passa a ser:

## Fase 0 — Entendimento

Aprender:

- Astro;
- componentes;
- build;
- deploy;
- adapter;
- Cloudflare;
- Workers;
- Static Assets;
- SSR;
- CMS;
- Storyblok.

## Fase 1 — Cliente A sem CMS

Construir:

```text
Home
Sobre
Blog
Produtos
Contato
```

com conteúdo local.

## Fase 2 — Cloudflare

Publicar o site.

## Fase 3 — Componentização

Criar:

```text
Header
Footer
Hero
Button
Card
BlogCard
ProductCard
FAQ
```

## Fase 4 — Storyblok

Criar:

```text
Page
Blog Post
Product
```

## Fase 5 — Integração

```text
Storyblok
   ↓
Astro
```

## Fase 6 — Visual Editor / Preview

Permitir edição visual.

## Fase 7 — Publicação

Testar o fluxo:

```text
cliente altera
      ↓
publica
      ↓
site atualiza
```

## Fase 8 — Cloudflare

Configurar:

- domínio;
- DNS;
- deploy;
- variáveis;
- produção.

## Fase 9 — Transformar em template

Somente depois que Cliente A estiver comprovadamente funcionando.

---

# 34. CHECKPOINT DO PROJETO

Sempre que uma sessão de desenvolvimento terminar, registrar:

```text
## CHECKPOINT

Data:
Projeto:

### Funcionando
- 

### Em andamento
- 

### Próximo passo
- 

### Problemas
- 

### Decisões tomadas
- 

### Comandos importantes
```bash
# comandos
```

### Arquivos importantes
- 

### Não alterar ainda
- 
```

Isso permitirá continuar a conversa com outra IA sem precisar reconstruir todo o contexto.

---

# 35. ESTADO ATUAL

## Decisões

- [x] Astro como framework
- [x] Cloudflare como infraestrutura
- [x] GitHub para código
- [x] Storyblok como primeira opção de CMS
- [x] um Space por cliente como arquitetura inicial
- [x] conteúdo separado do código
- [x] componentes reutilizáveis
- [x] começar simples
- [x] evitar SSR sem necessidade
- [ ] validar arquitetura final do deploy Cloudflare
- [ ] construir Cliente A
- [ ] integrar Storyblok
- [ ] testar publicação
- [ ] criar template próprio
- [ ] avaliar template de terceiros
- [ ] avaliar estratégia para múltiplos clientes

## Próximo passo prático

Não instalar várias ferramentas ao mesmo tempo.

Primeiro:

```bash
node -v
npm -v
```

Depois criar o projeto.

A cada etapa:

1. executar;
2. observar o resultado;
3. explicar o que aconteceu;
4. corrigir se necessário;
5. só então avançar.

---

# 36. PRINCÍPIOS DO PROJETO

1. **Primeiro entender, depois automatizar.**
2. **Não usar SSR sem necessidade.**
3. **Não adicionar serviço porque ele existe.**
4. **O CMS controla conteúdo; o código controla apresentação.**
5. **Clientes devem ser isolados.**
6. **Componentes devem ser reutilizáveis.**
7. **A infraestrutura deve crescer conforme a necessidade.**
8. **Templates de terceiros precisam ter licença compatível.**
9. **Não copiar código sem entendê-lo.**
10. **O primeiro site deve ensinar a construir os próximos.**
11. **Toda decisão arquitetural importante deve ser registrada neste arquivo.**
12. **A IA deve explicar o que está fazendo, não apenas fornecer comandos.**

---

# 37. VISÃO FINAL

O objetivo não é simplesmente:

```text
"fazer um site em Astro"
```

O objetivo é construir progressivamente:

```text
                SITE FACTORY
                     │
       ┌─────────────┼─────────────┐
       │             │             │
    Template      CMS base     Infraestrutura
       │             │             │
       └─────────────┼─────────────┘
                     │
          ┌──────────┼──────────┐
          │          │          │
       Cliente A  Cliente B  Cliente C
          │          │          │
       domínio    domínio    domínio
          │          │          │
       conteúdo   conteúdo   conteúdo
```

Primeiro vamos construir **um site muito bem feito**.

Depois vamos descobrir o que pode ser reutilizado.

Depois transformamos isso em uma base.

Só então transformamos a base em uma fábrica.
