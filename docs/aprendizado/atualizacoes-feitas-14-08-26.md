# Jornada de Aprendizado — Header Astro

## Objetivo

Documentar a evolução do componente `Header.astro`, partindo de uma implementação simples feita manualmente e chegando a uma arquitetura reutilizável para múltiplos sites/clientes.

Princípio do exercício:

> observar → decompor → reproduzir → comparar → abstrair → reutilizar

A prioridade é compreender cada decisão antes de automatizá-la com IA.

---

## 1. Estado inicial

### Arquivo

`src/components/Header.astro`

Implementação inicial:

```astro
---
interface Props {
  nomeSite: string;
}

const { nomeSite } = Astro.props;

const links = [
  { nome: "Início", url: "/" },
  { nome: "Sobre", url: "/sobre" },
  { nome: "Contato", url: "/contato" },
---

<header>
  <a href="/">{nomeSite}</a>

  <nav>
    {links.map((link) => (
      <a href={link.url}>{link.nome}</a>
    ))}
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
  }
</style>
```

### Conceitos já presentes

- componente Astro;
- Props;
- TypeScript básico;
- array de dados;
- `map()`;
- HTML semântico;
- CSS puro;
- separação entre frontmatter, template e estilo.

---

# 2. Referência visual

O exercício tomou como referência visual o Header do site do Cartório de Barretos.

A estrutura observada foi aproximadamente:

```text
HEADER
├── identidade/logo
├── navegação
│   ├── Início
│   ├── Serviços
│   ├── Galeria
│   ├── Modelos
│   ├── Sobre
│   └── Contato
└── ações
    ├── Entrar
    ├── Fale Conosco
    └── Menu mobile
```

A referência foi utilizada para estudar:

- estrutura;
- espaçamento;
- navegação;
- ações;
- responsividade;
- comportamento mobile;
- hierarquia visual.

Não se deve copiar cegamente a implementação técnica encontrada no site de referência.

---

# 3. Roteiro de evolução

| Área | Situação inicial |
|---|---|
| HTML semântico | 🟢 Boa base |
| Astro | 🟢 Correto |
| Props | 🟢 Já começou |
| TypeScript | 🟢 Correto, porém simples |
| `map()` | 🟢 Boa utilização |
| CSS | 🟢 Simples e compreensível |
| Reutilização | 🟡 Parcial |
| Links | 🟡 Ainda fixos |
| Responsividade | 🔴 Ainda não implementada |
| Menu mobile | 🔴 Não implementado |
| Acessibilidade | 🟡 Base boa, faltam estados |
| Ações do Header | 🔴 Ainda não existem |
| Arquitetura multi-cliente | 🟡 Próximo passo |

---

# 4. Etapas planejadas

## Etapa 1 — Links como Props

Problema original:

```ts
const links = [
  { nome: "Início", url: "/" },
  { nome: "Sobre", url: "/sobre" },
  { nome: "Contato", url: "/contato" },
];
```

O Header conhece os dados específicos do site.

Objetivo:

```text
Página
  ↓
fornece links
  ↓
Header
  ↓
renderiza links
```

Modelo conceitual:

```ts
interface Link {
  nome: string;
  url: string;
}

interface Props {
  nomeSite: string;
  links: Link[];
}
```

### Ganho

O componente deixa de decidir quais links existem e passa a receber esses dados.

---

## Etapa 2 — Reutilização

O mesmo Header deve conseguir atender:

```text
Cliente A
├── Início
├── Sobre
└── Contato

Cliente B
├── Início
├── Serviços
├── Galeria
└── Contato

Cliente C
├── Home
├── Produtos
├── Blog
└── Orçamento
```

Sem alterar a estrutura interna do `Header.astro`.

Princípio:

> o componente cuida da apresentação; quem usa o componente fornece os dados.

---

## Etapa 3 — Acessibilidade básica

Adicionar e revisar:

- identificação da navegação;
- foco visível;
- estados de link;
- `aria-current` quando aplicável;
- controles de menu com nomes acessíveis;
- estados de abertura/fechamento;
- navegação por teclado.

Exemplo conceitual:

```html
<nav aria-label="Navegação principal">
```

Para a página atual:

```html
<a href="/sobre" aria-current="page">Sobre</a>
```

---

## Etapa 4 — Ações do Header

A referência visual possui ações como:

```text
[Entrar] [Fale Conosco]
```

