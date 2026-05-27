# AteneuHub — Protótipo

> **Muito além do campus.**
> Protótipo navegável de uma rede social acadêmica/profissional exclusiva para
> alunos do Centro Universitário Ateneu (UniAteneu). Híbrido entre LinkedIn
> (networking, perfis) e Reddit (feed, debates da comunidade), focado em
> ajudar alunos a encontrar colegas do seu curso.

---

## Como rodar

Pré-requisitos: **Node 20+** e **npm 10+**.

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173` (ou `5174` se a porta estiver
ocupada).

Build de produção:

```bash
npm run build
npm run preview
```

---

## Como entrar

A tela de login aceita **qualquer** matrícula e qualquer senha de **4+
caracteres**. Não há autenticação real — é um protótipo.

Sugestões para testar:
- Matrícula `202310001`, senha `1234`.

Para sair, clique no avatar no canto superior direito → **Sair**.

---

## Telas

| Rota              | Tela                                                          |
| ----------------- | ------------------------------------------------------------- |
| `/login`          | Tela de login (split: branding + formulário)                  |
| `/dashboard`      | Painel inicial com cards (boas-vindas, posts, vagas, pessoas) |
| `/feed`           | Feed completo com tabs (Todos / Meu curso / Salvos)            |
| `/jobs`           | Vagas com filtros (área, modalidade, tipo) + detalhe           |
| `/people`         | Grid de alunos com busca e filtros                            |
| `/saved`          | Posts salvos pelo usuário                                     |
| `/profile`        | Perfil do usuário logado                                      |
| `/profile/:id`    | Perfil de outro aluno                                         |

---

## Identidade visual

- **Verde principal** `#00A859` — cor de marca, CTAs primárias
- **Amarelo** `#FFC107` — destaques, badges
- **Azul secundário** `#0066B3` — links, ações secundárias
- **Tipografia** — Poppins (display) + Inter (corpo), via Google Fonts

Fundo dominante claro (`#F9FAFB`/branco). Verde/amarelo são **acentos**,
nunca preenchem grandes áreas.

---

## Stack

- **React 19** + **Vite 8** + **TypeScript**
- **Tailwind CSS 3** com paleta customizada
- **shadcn/ui** (componentes escritos à mão sobre Radix UI)
- **React Router v6** para navegação
- **Zustand** com `persist` para estado global (feed, conexões, vagas
  salvas, auth)
- **lucide-react** para ícones (GitHub/LinkedIn/Behance vêm como SVGs
  próprios — o pacote removeu as marcas na versão atual)
- **Sonner** para toasts

---

## Estrutura

```
src/
├── components/
│   ├── ui/         # Button, Card, Input, Avatar, Badge, Dialog, Tabs, etc.
│   ├── layout/     # MainLayout, Navbar, Sidebar, Logo, AuthGuard
│   ├── feed/       # PostCard, CreatePostDialog
│   ├── jobs/       # JobCard (com modal de detalhes)
│   ├── people/     # PersonCard
│   └── profile/    # ProfileView (compartilhado entre meu/de outros)
├── pages/          # Login, Dashboard, Feed, Jobs, People, Profile,
│                   # ProfileViewPage, Saved
├── data/           # users.ts, posts.ts, jobs.ts, currentUser.ts, trending.ts
├── store/          # useAppStore, useAuthStore (Zustand)
├── lib/            # utils (cn, formatRelativeTime, initials)
└── App.tsx         # rotas
```

---

## O que é real vs. mock

**Funciona de verdade (em memória, com `localStorage` para persistir
entre refreshes):**

- Login/logout
- Curtir, comentar, salvar posts
- Criar post (com visibilidade "Todos" ou "Meu curso" + imagem mock)
- Salvar vagas
- Enviar solicitação de conexão (botão Conectar)
- Filtros e busca em vagas e pessoas
- Tabs do feed (Todos / Meu curso / Salvos)

**Mock visual (toast "Em desenvolvimento"):**

- Busca global da Navbar
- Notificações e mensagens
- Edição de perfil
- Configurações
- Compartilhar post
- Esqueci minha senha
- Candidatura de vaga

---

## Próximos passos (fora deste protótipo)

- Autenticação real ligada ao sistema acadêmico
- Backend (posts, comentários, conexões, mensagens)
- Integração com APIs de vagas e cadastro direto de empresas parceiras
- Mensageria
- Notificações em tempo real
- Abertura para externos (com mensalidade)

---

## Licença

Protótipo acadêmico. Sem licença pública por enquanto.
