import { defineCollection} from "astro:content";
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod";

const showcase = defineCollection({
  loader: glob({ base: './src/content/showcase', pattern: '**/*.json' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.url(),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  showcase,
};
