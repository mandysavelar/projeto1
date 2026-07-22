# Loja Rock n Roll

E-commerce construído com Next.js App Router, React Server Components e TypeScript.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- TypeScript
- [TailwindCSS 4](https://tailwindcss.com)
- ESLint

> Planejado (ver [CLAUDE.md](./CLAUDE.md)): shadcn/ui, React Hook Form + Zod, Supabase e Stripe.

## Getting Started

Instale as dependências e suba o servidor local:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

A página inicial pode ser editada em [app/page.tsx](./app/page.tsx) — o Next.js atualiza automaticamente conforme o arquivo é salvo.

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
app/            # rotas (App Router), agrupadas por (grupo)/
components/     # componentes de feature
components/ui/  # primitivos reutilizáveis (shadcn)
actions/        # Server Actions (mutações)
lib/            # helpers e clients (supabase, stripe, etc.)
types/          # tipos globais e schemas Zod compartilhados
```

Server Components são o padrão — `'use client'` só é usado quando o componente depende de hooks, eventos ou APIs de browser. Mutações passam por Server Actions em `actions/`; Client Components nunca acessam o banco diretamente.

Regras completas de arquitetura, convenções de código e gotchas do projeto estão em [CLAUDE.md](./CLAUDE.md).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy

A forma mais simples de publicar é via [Vercel](https://vercel.com/new). Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para detalhes.
