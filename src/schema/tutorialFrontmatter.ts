import { z } from "astro:content";

export default  z.object({
  title: z.string(),
  tags: z.array(z.string()),
  description: z.string()
});
