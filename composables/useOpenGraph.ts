import type { PreviewTemplate } from "@/types/preview.types";
import { OPEN_GRAPH_PREVIEW_SIZE } from "~/constants/openGraph";

/**
 * Utility for generation OG Preview URL
 * @param rootUrl URL of the site
 * @param params Preview parameters
 * @returns URL
 */
const generatePreviewURL = (rootUrl: string, params: PreviewTemplate): string => {
  const title = encodeURIComponent(params.title);
  const url = encodeURIComponent(params.url);
  
  const queryParams = new URLSearchParams({
    title,
    url,
  });
  
  const addParamIfExists = (name: string, param?: string) => {
    param && queryParams.append(name, encodeURIComponent(param));
  };
  
  addParamIfExists("subtitle", params.subtitle);
  addParamIfExists("gradient", params.gradient);
  addParamIfExists("description", params.description);
  
  return `${rootUrl}/api/og?${queryParams.toString()}`;
};

/**
 * Include Open Graph meta tags (and twitter too🐦) into page head tag
 * @param title Title of the page
 * @param subtitle Subtitle of the page
 * @param description Description of the page
 * @param gradient Gradient to use
 */
export const useOpenGraph = async ({ description, gradient, title, subtitle }: Omit<PreviewTemplate, "url">) => {
  const route = useRoute();
  const config = useRuntimeConfig();
  const url = `"${config.public.URL}${route.path}"`;
  
  debugDo(() => {
    console.groupCollapsed("useOpenGraph.ts: Preview of generated API URL");
    console.log("URL", generatePreviewURL(config.public.URL, { description, url, title, gradient, subtitle }));
    console.groupEnd();
  });
  
  const previewSizeMeta = Object.keys(OPEN_GRAPH_PREVIEW_SIZE).map(key => {
    return {
      property: `og:image:${key}`,
      content: OPEN_GRAPH_PREVIEW_SIZE[
        key as keyof typeof OPEN_GRAPH_PREVIEW_SIZE
        ].toString()
    };
  });
  
  const previewURL = generatePreviewURL(config.public.URL, { description, gradient, title, subtitle, url });
  
  useHead({
    meta: [
      // Twitter OG
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:image",
        content: previewURL
      },
      
      // Basic OG
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:image",
        content: previewURL
      },
      ...previewSizeMeta,
    ]
  });
};

