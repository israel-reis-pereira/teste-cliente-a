# IMPLEMENTAÇÃO COMPLETA — SPEEDRUN CFA PILATES E FISIOTERAPIA BARRETOS

Você está trabalhando no projeto existente cujo objetivo é executar o **Speedrun MVP da CFA Pilates e Fisioterapia Barretos**.

Leia primeiro e siga obrigatoriamente:

```text
docs/arquitetura/RELATORIO-02-SPEEDRUN-CFA.md
```

Esse arquivo é a especificação funcional principal do projeto.

A sua tarefa é transformar o projeto atual em um **MVP institucional moderno, responsivo, acessível, semanticamente correto, preparado para SEO/local search/AI search e arquitetado para receber um CMS Headless posteriormente**, sem transformar o projeto em um sistema maior do que a necessidade da empresa.

---

# 1. REGRA ABSOLUTA DE CONTEÚDO

A fonte de conteúdo da CFA é EXCLUSIVAMENTE o conteúdo já fornecido no `RELATORIO-02-SPEEDRUN-CFA.md`.

Não pesquise outras empresas para obter conteúdo.

Não copie textos, serviços, descrições, preços, profissionais, especialidades, números, depoimentos ou afirmações de terceiros.

Os sites:

* Studio Movimentar
* Clínica FH

foram fornecidos SOMENTE como referência de estrutura, organização visual e experiência de navegação.

Eles NÃO são fontes de conteúdo.

Não utilize informações desses sites na CFA.

Se uma informação não estiver no relatório da CFA, NÃO INVENTE.

Quando faltar informação, prefira uma solução visual neutra a criar conteúdo fictício.

---

# 2. OBJETIVO

Criar uma landing page/site institucional de alta qualidade para:

**CFA Pilates e Fisioterapia Barretos**

Objetivo principal:

```text
usuário encontra a CFA
        ↓
entende rapidamente o que a empresa oferece
        ↓
percebe estrutura/acolhimento
        ↓
confia na empresa
        ↓
agenda pelo WhatsApp
```

CTA principal:

**Agendar pelo WhatsApp**

CTA secundário:

**Conhecer o Instagram**

O WhatsApp deve aparecer em pontos estratégicos, mas sem transformar a página em uma sequência exagerada de botões.

---

# 3. ANTES DE ALTERAR QUALQUER COISA

Primeiro faça uma inspeção do projeto existente.

Verifique:

* `package.json`
* `astro.config.mjs`
* `tsconfig.json`
* `src/`
* `public/`
* `src/components`
* `src/layouts`
* `src/pages`
* `src/constants`
* `src/types`
* configurações existentes do Astro
* Tailwind, caso já esteja instalado
* bibliotecas já existentes
* componentes reutilizáveis existentes
* scripts npm
* configuração de build
* arquivos de documentação

Não apague arquivos indiscriminadamente.

Não substitua a arquitetura existente sem necessidade.

Não crie uma segunda arquitetura paralela.

Não adicione dependências quando a funcionalidade puder ser implementada com HTML/CSS/JS/Astro existente.

A regra é:

> **mínima alteração estrutural necessária para obter um MVP profissional.**

Se já existir uma solução equivalente, reutilize-a.

---

# 4. STACK

A arquitetura alvo é:

```text
Astro
├── TypeScript
├── Tailwind CSS
├── HTML semântico
├── JavaScript mínimo
│
├── CMS Headless
│   └── Sanity
│
├── Git
│   └── GitHub
│
└── Deploy
    └── Cloudflare
```

O frontend deve continuar sendo predominantemente estático.

Não transforme o site em SPA.

Não introduza React/Vue/Svelte apenas para componentes simples.

Use JavaScript somente quando houver benefício real de interação.

Priorize:

```text
HTML renderizado
+
CSS
+
mínimo JS
```

---

# 5. ARQUITETURA CMS-FIRST

Mesmo que o CMS ainda não esteja conectado a um projeto Sanity remoto, o frontend deve nascer preparado para isso.

Criar uma camada de conteúdo que permita trocar:

```text
conteúdo local
        ↓
Sanity
```

sem precisar reescrever os componentes visuais.

A arquitetura deve separar:

```text
CONTENT
   ↓
DATA ACCESS
   ↓
COMPONENTS
   ↓
LAYOUT
   ↓
PAGE
```

Evite colocar textos diretamente espalhados por vários componentes.