A arquitetura deve permitir que ações sejam configuráveis em vez de ficarem presas a um cliente específico.

Princípio:

```text
dados do cliente
      ↓
ações
      ↓
Header
```

---

## Etapa 5 — Responsividade

Estrutura desejada:

```text
Desktop
[ Brand ] [ Navigation ] [ Actions ]

Mobile
[ Brand ]                         [ Menu ]
```

O Header deve se adaptar a diferentes larguras sem depender de valores fixos específicos de um único site.

---

## Etapa 6 — Menu mobile

Comportamento:

```text
Menu fechado
      ↓
clique
      ↓
Menu aberto
      ↓
clique
      ↓
Menu fechado
```

O botão deve refletir seu estado de forma acessível.

Importante:

> criar o botão visual não é o mesmo que implementar o comportamento.

---

## Etapa 7 — Arquitetura multi-cliente

O objetivo final é separar:

```text
DADOS DO CLIENTE
        ↓
CONFIGURAÇÃO
        ↓
COMPONENTES
        ↓
INTERFACE
```

Exemplo conceitual:

```text
Cliente A
  ↓
configuração A
  ↓
Header

Cliente B
  ↓
configuração B
  ↓
Header
```

O componente permanece o mesmo.

---

# 5. Orquestração por configuração

Uma arquitetura posterior pode utilizar uma configuração de cliente:

```ts
interface TenantConfig {
  nomeSite: string;
  links: Link[];
  // demais configurações
}
```

O layout recebe um identificador:

```astro
<Layout title="Início" tenantId="empresa-a">
```

e resolve a configuração correspondente:

```ts
const currentTenant = tenants[tenantId];
```

O Header recebe a configuração:

```astro
<Header config={currentTenant} />
```

Isso cria uma separação clara entre:

```text
identidade do cliente
+
dados de navegação
+
regras visuais
+
componente reutilizável
```

---

# 6. Orquestrador do Layout Global

### Arquivo

`src/layouts/Layout.astro`

Exemplo:

```astro
---
import Header from '../components/Header.astro';
import { tenants } from '../constants/tenants';

interface Props {
  title: string;
  tenantId: "empresa-a" | "empresa-b";
}

const { title, tenantId } = Astro.props;
const currentTenant = tenants[tenantId];
---

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | {currentTenant.nomeSite}</title>
  </head>

  <body>
    <Header config={currentTenant} />
    <slot />
  </body>
</html>

<style is:global>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: #f9fafb;
    color: #111827;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  [data-theme="dark"] body {
    background-color: #111827;
    color: #f9fafb;
  }
</style>
```

---

# 7. Página de exemplo

### Arquivo

`src/pages/index.astro`

Exemplo:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Início" tenantId="empresa-a">
  <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <h1>Painel de Controle — Visão Geral</h1>

    <p>
      Componente renderizado e customizado dinamicamente via
      configuração multi-cliente.
    </p>
  </main>
</Layout>
```

Alterar:

```astro
tenantId="empresa-a"
```

para outro tenant deve alterar a configuração consumida pela interface.

---

# 8. CSS para ações e menu

A implementação posterior pode conter regras como:

```css
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-theme,
.btn-mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--tenant-text);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
}

.btn-theme:hover,
.btn-mobile-toggle:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

:global([data-theme="dark"]) .btn-theme:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.icon-sun {
  display: none;
}

.icon-moon {
  display: block;
}

:global([data-theme="dark"]) .icon-sun {
  display: block;
}

:global([data-theme="dark"]) .icon-moon {
  display: none;
}

.icon-menu-close {
  display: none;
}

.icon-menu-open {
  display: block;
}

.btn-mobile-toggle.is-active .icon-menu-close {
  display: block;
}

.btn-mobile-toggle.is-active .icon-menu-open {
  display: none;
}

.btn-mobile-toggle {
  display: none;
}

.btn-cta {
  background-color: var(--tenant-primary);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s ease;
}

.btn-cta:hover {
  filter: brightness(0.9);
}

