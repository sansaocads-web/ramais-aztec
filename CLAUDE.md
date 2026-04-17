# Regras do Vault Obsidian

## Idioma
- Sempre escrever em **português brasileiro**

## Links Internos
- Usar wikilinks para notas internas: `[[nome-da-nota]]`
- Nunca usar links Markdown para notas do vault

## Frontmatter Obrigatório
Todo arquivo deve ter frontmatter com:
```yaml
---
title: Título da Nota
date: YYYY-MM-DD
tags:
  - categoria
---
```

## Estrutura de Pastas
- `Diario/YYYY-MM-DD.md` — notas diárias
- `Projetos/` — projetos com campo `status`
- `Pesquisa/` — notas de pesquisa

## Projetos
- Incluir campo `status` no frontmatter: `ideia`, `roteiro`, `em-andamento`, `concluido`

## Nomes de Arquivo
- Sem acentos, sem espaços
- Usar hífens como separador: `nome-do-arquivo.md`
