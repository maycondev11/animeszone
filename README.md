# animeszone- Projeto faculdade - Eng de sofware -front end.

# Relatório Técnico - Projeto Front-End: Blog AnimeZone

## 1. Introdução

O presente projeto tem como objetivo demonstrar os conhecimentos adquiridos na disciplina de Programação Front-End, por meio do desenvolvimento de um website completo, responsivo e interativo com o tema "Blog de Animes". O site, intitulado **AnimeZone**, apresenta conteúdos voltados ao universo otaku, com recomendações, informações e formulário de contato.

## 2. Estrutura do Website

O site é composto por **quatro páginas** principais, conectadas entre si via menu de navegação:

* `index.html`: Página inicial com destaque de animes e banner.
* `animes.html`: Lista de animes recomendados com imagens e descrições.
* `sobre.html`: Informativo sobre o blog e a equipe criadora.
* `contato.html`: Formulário para envio de mensagens com validação em JavaScript.

## 3. Tecnologias Utilizadas

* **HTML5**: estrutura semântica das páginas
* **CSS3**: estilização visual, layout responsivo e animações
* **JavaScript**: interatividade, efeitos visuais e validação de formulário

## 4. Funcionalidades Implementadas

### 4.1 Layout Responsivo

Utilização de media queries no `style.css` para adaptar o site a diferentes tamanhos de tela (mobile, tablet, desktop).

### 4.2 Menu de Navegação

Menu horizontal funcional presente em todas as páginas, com destaque da página atual.

### 4.3 Formulário com Validação em JavaScript

Na página `contato.html`, o formulário exige preenchimento correto dos campos. O script bloqueia envios vazios e exibe mensagens de feedback ao usuário.

### 4.4 Efeitos Interativos

* **Botão "Voltar ao Topo"**: aparece ao rolar a página e permite retorno suave ao topo
* **Fade-in animado**: elementos visíveis gradualmente conforme entram na tela

### 4.5 SEO Básico

* Uso de tags semânticas: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
* Meta tags com descrição relevante
* Atributos `alt` em todas as imagens
* Títulos descritivos por página

## 5. Capturas de Tela

**(Inserir aqui imagens reais do projeto rodando em diferentes páginas e tamanhos de tela)**

## 6. Desafios Enfrentados

* Garantir responsividade com boa usabilidade em diferentes dispositivos
* Integrar interações JavaScript sem comprometer o desempenho
* Organização clara dos arquivos e reaproveitamento de estrutura entre as páginas

## 7. Estrutura de Pastas

```
animezone/
├── index.html
├── animes.html
├── sobre.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── banner-anime.jpg
│   ├── jujutsu.jpg
│   ├── onepiece.jpg
│   ├── attackontitan.jpg
│   ├── demonslayer.jpg
│   ├── naruto.jpg
│   ├── deathnote.jpg
│   └── equipe.jpg
```

## 8. Considerações Finais

O projeto **AnimeZone** foi desenvolvido com foco em boas práticas de programação front-end. Todos os requisitos da atividade foram implementados com organização, clareza de código e foco na experiência do usuário.

---

