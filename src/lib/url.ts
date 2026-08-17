/**
 * Helper de URLs.
 * Com deploy na raiz, `import.meta.env.BASE_URL` é `/`.
 * `assetUrl(caminho)` concatena o base com um caminho raiz
 * (ex.: '/projects/x.svg') evitando barra dupla ('//projects/...').
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function assetUrl(path: string): string {
	const p = path.startsWith('/') ? path : `/${path}`;
	return `${base}${p}`;
}