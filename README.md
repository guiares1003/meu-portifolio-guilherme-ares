# Portfólio do Guilherme

Portfólio feito com **React + Vite** e CSS escrito à mão. Tema claro/escuro, menu responsivo,
navegação por teclado, animações que respeitam "reduzir movimento" e todo o conteúdo em um único arquivo.

## Como rodar

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a pasta dist/ para publicar
npm run preview    # testa o build localmente
npm run build:single   # gera dist-single/index.html, um único arquivo com tudo embutido
```

Requer Node 18 ou mais novo.

## Como editar o conteúdo

**Tudo está em `src/data/content.js`.** Você não precisa mexer nos componentes para trocar textos.

| Quero mudar…                    | Onde                                         |
| ------------------------------- | -------------------------------------------- |
| Nome e frase de apresentação    | `profile`                                    |
| GitHub, LinkedIn, e-mail, Whats | `links` (troque `url` e `handle`, apague `placeholder: true`) |
| Texto do "Sobre" e a ficha      | `about`                                      |
| Projetos                        | `projects` (cada projeto é um objeto)        |
| Tecnologias                     | `skills.layers[].items` e `skills.practices.items` |
| Formação e experiência          | `timeline`                                   |
| Mensagem final e os dois caminhos de contato | `contact`                       |

Tudo que aparece com a etiqueta amarela **"a preencher"** ou entre `[colchetes]` é espaço reservado.
Os três projetos têm `example: true` e aparecem com o selo "Exemplo": troque pelos seus e remova essa linha.

### Adicionar um projeto

Copie um objeto de `projects` e preencha. Campos principais:

- `kind`: `'academico'`, `'web'` ou `'freelance'` (define o filtro)
- `demoUrl` e `repoUrl`: use `null` se não existir; o botão some sozinho
- `art` e `color`: ilustração (`'api'`, `'panel'`, `'landing'`) e cor do cartão
- `decisions` e `challenges`: aparecem na janela de detalhes

Quando tiver capturas de tela, coloque as imagens em `public/` e troque `<ProjectArt … />` por
uma `<img>` em `src/components/ProjectRow.jsx`.

### Adicionar ou remover uma tecnologia

Edite a lista `items` da camada correspondente em `skills`. Não há níveis de domínio de propósito:
só inclua o que você realmente usa.

## Estrutura

```
src/
  data/content.js        todo o conteúdo editável
  hooks/hooks.js         tema, seção ativa, movimento reduzido, cópia de texto
  components/            Header, Hero, TicketDemo, About, Projects, Skills, Timeline, Contact…
  styles/
    tokens.css           cores, fontes e medidas (tema claro e escuro)
    base.css             reset, foco visível, gutter lateral
    components.css       botões, cabeçalho, janela de detalhes
    sections.css         estilos de cada seção
```

Para trocar a identidade visual, comece por `src/styles/tokens.css`.

## Acessibilidade e desempenho

- Link "Pular para o conteúdo", foco visível e menu operável por teclado (Esc fecha).
- Janela de detalhes usa `<dialog>` nativo: Esc fecha e o foco fica preso dentro.
- `prefers-reduced-motion` desliga as animações e o efeito do nome.
- Sem bibliotecas além do React. Fontes (Bricolage Grotesque, Figtree, JetBrains Mono) vêm do Google Fonts.

## Publicar

Rode `npm run build` e envie a pasta `dist/` para Vercel, Netlify, Cloudflare Pages ou GitHub Pages.
Antes de publicar, atualize `<title>`, a meta `description` e o bloco JSON-LD em `index.html`.
