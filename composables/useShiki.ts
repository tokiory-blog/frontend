import shiki, { getHighlighter, Lang, Theme } from "shiki-es";

export interface ShikiParams {
  code: string,
  language: Lang,
  theme?: Omit<Theme, "css-variables">
}

export const useShiki = async ({code, language, theme}: ShikiParams) => {
  const highlighter = await getHighlighter({
    theme: (theme ?? "min-dark") as Theme,
    langs: [language],
  });
  const tokens = highlighter.codeToThemedTokens(code);
  return highlighter.codeToHtml(code, language);
  // return shiki.renderToHtml(code);
};