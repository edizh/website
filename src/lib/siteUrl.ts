import { baseUrl } from '../consts';

/** Origin + Astro `base` (e.g. `https://edizh.github.io/website/`). */
export function publicSiteRoot(site: URL | string): URL {
	return new URL(baseUrl, typeof site === 'string' ? new URL(site) : site);
}

/** Absolute URL for a resource under `base` (e.g. `blog/slug/`, `sitemap-index.xml`). */
export function siteUrl(site: URL | string, path: string): string {
	const normalized = path.replace(/^\/+/, '');
	return new URL(normalized, publicSiteRoot(site)).href;
}

/** Root-relative path under `base` (for `<a href>`), resolved via the URL API. */
export function sitePath(site: URL | string, path: string): string {
	const normalized = path.replace(/^\/+/, '');
	return new URL(normalized, publicSiteRoot(site)).pathname;
}
