import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every Markdown file in src/content/projects/ becomes a card in the Projects section.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tech: z.array(z.string()).default([]),
      date: z.coerce.date(),
      // optional links - the buttons only show when set
      repo: z.string().url().optional(),
      link: z.string().url().optional(),
      // optional screenshot, relative path, e.g. ./images/my-project.png
      image: image().optional(),
      // optional extra photos shown as a thumbnail strip, e.g. [./images/a.png, ./images/b.png]
      gallery: z.array(image()).default([]),
      // set to true to hide a project without deleting the file
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
