# Portfólio · Luiz Fernando

Site de uma página para Luiz Fernando, estudante de Educação Física em
Timbaúba — PE.

**No ar:** https://luizfernando-edfisica.vercel.app

## Tecnologias

React 19 · Vite 8 · CSS Modules · ESLint 10

Sem framework de estilo e sem biblioteca de componentes: o design system vem
de variáveis CSS e cada componente tem seu próprio módulo.

## Rodando localmente

```bash
npm install
npm run dev
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | gera a pasta `dist` |
| `npm run preview` | serve o build para conferir antes de publicar |
| `npm run lint` | roda o ESLint |
| `npm run imagens` | regera as versões WebP e JPG das fotos |

## Estrutura

```
public/images/        fotos otimizadas que o site serve
src/
  assets/brand/       logotipos e avatar
  assets/fotos/       fotos originais (fonte do npm run imagens)
  assets/icons/       ícones SVG em componentes React
  components/         uma pasta por componente, com seu CSS Module
  components/ui/      Button, Picture, Realce, SectionLabel
  data/site.js        todo o conteúdo do site
  hooks/              useScrollSpy e useReveal
  styles/             tokens.css e global.css
```

## Trocando o conteúdo

Textos, links e descrições de imagem ficam em `src/data/site.js`. Nenhum
componente tem texto escrito direto no JSX, então corrigir uma palavra ou
mudar o telefone é mexer só nesse arquivo.

A descrição que aparece na prévia do link (WhatsApp, redes) fica no
`index.html`, porque os robôs leem o HTML antes do React rodar. Se mudar a
descrição, mude nos dois lugares.

## Trocando uma foto

1. Coloque a nova imagem em `src/assets/fotos/`, com o mesmo nome da antiga
2. Rode `npm run imagens`
3. Confira as larguras no console e ajuste `larguras` em `src/data/site.js`

O script nunca amplia: gera 640px e a largura original, mais a imagem de
compartilhamento em 1.91:1.

## Design

Tokens em `src/styles/tokens.css`, medidos em WCAG 2.1. O azul de marca
(`#3478f6`) não serve para botão — branco sobre ele dá 4.07:1, abaixo do
mínimo. Por isso existe `--c-blue-action` (`#2a6de8`, 4.72:1).

## Antes de divulgar

- [ ] Confirmar a grafia oficial e a autorização de **Bravus Gym** e
      **CTTC — Centro de Treinamento Titanium Core**
- [ ] Confirmar a autorização de imagem das duas fotos que mostram logotipos
      de academia na camiseta e na bandeira
