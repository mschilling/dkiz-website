import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikelen = defineCollection({
  loader: glob({ base: './src/content/artikelen', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tagline: z.string().optional(),
    publishDate: z.string(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    thumb: z.string().optional(),
    alt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    order: z.number().optional(),
    permalink: z.string().optional(),
    keywords: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tagline: z.string().optional(),
    publishDate: z.string(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    thumb: z.string().optional(),
    alt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    order: z.number().optional(),
    permalink: z.string().optional(),
    keywords: z.string().optional(),
  }),
});

export const collections = { artikelen, articles };
