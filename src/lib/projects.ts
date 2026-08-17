import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Program = Project['data']['program'];

/** Todos os projetos, do mais recente para o mais antigo. */
export async function getAllProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.year - a.data.year);
}

/** Apenas projetos com status `publicado` (regra de build). */
export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects
    .filter((p) => p.data.status === 'publicado')
    .sort((a, b) => b.data.year - a.data.year);
}

/** Projetos publicados e marcados como destaque. */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.filter((p) => p.data.status === 'publicado' && p.data.featured === true);
}

/** Filtra projetos de um dado programa (marmitech | marmitech-jr). */
export function byProgram(projects: Project[], program: Program): Project[] {
  return projects.filter((p) => p.data.program === program);
}