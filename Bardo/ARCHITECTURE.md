# Cryptograma | Engineering Hub - Arquitetura de Documentação

## Status: ✅ Implementado com Fidelidade Dashboard

Esta documentação foi reestruturada para refletir a identidade visual e arquitetura technical do Cryptograma.

---

## 📐 Estrutura de Conteúdo

### Hierarquia de Navegação

```
Cryptograma | Engineering Hub (Landing)
├── 01 — Engenharia
│   └── Setup do Monorepo
│       └── Bun, Turborepo, Supabase, Variáveis de Ambiente
├── 02 — Módulos
│   ├── Retrieval RAG
│   │   └── Ingestão, Embeddings, Indexação, Busca Semântica
│   └── Content Studio
│       └── Workflows, Janelas Temporais, Tone of Voice
└── 03 — Design System
    └── Design Tokens
        └── Paleta, Tipografia, Espaçamento, Componentes
```

### Arquivos Criados / Atualizados

| Arquivo                                             | Status        | Propósito                                         |
| --------------------------------------------------- | ------------- | ------------------------------------------------- |
| `src/content/docs/index.mdx`                        | ✅ Atualizado | Landing page com hero + CardGrid dashboard        |
| `src/content/docs/01-engenharia/setup-monorepo.mdx` | ✅ Criado     | Setup completo com Bun, Turborepo e Supabase      |
| `src/content/docs/02-modulos/retrieval-rag.mdx`     | ✅ Criado     | Arquitetura RAG end-to-end com exemplos de código |
| `src/content/docs/02-modulos/content-studio.mdx`    | ✅ Criado     | Geração de conteúdo, workflows e temporal windows |
| `src/content/docs/03-design-system/tokens.mdx`      | ✅ Criado     | Design tokens, tipografia e componentes           |
| `src/styles/custom.css`                             | ✅ Atualizado | Paleta completa + Badges + Asides + Tables + Code |
| `astro.config.mjs`                                  | ✅ Atualizado | Título e sidebar colapsável com autogenerate      |
| `src/assets/crypto.svg`                             | ✅ Verificado | Hero principal da landing page                    |

---

## 🎨 Paleta Visual - Dashboard Fidelity

### Cores Nucleares

| Token                 | Hex       | Uso                         |
| --------------------- | --------- | --------------------------- |
| Background Principal  | `#030712` | Fundo geral do site         |
| Texto Principal       | `#F9FAFB` | Headings e conteúdo         |
| Subtítulos/Secundário | `#8F97A5` | Metadata e texto secundário |
| Card Background       | `#090E1A` | Containers de conteúdo      |
| Card Border           | `#1F2937` | Divisores e bordas sutis    |

### Accent (Propósito)

- **Link/Primary CTA**: `#3B82F6` (Azul Cryptograma)
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Danger**: `#EF4444`
- **Info**: `#06B6D4`

### Tipografia

- **Fonte Principal**: `Space Grotesk` (sans-serif geométrica)
- **Peso Regular**: 400
- **Peso Bold**: 700
- **Escala**: 12px → 32px (modular)

---

## 🏗️ Stack Técnico

```
Frontend (BardoDocs):
- Astro (SSG)
- Starlight Integration
- Markdown + MDX

Backend (Documentado):
- Bun (Runtime)
- Turborepo (Build Orchestration)
- TypeScript

Data Layer:
- Supabase (PostgreSQL, Realtime)
- Qdrant (Vector Database para RAG)
- OpenAI (Embeddings + LLM)

Deployment:
- Fly.io (API & Studio)
- Static Hosting (BardoDocs)
```

---

## 🚀 Como Usar

### 1. Desenvolvimento Local

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Navigate to http://localhost:3000
# Auto-reload em mudanças de MDX/CSS
```

### 2. Build Estático

```bash
# Build para produção
npm run build

# Preview
npm run preview
```

### 3. Adicionar Nova Página

```bash
# 1. Crie arquivo em src/content/docs/<categoria>/seu-arquivo.mdx
# 2. Frontmatter padrão:

---
title: Seu Título
description: Descrição breve para SEO.
---

# Conteúdo aqui...

# 3. A sidebar auto-gera via autogenerate { directory: "<categoria>" }
```

### 4. Componentização MDX

```mdx
import {
  Card,
  CardGrid,
  Tabs,
  TabItem,
  Aside,
} from "@astrojs/starlight/components";

## Exemplo

<CardGrid>
  <Card title="Título" icon="rocket">
    Descrição e conteúdo do card.
  </Card>
</CardGrid>

<Aside type="tip">Dicas para o leitor.</Aside>
```

---

## 📝 Convenções de Estilo

### Frontmatter

```yaml
---
title: Título da Página
description: Descrição curta (60-160 char) para SEO e preview.
---
```

### Estrutura de Conteúdo

```markdown
# Titulo (H1 - Página)

Intro de 1-2 parágrafos.

## Seção Principal (H2)

Conteúdo subsessão.

### Subseção (H3)

Detalhe técnico ou conceitual.

> **Note:** Use Asides do Starlight para dicas, avisos, observações.
```

### Código e Exemplos

```typescript
// Use blocos de código tipados (typescript, javascript, bash, etc)
// Starlight automaticamente aplica syntax highlighting
```

---

## 🧪 Testes & QA

### Checklist Pré-Deploy

- [ ] Todas as imagens carregam (verificar `src/assets/`)
- [ ] Links internos funcionam (roteamento Starlight)
- [ ] Dark theme aplicado (CSS variables)
- [ ] Mobile responsivo (breakpoints: 768px, 1024px)
- [ ] Cards e badges com estilo correto
- [ ] Tables renderizam sem scroll horizontal
- [ ] Code blocks com background escuro

### Build Validação

```bash
npm run build 2>&1 | grep -i "error\|warn"
```

Se sem output, está limpo! ✅

---

## 📊 Métricas de Conteúdo

| Métrica              | Valor                              | Target                        |
| -------------------- | ---------------------------------- | ----------------------------- |
| Páginas Documentadas | 5                                  | 20+ (extensível)              |
| Exemplos de Código   | 15+                                | Maior cobertura               |
| Componentes Visuais  | Card, Badge, Aside, Table          | Adicionar conforme necessário |
| SEO Keywords         | Setup, RAG, Content Studio, Tokens | Orgânico via Google Analytics |

---

## 🔄 Próximas Melhorias (Roadmap)

- [ ] Adicionar ejemplos de API (curl, fetch, GraphQL)
- [ ] Screenshots / GIFs de workflows
- [ ] Search Full-Text (Starlight built-in)
- [ ] Dark/Light theme toggle (Starlight config)
- [ ] Versioning de docs (tags/branches)
- [ ] Comentários (Giscus ou utterances)
- [ ] Analytics (Vercel Analytics ou Plausible)

---

## 🤝 Contributing

### Adicionar Novo Módulo

1. Crie pasta em `src/content/docs/<numero>-<nome>/`
2. Adicione `index.mdx` com frontmatter correto
3. O `astro.config.mjs` auto-gera sidebar entry

### Atualizar Estilos

- Edite `src/styles/custom.css`
- Use CSS variables (nunca hardcode cores)
- Test no dev server antes de commit

---

## 📞 Suporte

Para dúvidas sobre:

- **Astro/Starlight**: [docs.astro.build](https://docs.astro.build)
- **Bun**: [bun.sh](https://bun.sh)
- **Design System**: Ver `03-design-system/tokens.mdx`

---

**Last Updated**: 2024-03-02  
**Maintained By**: FourCoders Team  
**Status**: 🟢 Production-Ready