@media (max-width: 768px) {
  .desktop-only-cta {
    display: none;
  }

  .btn-mobile-toggle {
    display: flex;
  }

  .nav-menu {
    display: block;
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    background-color: var(--tenant-bg);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.2s ease,
      visibility 0.2s;
  }

  .nav-menu.is-active {
    max-height: 400px;
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .nav-link {
    width: 100%;
    font-size: 1.1rem;
  }

  .mobile-only-cta {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
  }

  .style-mobile-cta {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }
}
```

---

# 9. Lições técnicas

## 9.1 Desacoplamento por inversão de controle

O componente visual recebe dados estruturados em vez de definir internamente todas as informações específicas do cliente.

Antes:

```text
Header
 ├── estrutura
 └── dados específicos
```

Depois:

```text
configuração
 └── dados

Header
 └── estrutura + apresentação
```

---

## 9.2 Props como contrato

Props não servem apenas para "passar valores".

Elas definem um contrato entre quem utiliza o componente e o próprio componente.

Exemplo:

```ts
interface Props {
  nomeSite: string;
  links: Link[];
}
```

Isso documenta o que o Header espera receber.

---

## 9.3 TypeScript como descrição dos dados

A tipagem transforma uma estrutura implícita:

```text
link
```

em uma estrutura explícita:

```text
Link
├── nome: string
└── url: string
```

Isso facilita manutenção e reutilização.

---

## 9.4 CSS Tokens

Variáveis CSS como:

```css
var(--tenant-primary)
var(--tenant-text)
var(--tenant-bg)
```

podem permitir que diferentes clientes alterem aspectos visuais sem duplicar a estrutura do componente.

A separação desejada é:

```text
componente
    +
tokens
    ↓
aparência do cliente
```

---

## 9.5 Acessibilidade como requisito estrutural

Acessibilidade não deve ser adicionada apenas no final.

Ela deve participar da arquitetura desde o início:

- HTML semântico;
- navegação por teclado;
- foco;
- nomes acessíveis;
- estados;
- `aria-*` quando necessário;
- comportamento previsível.

---

# 10. Regra de trabalho com IA

A IA não deve substituir o processo de aprendizado.

Fluxo adotado:

```text
observar
   ↓
decompor
   ↓
implementar manualmente
   ↓
testar
   ↓
pedir análise à IA
   ↓
comparar sugestões
   ↓
decidir o que aceitar
   ↓
refatorar
```

Não usar inicialmente:

> "Faça um Header profissional."

Preferir:

> "Analise meu Header, não altere arquivos, explique os problemas e proponha uma arquitetura melhor."

Somente depois da compreensão:

> "Implemente a solução proposta."

---

# 11. Checklist final

O Header será considerado concluído quando:

- [ ] HTML semântico estiver adequado
- [ ] Astro estiver correto
- [ ] Props estiverem tipadas
- [ ] TypeScript descrever os dados corretamente
- [ ] links forem configuráveis
- [ ] `map()` estiver sendo utilizado adequadamente
- [ ] CSS estiver organizado
- [ ] componente for reutilizável
- [ ] acessibilidade básica estiver implementada
- [ ] ações forem configuráveis
- [ ] layout for responsivo
- [ ] menu mobile funcionar
- [ ] estados do menu forem acessíveis
- [ ] configuração multi-cliente estiver separada do componente
- [ ] tokens visuais puderem ser configurados por cliente
- [ ] revisão final confirmar ausência de acoplamentos desnecessários

---

# 12. Estado conceitual da arquitetura final

```text
                    SITE
                      │
                      ▼
                  Layout.astro
                      │
                tenantId / rota
                      │
                      ▼
                Tenant Config
                      │
          ┌───────────┼───────────┐
          │           │           │
       identidade   links       ações
          │           │           │
          └───────────┼───────────┘
                      ▼
                 Header.astro
                      │
          ┌───────────┼───────────┐
          │           │           │
        Brand      Navigation    Actions
          │           │           │
          └───────────┼───────────┘
                      ▼
                 CSS / Tokens
                      │
              ┌───────┴───────┐
              ▼               ▼
           Desktop          Mobile
```

---

## Resultado esperado

A evolução não é apenas criar um Header mais bonito.

O objetivo é aprender a transformar:

```text
um componente específico
```

em:

```text
um componente reutilizável
```

e posteriormente em:

```text
uma arquitetura capaz de gerar vários sites.
```

A meta final é que novos clientes exijam principalmente **novos dados e configuração**, e não a reconstrução do Header do zero.

---

## Próximo passo

A próxima etapa prática deve ser a **Etapa 1: transformar `links` em uma Prop tipada**, mantendo todo o restante do Header o mais simples possível.

Depois de validar essa etapa, avançar para reutilização, acessibilidade, ações, responsividade, menu mobile e, por último, arquitetura multi-cliente.
