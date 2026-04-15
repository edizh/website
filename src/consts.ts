// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/** `import.meta.env.BASE_URL` — with `trailingSlash: "always"` in `astro.config` it always ends with `/`. */
export const baseUrl = import.meta.env.BASE_URL;

export const FULL_NAME = 'Ediz Herkert';

/** Site `<title>`, RSS feed name, etc. Defaults to your full name; change if you want a shorter title. */
export const SITE_TITLE = FULL_NAME;

export const SITE_DESCRIPTION = 'Welcome to my website!';

/** Profile URLs for the header and footer (edit to match your accounts). */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ediz-herkert-7579b914b';
export const GITHUB_URL = 'https://github.com/edizh';
export const GOOGLE_SCHOLAR_URL =
	'https://scholar.google.com/citations?user=RLOAeZIAAAAJ';
