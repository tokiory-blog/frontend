import { FontObject, Fonts } from "@/types/fonts.types";
// Folders of the fonts
const FOLDERS: Record<Fonts, string> = {
  manrope: "/fonts/manrope",
  jetbrainsMono: "/fonts/jetbrains-mono",
};

// Manrope font
export const MANROPE_FONT: FontObject = {
  400: `${FOLDERS.manrope}/Manrope-Regular.ttf`,
  500: `${FOLDERS.manrope}/Manrope-Medium.ttf`,
  600: `${FOLDERS.manrope}/Manrope-SemiBold.ttf`,
  700: `${FOLDERS.manrope}/Manrope-Bold.ttf`,
};

// Jetbrains mono font
export const JETBRAINS_MONO_FONT: FontObject = {
  400: `${FOLDERS.jetbrainsMono}/JetBrainsMono-Regular.ttf`,
  500: `${FOLDERS.jetbrainsMono}/JetBrainsMono-Medium.ttf`,
  600: `${FOLDERS.jetbrainsMono}/JetBrainsMono-SemiBold.ttf`,
  700: `${FOLDERS.jetbrainsMono}/JetBrainsMono-Bold.ttf`,
};

