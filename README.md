# Polski dla Ciebie 🇵🇱

Um app web para aprender polonês, feito para falantes de português.

Inspirado na abordagem prática de sites como o [Loecsen](https://www.loecsen.com), mas com todo o conteúdo (frases, fonética, explicações gramaticais) pensado do zero para quem já fala português.

## O que tem no app

- **Frases** — 11 capítulos temáticos (cumprimentos, números, cores, restaurante, família, emergências etc.), cada um com:
  - lista de frases em português → polonês, com transcrição fonética aproximada
  - áudio de pronúncia (via síntese de voz do navegador, quando disponível)
  - modo flashcards com acompanhamento de progresso
  - quiz de múltipla escolha com pontuação
- **Escrita** — o alfabeto polonês completo, dígrafos (cz, sz, rz, dz...), consoantes suaves e a regra de acentuação
- **Gramática** — 10 lições essenciais: gênero, plural, pronomes, o verbo *być*, verbos regulares, negação, os 7 casos gramaticais, aspecto verbal, adjetivos e ordem das palavras

O progresso de estudo fica salvo no navegador do próprio usuário (via `localStorage`), sem necessidade de conta ou backend.

## Como usar

É um único arquivo HTML autocontido — sem build, sem dependências além de uma fonte do Google Fonts. Basta abrir `index.html` em qualquer navegador moderno.

### Rodar localmente

```bash
git clone https://github.com/SEU-USUARIO/polski-app.git
cd polski-app
open index.html   # macOS
# ou apenas dê duplo clique no arquivo
```

### Publicar com GitHub Pages

1. No repositório no GitHub, vá em **Settings → Pages**
2. Em "Source", selecione a branch `main` e a pasta `/root`
3. Salve — em alguns minutos o app estará disponível em `https://SEU-USUARIO.github.io/polski-app/`

## Tecnologia

HTML, CSS e JavaScript puro — sem frameworks. Usa a Web Speech API (`speechSynthesis`) para pronúncia em polonês, quando o navegador tiver uma voz `pl-PL` instalada.

## Licença

MIT — sinta-se à vontade para usar, adaptar e compartilhar.