Criar tipos/interfaces para os dados principais.

Estruturar o código de modo que o conteúdo possa futuramente vir de:

```text
Sanity → Astro
```

preferencialmente utilizando a integração oficial/documentação atual do Astro + Sanity quando a conexão real for implementada.

Não colocar tokens, IDs privados ou credenciais diretamente no código.

Utilizar variáveis de ambiente para informações privadas.

---

# 6. MODELO DE CONTEÚDO DO CMS

Preparar a arquitetura para estes documentos:

## SiteSettings

```text
nome
logo
telefone
whatsapp
instagram
endereco
plusCode
```

## Horarios

```text
dia
aberto
abertura
fechamento
```

## Servicos

```text
titulo
descricao
imagem
ordem
ativo
```

## Depoimentos

```text
nome
texto
nota
data
```

## Estrutura

```text
titulo
descricao
icone
ordem
```

Não criar campos desnecessários.

Não criar um CMS genérico.

O CMS deve refletir a necessidade real de uma pequena empresa local.

---

# 7. DADOS DA CFA

Utilizar exatamente os dados definidos no relatório.

Nome:

```text
CFA Pilates e Fisioterapia Barretos
```

Endereço:

```text
Rua Trinta e Quatro (Numeração Com Zero Inicial), 725
Centro, Barretos - SP
14780-070
```

Telefone:

```text
(17) 99771-9272
```

WhatsApp:

utilizar o link fornecido no relatório.

Instagram:

utilizar o Instagram fornecido no relatório.

Plus Code:

```text
CCRC+VX Centro, Barretos - SP
```

Horários:

```text
Segunda    07:00–20:00
Terça      07:00–20:00
Quarta     07:00–20:00
Quinta     07:00–20:00
Sexta      07:00–11:00
Sábado     Fechado
Domingo    Fechado
```

Serviços/opções informadas:

```text
Pilates
Fisioterapia
Aulas on-line
Serviços no local
```

---

# 8. IDENTIDADE VISUAL

A logo da CFA fornecida no projeto é a principal referência visual.

Construir uma identidade visual coerente com a logo.

Não inventar uma nova marca.

Não trocar o logotipo.

Não aplicar efeitos exagerados.

A direção visual deve transmitir:

* movimento
* acolhimento
* saúde
* leveza
* profissionalismo
* proximidade
* elegância

Utilizar a cor da identidade visual como referência principal, mas manter contraste adequado.

Não usar excesso de verde.

Criar uma paleta com:

```text
cor principal
cor de apoio
background claro
texto principal
texto secundário
bordas
estado de foco
estado de hover
```

A interface deve parecer uma empresa real, não um template genérico de startup.

---

# 9. ESTRUTURA DA PÁGINA

Criar uma página institucional completa.

## Header

Deve conter:

* logo
* navegação
* CTA "Agendar"

Navegação:

```text
Início
Pilates
Fisioterapia
Estrutura
Depoimentos
Contato
```

No mobile:

* menu acessível
* botão de abertura
* botão de fechamento
* navegação por teclado
* `aria-expanded`
* `aria-controls`
* foco visível

---

# 10. HERO

Criar uma seção visual forte.

Conteúdo principal:

```text
CFA Pilates e Fisioterapia
Barretos
```

Mensagem:

```text
Pilates e Fisioterapia com um ambiente acolhedor.
```

CTA:

```text
Agendar pelo WhatsApp
```

O hero deve comunicar imediatamente:

```text
quem é
onde está
o que oferece
qual é o próximo passo
```

Não criar promessas médicas.

Não afirmar resultados garantidos.

Não usar frases como:

```text
a melhor clínica
resultado garantido
cura
tratamento definitivo
especialistas em X
```

se essas informações não estiverem na fonte.

---

# 11. SERVIÇOS

Criar uma seção clara para:

```text
Pilates
Fisioterapia
Aulas on-line
```

Também considerar:

```text
Serviços no local
```

As descrições devem ser curtas.

Não inventar especialidades dentro de fisioterapia.

Não inventar modalidades de Pilates.

Não inventar tratamentos.

Não inventar equipamentos.

Não inventar profissionais.

---

# 12. EXPERIÊNCIA / DEPOIMENTOS

Criar seção de depoimentos utilizando SOMENTE os relatos fornecidos.

Os depoimentos precisam ficar claramente identificados como:

