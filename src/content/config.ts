import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      live: z.boolean().optional().default(true),
      link: z.string().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  work: blogCollection,
};
