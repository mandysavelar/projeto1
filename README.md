# Loja Rock n Roll

Landing page de e-commerce para a **Loja Rock n Roll** — camisetas oficiais de bandas, All Star, coturnos e acessórios, "desde 1993 vestindo o rock", direto do Rio de Janeiro para o Brasil inteiro.

Construída com Next.js App Router e React Server Components, hoje é uma página institucional/vitrine (hero, categorias, produtos em destaque, história da marca e CTA de contato) — ainda sem carrinho, checkout ou integração com banco de dados.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- TypeScript
- [TailwindCSS 4](https://tailwindcss.com)
- ESLint
- Fontes: Anton, Space Mono e Inter (`next/font/google`)

> Planejado (ver [CLAUDE.md](./CLAUDE.md)): shadcn/ui, React Hook Form + Zod, Supabase e Stripe. As pastas `components/ui/`, `lib/`, `types/` e `actions/` já estão previstas na arquitetura mas ainda não têm conteúdo.

## Getting Started

Instale as dependências e suba o servidor local:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

A página inicial pode ser editada em [app/page.tsx](./app/page.tsx) — o Next.js atualiza automaticamente conforme o arquivo é salvo.

## Seções da home

A home (`app/page.tsx`) monta a página a partir de componentes de feature em `components/`, separados por divisores perfurados (`PerforatedDivider`):

| Componente | Seção |
|---|---|
| `SiteHeader` | Cabeçalho / navegação |
| `Hero` | Chamada principal |
| `BandTicker` | Faixa animada com nomes de bandas |
| `CategoryGrid` | Grade de categorias (camisetas, All Star, coturnos, acessórios) |
| `FeaturedProducts` | Produtos em destaque |
| `BrandStory` | História da marca (desde 1993) |
| `ContactCta` | Chamada para contato |
| `SiteFooter` | Rodapé |

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | Roda o ESLint |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`) |

## Estrutura do projeto

```
app/            # rotas (App Router) — layout.tsx, page.tsx, globals.css
components/     # componentes de feature (Hero, CategoryGrid, FeaturedProducts, ...)
components/ui/  # primitivos reutilizáveis (shadcn) — ainda vazio
lib/            # helpers e clients (supabase, stripe, etc.) — ainda vazio
types/          # tipos globais e schemas Zod compartilhados — ainda vazio
actions/        # Server Actions (mutações) — ainda não criado
```

Server Components são o padrão — `'use client'` só é usado quando o componente depende de hooks, eventos ou APIs de browser. Quando mutações forem adicionadas, devem passar por Server Actions em `actions/`; Client Components nunca devem acessar o banco diretamente.

Regras completas de arquitetura, convenções de código e gotchas do projeto estão em [CLAUDE.md](./CLAUDE.md).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy

A forma mais simples de publicar é via [Vercel](https://vercel.com/new). Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para detalhes.