```text
Depoimento de cliente
```

Não transformar um relato individual em promessa geral.

Exemplo de estrutura:

```text
"texto do depoimento"

— Angela Morais
```

Quando houver resposta da empresa, pode ser apresentada de forma secundária, mas não misturar a resposta do proprietário com a fala do cliente.

Preservar a natureza testimonial do conteúdo.

Não criar avaliações adicionais.

Não alterar o sentido dos relatos.

---

# 13. ESTRUTURA E COMODIDADES

Criar uma seção visual para apresentar as características informadas:

## Acessibilidade

* banheiro acessível para pessoas em cadeira de rodas
* entrada acessível para pessoas em cadeira de rodas
* estacionamento acessível para pessoas em cadeira de rodas

## Comodidades

* banheiro
* Wi-Fi
* Wi-Fi gratuito
* chuveiro

## Estacionamento

* estacionamento descoberto gratuito
* estacionamento gratuito na rua
* estacionamento no local

## Pagamentos

* cartão de crédito
* cartão de débito
* pagamento por dispositivo móvel via NFC

Não transformar essas informações em claims exagerados.

---

# 14. INCLUSÃO

Criar uma seção discreta e elegante para:

```text
Empresa que acolhe a comunidade LGBTQ+
Espaço seguro para pessoas transgênero
```

Também pode apresentar:

```text
Se identifica como uma empresa de empreendedoras
```

O bloco deve ser informativo, não publicitário demais.

---

# 15. CONTATO

Criar uma seção de contato extremamente clara.

Mostrar:

```text
Endereço
Telefone
WhatsApp
Instagram
Horários
Agendamento
```

O usuário deve conseguir realizar a ação principal sem procurar demais.

Criar:

```text
Agendar pelo WhatsApp
```

como CTA principal.

Não criar formulário de contato se ele não for necessário para o MVP.

O WhatsApp já é o canal de conversão fornecido.

---

# 16. MAPA

Não incorporar iframe pesado do Google Maps no carregamento inicial se isso prejudicar performance.

Preferir um link/botão para abrir a localização no Google Maps.

Caso um mapa seja posteriormente necessário, carregá-lo de maneira consciente e sem prejudicar o carregamento inicial.

---

# 17. FOOTER

Incluir:

* logo
* nome
* endereço
* telefone
* WhatsApp
* Instagram
* horário resumido

Criar links corretos.

Links externos devem utilizar atributos apropriados quando necessário.

---

# 18. RESPONSIVIDADE

Desenvolver Mobile First.

