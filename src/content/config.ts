import articleFrontmatter from "@/schema/articleFrontmatter";
import tutorialFrontmatter from "@/schema/tutorialFrontmatter";
import { defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  schema: articleFrontmatter
});

const tutorialCollection = defineCollection({
  schema: tutorialFrontmatter
});

export const collections = {
  'article': articleCollection,
  'tutorial': tutorialCollection
};