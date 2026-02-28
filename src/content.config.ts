import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    publisher: z.string(),
    publishDate: z.coerce.date(),
    coAuthors: z.array(z.string()).default([]),
    isbn: z.string().optional(),
    buyLink: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const recordings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recordings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    spotifyUrl: z.string(),
    type: z.enum(["album", "track", "playlist", "episode"]).default("album"),
    artist: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, books, recordings };
