import { z } from "zod";

export type PreviewGradientColor = "pink" |
  "red" |
  "green" |
  "blue" |
  "rainbow" |
  "yellow" |
  "orange" |
  "purple" |
  "black";

export interface PreviewTemplate {
  title: string;
  subtitle?: string;
  description?: string;
  url: string;
  gradient?: PreviewGradientColor;
}

export const previewTemplateSchema = {
  title: z.string(),
  subtitle: z.optional(z.string()),
  description: z.optional(z.string()),
  url: z.string(),
  gradient: z.optional(z.string()),
};