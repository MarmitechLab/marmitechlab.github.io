import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleção de projetos do catálogo (Content Layer API — Astro 5).
 * Cada arquivo .md em `src/content/projects/` vira um projeto; o nome
 * do arquivo (sem extensão) é o slug usado nas rotas.
 *
 * Ver: docs/fase-2-conteudo.md e plano-implementacao-marmitech.md
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    // 'marmitech'    → Ensino Médio Técnico (Desenvolvimento de Sistemas e Jogos Digitais)
    // 'marmitech-jr' → 9º ano do Ensino Fundamental
    program: z.enum(['marmitech', 'marmitech-jr']),
    category: z.enum(['jogo', 'app', 'web', 'ia', 'outro']),
    year: z.number(),
    class: z.string(),
    // Caminho relativo a `public/` (ex.: /projects/caverna-digital/cover.svg)
    cover: z.string(),
    screenshots: z.array(z.string()).default([]),
    technologies: z.array(z.string()),
    ai: z
      .object({
        used: z.boolean(),
        tools: z.array(z.string()).default([]),
        uses: z.array(z.string()).default([]),
      })
      .optional(),
    // Política de dados (Fase 0): `name` = primeiro nome apenas; `team` = turma/grupo
    authors: z.array(
      z.object({
        name: z.string(),
        team: z.string().optional(),
      })
    ),
    teacher: z.string().optional(),
    links: z
      .object({
        demo: z.string().url().optional(),
        repository: z.string().url().optional(),
      })
      .optional(),
    learning: z.string().optional(),
    featured: z.boolean().default(false),
    // Fluxo editorial: rascunho → em-revisao → aprovado → publicado
    status: z.enum(['rascunho', 'em-revisao', 'aprovado', 'publicado']),
  }),
});

export const collections = { projects };