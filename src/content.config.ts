import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    status: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const slides = defineCollection({
  loader: glob({ base: "./src/content/slides", pattern: "**/*.{md,mdx}" }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date().optional(),
      event: z.string().optional(),
      description: z.string(),
      pdf: z.string().optional(),
      url: z.string().optional(),
      draft: z.boolean().default(false),
    })
    .refine((talk) => talk.pdf || talk.url, {
      message: "Each talk needs either a PDF path or an external URL.",
    }),
});

export const collections = { projects, blog, slides };
