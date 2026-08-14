# Plano Astro + Cloudflare + CMS

## Status

### Fase 0 — CONCLUÍDA

- Etapa 1: mapa geral do sistema
- Etapa 2: do `.astro` ao site publicado
- Etapa 3: base reutilizável para múltiplos clientes

### Próximo ponto

**Fase 1 — Preparação do ambiente**

---

# O que aprendemos

## Arquitetura básica

```text
Visitante
   ↓
Domínio / DNS
   ↓
Cloudflare
   ├── Static Assets
   └── Worker
          ↓
       Astro SSR
```

Conteúdo:

```text
Cliente
   ↓
Storyblok
   ↓
conteúdo
   ↓
Astro
   ↓
site
```

## Astro

Astro é o framework usado para construir/renderizar o site.

Não tratar Astro como sinônimo de servidor.

```text
Astro = framework para construir/renderizar o site
```

Um `.astro` pode combinar:

- JavaScript/TypeScript
- HTML/markup
- CSS

O navegador não recebe o `.astro`; o projeto é processado pelo Astro.

## Build

```text
src/
 ↓
Astro
 ↓
build
 ↓
dist/
```

- `src/` = código-fonte
- `dist/` = resultado do build

## Site estático

```text
código
 ↓
build
 ↓
HTML/CSS/JS pronto
 ↓
Cloudflare
 ↓
visitante
```

## SSR

SSR = **Server-Side Rendering**.

A página é renderizada no servidor durante uma requisição.

```text
request
 ↓
Worker/servidor
 ↓
Astro
 ↓
HTML
 ↓
usuário
```

SSR não deve ser usado automaticamente.

## Cloudflare

Cloudflare é uma plataforma de infraestrutura, não apenas "hospedagem".

Pode fornecer:

- DNS
- CDN/rede de entrega
- Static Assets
- Workers
- segurança
- outros serviços

## Adapter

Adapter é a ponte entre Astro e o ambiente de execução.

Exemplo:

```text
Astro
  ↓
@astrojs/cloudflare
  ↓
Cloudflare Workers
```

Importante:

- Astro estático pode não precisar do adapter Cloudflare.
- SSR/on-demand no Cloudflare usa o adapter apropriado.
- Adapter não é sinônimo de hospedagem.

## CMS

Storyblok será usado para conteúdo editável pelo cliente.

Pensar:

> Storyblok = o que dizer  
> Astro = como mostrar

O cliente não deve precisar editar arquivos Astro.

---

# Estratégia para múltiplos clientes

A ideia futura é:

```text
                 NOSSA BASE
                     │
         ┌───────────┼───────────┐
         │           │           │
     componentes  configuração  design
         │           │           │
         └───────────┼───────────┘
                     │
              projeto cliente
                     │
              ┌──────┴──────┐
              │             │
            Astro        Storyblok
              │             │
              └──────┬──────┘
                     │
                 Cloudflare
                     │
                   domínio
```

Uma mesma base pode gerar:

```text
Cliente A
Cliente B
Cliente C
```

Mudando:

- conteúdo
- branding
- domínio
- configuração
- funcionalidades

Princípio:

> Construir → observar repetição → extrair → reutilizar.

Não criar uma plataforma genérica antes de ter um site real validando as necessidades.

---

# Clientes com perfis diferentes

## Cliente avançado

Pode ter mais autonomia para:

- criar páginas
- publicar blog
- editar banners
- configurar conteúdo
- usar SEO
- trabalhar com conteúdo estruturado

## Cliente com pouca familiaridade digital

Precisamos reduzir decisões e riscos:

- campos bem nomeados
- modelos prontos
- componentes pré-configurados
- limites para evitar quebrar layout
- instruções visuais
- treinamento/documentação
- eventualmente suporte administrado

Princípio:

> Dar autonomia sem entregar liberdade suficiente para quebrar o design.

---

# Astro Rocket — template de referência

O README enviado mostra que o template possui recursos como:

- Astro
- TypeScript
- Tailwind
- design tokens
- componentes reutilizáveis
- SEO
- blog
- busca
- i18n
- animações
- React Islands
- API routes
- suporte Cloudflare
- testes/lint
- configuração central

Ele será tratado como:

> **acelerador + referência + fonte de padrões**

e não como a arquitetura definitiva da nossa plataforma.

## Estratégia

Primeiro:

```text
Projeto do zero
```

Depois:

```text
Nosso projeto
      VS
Astro Rocket
```

Então decidir o que vale incorporar.

Não copiar cegamente funcionalidades que não precisamos.

## Licença

O README informa MIT.

Antes de incorporar código ao produto comercial, verificar:

