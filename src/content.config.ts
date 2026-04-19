import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const course = defineCollection({
	loader: glob({ base: './src/content/course', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const resume = defineCollection({
	loader: glob({ base: './src/content/resume', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tagline: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		summary: z.string().optional(),
		contact: z
			.array(
				z.object({
					text: z.string(),
					href: z.string().optional(),
				}),
			)
			.optional(),
		experience: z.array(
			z.object({
				role: z.string(),
				organization: z.string(),
				/** Shown after an accent separator (e.g. lab / supervisors: “Prof. …”). */
				organizationDetail: z.string().optional(),
				location: z.string().optional(),
				dates: z.string(),
				highlights: z.array(z.string()).optional(),
			}),
		),
		education: z
			.array(
				z.object({
					degree: z.string(),
					institution: z.string(),
					/** Shown after an accent separator (e.g. fellowship, host). */
					institutionDetail: z.string().optional(),
					dates: z.string().optional(),
					note: z.string().optional(),
				}),
			)
			.optional(),
		skills: z.array(z.string()).optional(),
		awards: z.array(z.string()).optional(),
		languages: z.string().optional(),
	}),
});

export const collections = { blog, course, resume };
