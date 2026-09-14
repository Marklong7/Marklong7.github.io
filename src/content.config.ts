import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    status: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const slides = defineCollection({
  loader: glob({ base: "./src/content/slides", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    event: z.string().optional(),
    description: z.string(),
    pdf: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog, slides };