- `LICENSE`
- dependências
- licenças das dependências
- assets
- fontes
- imagens
- ícones
- código herdado de forks/projetos anteriores

---

# Arquitetura conceitual atual

```text
                         DESENVOLVEDOR
                              │
                              ▼
                           GITHUB
                              │
                              ▼
                            ASTRO
                              │
               ┌──────────────┼──────────────┐
               │              │              │
          componentes       páginas       estilos
               │              │              │
               └──────────────┼──────────────┘
                              │
                              ▼
                            BUILD
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 STATIC               SSR
                    │                   │
                    ▼                   ▼
             Cloudflare Assets      Worker
                    │                   │
                    └─────────┬─────────┘
                              │
                              ▼
                           VISITANTE

Storyblok
   │
   │ conteúdo
   ▼
 Astro
```

---

# Fase 1 — Próximo passo

## Objetivo

Construir o **Cliente A do zero**.

Não começar pelo Astro Rocket.

Aprender primeiro:

```text
Astro
 ↓
componentes
 ↓
layout
 ↓
build
 ↓
Cloudflare
```

Depois adicionar Storyblok.

---

## Sequência

### 1. Preparar ambiente

Verificar:

- sistema operacional
- Node.js
- npm/pnpm
- Git
- GitHub
- VS Code
- acesso à Cloudflare

Antes de instalar, conferir as versões atuais recomendadas pela documentação oficial.

### 2. Criar projeto Astro

Criar um projeto mínimo e entender cada arquivo gerado.

### 3. Explorar estrutura

```text
src/
├── pages/
├── components/
├── layouts/
└── styles/

public/

astro.config.*
package.json
tsconfig.*
```

### 4. Criar primeira página

Entender:

- `.astro`
- frontmatter
- HTML
- CSS
- componentes

### 5. Criar componentes

Começar com:

```text
Header.astro
Hero.astro
Section.astro
Footer.astro
```

### 6. Criar layout

Criar:

```text
BaseLayout.astro
```

Entender:

- `Astro.props`
- `<slot />`

### 7. Definir estilos

Avaliar:

- CSS/Tailwind
- design tokens
- responsividade
- componentes reutilizáveis

Não instalar bibliotecas apenas por hábito.

### 8. Fazer build local

Entender:

```text
src
 ↓
Astro
 ↓
dist
```

Inspecionar o resultado.

### 9. Primeiro deploy

Publicar uma primeira versão na Cloudflare.

Primeiro entender publicação estática antes de introduzir SSR.

### 10. Domínio

Depois do deploy:

```text
domínio
 ↓
DNS
 ↓
Cloudflare
 ↓
site
```

---

# O que não fazer ainda

Não começar imediatamente com:

- Storyblok
- autenticação
- banco de dados
- SSR
- Worker complexo
- multi-tenant
- monorepo
- dezenas de componentes
- e-commerce
- analytics
- newsletter
- comentários
- i18n

Adicionar complexidade apenas quando houver necessidade.

---

# Perguntas que a Fase 1 deve responder

Ao final, saber explicar:

1. O que é um projeto Astro?
2. O que é um `.astro`?
3. O que é um componente?
4. O que é um layout?
5. O que acontece no build?
6. O que é `dist/`?
7. O que é deploy?
8. O que a Cloudflare está fazendo?
9. Quando precisamos de Worker?
10. Quando precisamos de SSR?
11. Quando precisamos do adapter?
12. Como adicionar conteúdo sem duplicar componentes?

---

# Regra de aprendizado

Para cada etapa:

```text
1. Explicar o conceito
2. Fazer junto
3. Executar
4. Observar o resultado
5. Explicar o que aconteceu
6. Só então avançar
```

Se algo não estiver claro, parar e explicar antes de continuar.

---

# Projeto inicial

Primeiro site real:

```text
Home
├── Header
├── Hero
├── Sobre
├── Serviços
├── CTA
└── Footer

Sobre
Serviços
Contato
```

Depois:

```text
Blog
 ↓
Storyblok
```

E posteriormente:

```text
Cloudflare
 ↓
produção
```

---

# Ponto exato para retomar

```text
FASE 0
├── Etapa 1 ✅
├── Etapa 2 ✅
└── Etapa 3 ✅

FASE 1
└── Preparação do ambiente ← COMEÇAR AQUI
```

Primeira pergunta ao retomar:

> **Qual é seu sistema operacional e o que você já tem instalado?**

Depois verificar as versões atuais das ferramentas e preparar o ambiente.

---

# Princípio principal

> **Não queremos apenas fazer sites. Queremos aprender a construir um sistema que permita fazer bons sites repetidamente.**

Mas primeiro:

> **um site funcionando.**