Testar pelo menos:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
```

Garantir:

* nenhum overflow horizontal
* textos legíveis
* botões utilizáveis
* navegação funcional
* imagens proporcionais
* grids adaptáveis
* espaçamento coerente
* header funcional
* footer funcional

Não simplesmente reduzir o desktop para mobile.

Projetar o mobile conscientemente.

---

# 19. ACESSIBILIDADE

Aplicar boas práticas modernas de acessibilidade.

Obrigatório:

* HTML semântico
* hierarquia correta de headings
* `main`
* `header`
* `nav`
* `section`
* `footer`
* labels adequados quando houver formulário
* `alt` nas imagens
* links descritivos
* foco visível
* navegação por teclado
* contraste adequado
* estados `hover`
* estados `focus-visible`
* `aria-label` somente quando necessário
* `aria-expanded` em menus
* `aria-current` quando apropriado

Não utilizar ARIA desnecessariamente quando HTML semântico já resolver.

Não criar texto dentro de imagens quando texto HTML puder ser utilizado.

Respeitar `prefers-reduced-motion`.

Animações não podem ser necessárias para compreender o conteúdo.

---

# 20. UX

A página deve permitir que o visitante descubra rapidamente:

```text
O que é a CFA?
O que oferece?
Onde fica?
Quando funciona?
Como agendar?
```

A arquitetura de informação deve ser simples.

Não criar páginas desnecessárias para o MVP.

Não criar dashboard.

Não criar login.

Não criar sistema de agendamento próprio.

Não criar blog vazio.

Não criar funcionalidades que não gerem valor imediato.

---

# 21. MICROINTERAÇÕES

Adicionar microinterações leves:

* hover em botões
* transições de links
* foco acessível
* entrada suave de elementos quando fizer sentido

Evitar:

* animações excessivas
* parallax pesado
* bibliotecas de animação desnecessárias
* efeitos que prejudiquem performance

Toda animação deve respeitar:

```css
prefers-reduced-motion
```

---

# 22. PERFORMANCE

O projeto deve ser construído visando excelente desempenho real.

Priorizar:

* HTML estático quando possível
* mínimo JavaScript
* imagens otimizadas
* dimensões de imagem definidas
* lazy loading onde apropriado
* preload somente quando realmente necessário
* evitar fontes externas desnecessárias
* evitar bibliotecas pesadas
* evitar scripts de terceiros no carregamento inicial
* CSS enxuto
* evitar layout shift

Não perseguir artificialmente "100 no Lighthouse" como objetivo isolado.

O objetivo é experiência real de usuário.

---

# 23. CORE WEB VITALS

Implementar o frontend considerando:

```text
LCP
INP
CLS
```

Evitar principalmente:

```text
imagem hero sem dimensões
fontes causando layout shift
componentes JS desnecessários
scripts bloqueantes
animações pesadas
iframes pesados no carregamento inicial
```

Reservar espaço para imagens e componentes que carregam posteriormente.

O resultado deve ser mensurável com ferramentas como Lighthouse/PageSpeed/DevTools.

---

# 24. SEO TÉCNICO

Implementar SEO técnico completo para o MVP.

Criar:

```text
<title>
<meta name="description">
<link rel="canonical">
robots.txt
sitemap.xml
favicon
Open Graph
Twitter/X cards quando apropriado
```

Usar uma única tag:

```text
<h1>
```

na página principal.

Organizar corretamente:

```text
h1
h2
h3
```

Não usar headings apenas para conseguir tamanho visual.

Criar URLs limpas.

Adicionar `lang="pt-BR"`.

Garantir que o conteúdo principal exista no HTML renderizado.

Não depender de JavaScript para o conteúdo principal ser descoberto.

---

# 25. SEO LOCAL

O site representa uma empresa física local.

Preparar dados estruturados em JSON-LD usando Schema.org.

Usar o tipo apropriado de entidade local, sem inventar propriedades.

Incluir somente informações realmente conhecidas:

```text
nome
endereço
telefone
URL
logo
redes sociais quando apropriado
horários
```

Não inventar:

```text
preços
avaliação agregada
número de avaliações
latitude/longitude
serviços não confirmados
```

Se os dados estruturados incluírem informações que também aparecem visualmente na página, manter os dados consistentes.

O objetivo é facilitar a compreensão da entidade local por mecanismos de busca.

---

# 26. SEARCH / AI SEARCH

Tratar "SEO para IA" como uma extensão de uma arquitetura web boa, e não como um conjunto de truques.

O site deve ser:

* rastreável
* indexável
* semanticamente estruturado
* factual
* claro
* consistente
* com informações da empresa explícitas
* com entidades e relacionamentos compreensíveis
* com conteúdo realmente visível no HTML
* com headings claros
* com links internos coerentes
* com dados estruturados válidos

Não criar:

```text
texto artificial para IA
keyword stuffing
blocos ocultos
conteúdo duplicado
páginas falsas para palavras-chave
FAQ inventado
reviews inventadas
schema com informações que não aparecem na página
```

Não tentar "enganar" mecanismos de busca ou sistemas de IA.

A estratégia é:

```text
conteúdo verdadeiro
+
estrutura semântica
+
dados estruturados
+
boa indexabilidade
+
boa experiência
```

---

# 27. ENTIDADE DA EMPRESA

Tratar a CFA como uma entidade local única.

Manter consistência entre:

```text
nome
endereço
telefone
website
Instagram
WhatsApp
horários
```

Evitar versões diferentes do nome da empresa espalhadas pelo site.

Quando houver necessidade de dados estruturados, centralizar os dados da empresa.

---

# 28. OPEN GRAPH

Preparar:

```text
og:title
og:description
og:type
og:url
og:image
og:locale
```

A imagem social deve utilizar uma imagem real disponível no projeto ou uma solução segura.

Não inventar fotografias da clínica.

Não usar imagens de terceiros como se fossem da CFA.

---

# 29. FAVICON E IDENTIDADE

Utilizar a identidade da CFA quando possível.

Se não houver favicon adequado, preparar a estrutura para receber a logo/favicon posteriormente.

Não utilizar o favicon padrão do Astro na versão final.

---

# 30. PRIVACIDADE / LGPD

Não adicionar ferramentas de tracking desnecessárias.

Se o MVP não utilizar cookies não essenciais, não inventar um cookie banner apenas por aparência.

Se futuramente forem adicionados:

* Analytics
* pixels
* publicidade
* ferramentas de rastreamento
* formulários que armazenem dados

então a arquitetura deve permitir implementar consentimento e política de privacidade adequados.

Não coletar dados pessoais sem necessidade.

O WhatsApp deve continuar sendo um link externo para o canal fornecido pela empresa.

---

# 31. SEGURANÇA

Não colocar:

```text
API keys
tokens
secrets
credenciais
```

no frontend.

Não versionar `.env`.

Preparar `.env.example` quando necessário.

Usar variáveis públicas e privadas corretamente.

Verificar `.gitignore`.

Não deixar credenciais nos arquivos de documentação.

---

# 32. SANITY

Preparar o projeto para **consumir conteúdo do Sanity via API**, deixando a arquitetura pronta para a integração real.

Se a integração com Sanity ainda não estiver configurada, **não inventar nem preencher valores fictícios** para:

```text
projectId
dataset
token
```

Não criar credenciais falsas.

Implementar, quando compatível com a arquitetura existente, uma camada de conteúdo desacoplada dos componentes da interface.

Preferir uma estrutura equivalente a:

```text
src/lib/
src/data/
src/types/
```

reutilizando a estrutura existente do projeto sempre que possível.

Criar funções de acesso ao conteúdo com contratos claros, por exemplo:

```text
getSiteSettings()
getBusinessHours()
getServices()
getTestimonials()
getFacilities()
```

Essas funções devem ser a **única camada responsável por saber de onde o conteúdo vem**.

Os componentes da interface não devem depender diretamente do Sanity nem de arquivos locais.

A arquitetura deve permitir posteriormente trocar:

```text
conteúdo local
        ↓
