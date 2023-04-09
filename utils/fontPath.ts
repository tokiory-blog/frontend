import type { FontObject, Fonts, FontWeight } from "@/types/fonts.types";
import { JETBRAINS_MONO_FONT, MANROPE_FONT } from "@/constants/fonts";

/**
 * Get relative path of a font
 * @param type Font type
 * @param fw Font weight
 * @returns Relative font path
 */
export const getFontPath = (type: Fonts, fw: FontWeight): string => {
  let font: FontObject;

  switch (type) {
    case "jetbrainsMono":
      font = JETBRAINS_MONO_FONT;
      break;
    case "manrope":
      font = MANROPE_FONT;
      break;
  }

  return font[fw];
};

/**
 * Get absolute URL of a font
 * @param type Font type
 * @param fw Font weight
 * @returns Absolute url for the font
 */
export const getFontUrl = (type: Fonts, fw: FontWeight): string => {
  const config = useRuntimeConfig();
  const font = getFontPath(type, fw);
  return `${config.public.URL}${font}`;
};
