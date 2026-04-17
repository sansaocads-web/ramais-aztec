---
title: Automação com n8n e Ferramentas Web
date: 2026-04-17
tags:
  - projeto
  - automacao
  - n8n
  - ferramentas-web
status: ideia
---

# Automação com n8n e Ferramentas Web

Projeto em fase de ideia para construir fluxos de automação usando n8n, integrando diversas ferramentas web para eliminar tarefas manuais repetitivas.

## Problema a Resolver

Muitas tarefas diárias envolvem copiar dados entre sistemas, disparar notificações e gerar relatórios manualmente. O n8n pode orquestrar esses fluxos sem código.

## Ideias de Automações

- Monitorar feeds RSS e resumir com [[ferramenta-claude]]
- Capturar artigos via [[ferramenta-perplexity]] e salvar no Obsidian
- Gerar resumo semanal de tarefas do diário e enviar por e-mail
- Integrar com o projeto [[obsidian-com-ia]] para criação automática de notas

## Ferramentas Envolvidas

- **n8n** — orquestrador de fluxos
- [[ferramenta-chatgpt]] — geração de texto nos fluxos
- [[ferramenta-claude]] — análise e classificação
- [[ferramenta-notion-ai]] — destino de algumas automações

## Próximos Passos

- [ ] Instalar n8n localmente ou via Docker
- [ ] Mapear os 3 fluxos prioritários
- [ ] Testar webhook com [[ferramenta-chatgpt]]
- [ ] Conectar saída dos fluxos ao vault do [[obsidian-com-ia]]

> [!warning] Atenção
> Este projeto ainda está na fase de ideia. Validar viabilidade técnica antes de avançar para o roteiro.

## Referências de Pesquisa

- [[ferramenta-chatgpt]]
- [[ferramenta-claude]]
- [[ferramenta-notion-ai]]