Sanity API
```

sem precisar reescrever os componentes visuais.

Preparar também os tipos/interfaces necessários para os conteúdos que serão consumidos pelo site.

Se for necessário criar consultas GROQ, schemas, cliente HTTP/API ou adaptadores para Sanity, deixar a estrutura preparada de forma compatível com a configuração oficial do Sanity, mas **não criar projeto remoto, credenciais ou valores que dependam da conta do usuário**.

O objetivo desta etapa é deixar o código **pronto para conectar ao Sanity posteriormente**, exigindo do usuário apenas as configurações externas necessárias.

---

# 33. FALLBACK LOCAL

Durante o desenvolvimento, manter um **fallback local funcional** para o MVP.

Fluxo esperado:

```text
              CMS configurado?
                 /       \
               sim        não
                ↓          ↓
          buscar Sanity   conteúdo local
                \          /
                 ↓        ↓
                  camada de dados
                       ↓
                  componentes
                       ↓
                      site
```

O fallback local deve utilizar a mesma estrutura de dados esperada pelo Sanity.

Exemplo conceitual:

```text
getServices()
        ↓
CMS disponível?
   ├── sim → Sanity
   └── não → dados locais
```

Dessa forma, os componentes não precisam saber se o conteúdo veio do Sanity ou do fallback local.

Não permitir que uma falha de configuração ou indisponibilidade do CMS destrua a renderização da página durante o desenvolvimento.

Porém, **não esconder erros silenciosamente**.

Em ambiente de desenvolvimento, registrar erros de integração de maneira clara, indicando:

* qual consulta falhou;
* qual fonte de dados estava sendo utilizada;
* qual fallback foi acionado;
* qual configuração está faltando, quando aplicável.

O fallback deve ser considerado uma estratégia de desenvolvimento e resiliência, e não uma justificativa para deixar a integração com Sanity incompleta.

Ao final da implementação, o projeto deve estar estruturalmente preparado para que o usuário apenas configure as credenciais/projeto do Sanity e passe a fornecer o conteúdo real pela API, sem necessidade de refatorar os componentes da interface.

# 34. TYPESCRIPT

Utilizar tipos fortes para:

```text
SiteSettings
BusinessHours
Service
Testimonial
Facility
```

Evitar:

```ts
any
```

sem justificativa.

Validar dados quando possível.

Se a estrutura do CMS for criada, manter o schema do CMS coerente com os tipos do frontend.

---

# 35. COMPONENTIZAÇÃO

Criar componentes somente onde existe reutilização ou benefício real.

Exemplo:

```text
Header
Hero
SectionTitle
ServiceCard
TestimonialCard
FacilityCard
BusinessHours
ContactSection
Footer
Button
```

Não criar dezenas de componentes artificiais.

O objetivo é manter o projeto fácil de vender, manter e duplicar para outros clientes locais.

---

# 36. CSS / DESIGN SYSTEM

Criar tokens reutilizáveis para:

```text
cores
tipografia
espaçamento
border radius
sombras
container
breakpoints
```

Evitar valores arbitrários espalhados.

Manter consistência visual.

Criar um container centralizado.

Manter largura de leitura confortável.

Não usar bordas/sombras em excesso.

---

# 37. IMAGENS

A logo fornecida deve ser tratada como asset real da CFA.

Não criar imagens falsas de profissionais.

Não gerar imagens de pacientes.

Não pegar fotografias de bancos de imagem e apresentá-las como se fossem da clínica.

Caso faltem fotos reais:

```text
usar composição visual baseada em tipografia, formas, logo e espaços
```

em vez de inventar conteúdo visual.

Todos os `img` devem possuir `alt` adequado.

Para imagens decorativas:

```html
alt=""
```

quando apropriado.

---

# 38. LINKS

Verificar todos os links.

WhatsApp deve abrir corretamente.

Instagram deve abrir corretamente.

Google Maps deve apontar para o local informado.

Telefone deve usar:

```text
tel:
```

quando apropriado.

WhatsApp deve usar o link fornecido.

Não alterar números.

---

# 39. GOOGLE MAPS / LOCALIZAÇÃO

Não inventar coordenadas.

Não transformar o Plus Code em coordenadas manualmente.

Usar o endereço fornecido.

Criar botão:

```text
Ver localização
```

apontando para a URL fornecida pelo cliente quando apropriado.

---

# 40. TESTES

Depois da implementação executar:

```bash
npm run build
```

e qualquer script de teste/lint existente.

Se houver:

```text
npm run lint
npm run check
npm run test
```

executá-los quando disponíveis.

Corrigir erros reais.

Não modificar testes apenas para fazê-los passar sem corrigir a causa.

---

# 41. VALIDAÇÃO VISUAL

Rodar o projeto localmente.

Verificar visualmente:

```text
desktop
tablet
mobile
```

Checar:

* header
* hero
* CTA
* serviços
* depoimentos
* estrutura
* acessibilidade
* contato
* footer
* espaçamentos
* overflow
* contraste
* navegação mobile

---

# 42. CHECKLIST DE SEO

Antes de considerar pronto, confirmar:

```text
[ ] title correto
[ ] description correta
[ ] canonical
[ ] robots
[ ] sitemap
[ ] favicon
[ ] Open Graph
[ ] lang pt-BR
[ ] h1 único
[ ] headings hierárquicos
[ ] URLs corretas
[ ] conteúdo renderizado no HTML
[ ] alt nas imagens
[ ] links internos
[ ] links externos
[ ] JSON-LD
[ ] dados da empresa consistentes
[ ] nenhuma informação inventada
```

---

# 43. CHECKLIST DE ACESSIBILIDADE

```text
[ ] teclado
[ ] foco visível
[ ] menu mobile acessível
[ ] contraste
[ ] alt
[ ] headings
[ ] landmarks
[ ] links compreensíveis
[ ] reduced motion
[ ] botões utilizáveis em mobile
[ ] sem dependência de hover
```

---

# 44. CHECKLIST DE PERFORMANCE

```text
[ ] JS mínimo
[ ] imagens otimizadas
[ ] dimensões das imagens
[ ] sem layout shift desnecessário
[ ] sem scripts bloqueantes
[ ] sem iframe pesado inicial
[ ] sem biblioteca desnecessária
[ ] CSS enxuto
[ ] fonte otimizada
[ ] build de produção funcionando
```

---

# 45. CHECKLIST CMS

```text
[ ] estrutura SiteSettings
[ ] estrutura Horarios
[ ] estrutura Servicos
[ ] estrutura Depoimentos
[ ] estrutura Estrutura
[ ] tipos TypeScript
[ ] camada de acesso ao conteúdo
[ ] fallback local
[ ] nenhuma credencial no código
[ ] pronto para Sanity
```

---

# 46. CHECKLIST FINAL DO MVP

O MVP somente pode ser considerado concluído quando:

```text
[ ] abre no celular
[ ] abre no desktop
[ ] logo aparece corretamente
[ ] WhatsApp funciona
[ ] Instagram funciona
[ ] telefone funciona
[ ] endereço está correto
[ ] horários estão corretos
[ ] serviços não possuem informações inventadas
[ ] depoimentos estão identificados como depoimentos
[ ] imagens possuem alt
[ ] página possui title
[ ] página possui description
[ ] canonical existe
[ ] sitemap existe
[ ] robots existe
[ ] JSON-LD existe
[ ] dados estruturados são coerentes com o conteúdo
[ ] navegação funciona
[ ] menu mobile funciona
[ ] teclado funciona
[ ] foco funciona
[ ] build de produção funciona
[ ] testes existentes passam
[ ] Git não possui arquivos sensíveis
[ ] deploy está preparado
[ ] CMS está arquiteturalmente preparado
[ ] nenhuma informação de outro site foi incorporada como informação da CFA
```

---

# 47. REGRA DE ESCOPO

Não faça:

```text
blog
login
dashboard
agendamento próprio
banco de dados próprio
e-commerce
área do paciente
sistema médico
CRM
chat
newsletter
sistema de avaliações
integrações desnecessárias
```

Essas funcionalidades estão fora do MVP.

Se alguma melhoria futura parecer interessante, documente como possibilidade futura, mas não implemente.

---

# 48. REGRA DE VELOCIDADE

Este projeto é um experimento de speedrun.

Não tente criar uma arquitetura perfeita.

Não refatore o projeto inteiro.

Não reescreva arquivos que já funcionam sem necessidade.

Não transforme pequenos problemas em grandes abstrações.

Prioridade:

```text
1. funcionar
2. parecer profissional
3. ser responsivo
4. ser acessível
5. ser rápido
6. ser indexável
7. estar preparado para CMS
8. deploy
```

---

# 49. REGRA CONTRA OVERENGINEERING

Se duas soluções resolverem o mesmo problema:

escolha a solução mais simples.

Se uma dependência npm não for necessária:

não instale.

Se JavaScript não for necessário:

não use.

Se um componente não for reutilizado:

não abstraia.

Se um banco de dados não for necessário:

não crie.

Se uma integração não for necessária:

não implemente.

---

# 50. DOCUMENTAÇÃO

Depois da implementação, atualizar a documentação somente se necessário.

Não apagar:

```text
docs/arquitetura/RELATORIO-02-SPEEDRUN-CFA.md
```

Esse arquivo representa o planejamento original do experimento.

Se forem tomadas decisões arquiteturais novas, registrar de maneira objetiva no local apropriado.

---

# 51. GIT

Ao final:

```bash
git status
```

Verificar se não existem:

```text
.env
tokens
secrets
credenciais
arquivos temporários
builds desnecessários
```

Não realizar commit automaticamente se isso não estiver explicitamente solicitado.

Não apagar histórico Git.

Não alterar remote origin.

---

# 52. RESULTADO ESPERADO

Ao terminar, o projeto deve representar uma primeira versão publicável da CFA:

```text
CFA
│
├── identidade visual
├── apresentação
├── Pilates
├── Fisioterapia
├── Aulas on-line
├── depoimentos
├── estrutura
├── acessibilidade
├── inclusão
├── localização
├── horários
├── contato
│
├── SEO
├── SEO local
├── dados estruturados
├── fundamentos para AI Search
├── acessibilidade
├── performance
│
└── arquitetura pronta para
    └── Sanity
```

A página deve parecer um site real de uma empresa local, não um template de demonstração.

---

# 53. PRINCÍPIO FINAL

Este é o primeiro speedrun.

O objetivo não é criar o site definitivo.

O objetivo é descobrir quanto tempo é necessário para transformar:

```text
dados reais
+
boilerplate
+
design
+
conteúdo
+
SEO
+
CMS-ready
+
Git
+
deploy
```

em um site profissional publicável.

Depois desse primeiro ciclo, tudo que consumir tempo repetidamente deverá ser transformado em:

```text
componente reutilizável
template
configuração
schema
documentação
automação
```

A regra final é:

> **Não otimize a arquitetura antes de entregar o primeiro site funcionando.**

Execute a implementação agora, começando pela inspeção do projeto existente e respeitando todas as regras acima.
