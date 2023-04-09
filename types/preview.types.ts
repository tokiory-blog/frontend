import { z } from "zod";

export type PreviewGradientColor = "red" | "green" | "blue" | "rainbow" | "yellow";

export interface PreviewTemplate {
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  gradient?: PreviewGradientColor;
}

export const previewTemplateSchema = {
  title: z.string(),
  subtitle: z.optional(z.string()),
  description: z.string(),
  url: z.string(),
  gradient: z.optional(z.string()),
};