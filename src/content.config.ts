import { defineCollection, z } from "astro:content";

import { file } from "astro/loaders";

const imgs = defineCollection({
    loader: file("./src/assets/images/sitemap_imgs.json"),
    schema: ({ image }) => z.object({
        src: image(),
        alt: z.string(),
        href: z.string().optional()
    })
});

export const collections = { imgs };