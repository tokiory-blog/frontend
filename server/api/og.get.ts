import satori, { FontWeight } from "satori";
import generatePreviewTemplate from "@d/previewTemplate";
import { getFontUrl } from "~/utils/fontPath";
import { OPEN_GRAPH_PREVIEW_SIZE } from "@/constants/openGraph";
import type { Fonts } from "@/types/fonts.types";
import { PreviewGradientColor, previewTemplateSchema } from "@/types/preview.types";
import { useSafeValidatedQuery } from "h3-zod";
import { Resvg } from "@resvg/resvg-js";

interface Font {
  name: Capitalize<Fonts>,
  weight: FontWeight,
  style: "normal" | "italic",
  data: ArrayBuffer
}


export default defineEventHandler(async (event) => {

  // Fonts
  const manropeNormalFont: Font = {
    name: "Manrope",
    data: await fetch(getFontUrl("manrope", "400"))
      .then(response => response.arrayBuffer()),
    weight: 400,
    style: "normal"
  };
  const manropeBoldFont: Font = {
    name: "Manrope",
    data: await fetch(getFontUrl("manrope", "700"))
      .then(response => response.arrayBuffer()),
    weight: 700,
    style: "normal"
  };
  const jetbrainsMonoRegular: Font = {
    name: "JetbrainsMono",
    data: await fetch(getFontUrl("jetbrainsMono", "400"))
      .then(response => response.arrayBuffer()),
    weight: 400,
    style: "normal"
  };
  const jetbrainsMonoSemi: Font = {
    name: "JetbrainsMono",
    data: await fetch(getFontUrl("jetbrainsMono", "600"))
      .then(response => response.arrayBuffer()),
    weight: 600,
    style: "normal"
  };


  // Validation of GET query
  const query = await useSafeValidatedQuery(event, previewTemplateSchema);

  if (!query.success) {
    return "400! Bad Request :(";
  }
  
  const template = generatePreviewTemplate({
    title: decodeURIComponent(query.data.title),
    subtitle: decodeURIComponent(query.data.subtitle ?? ""),
    description: decodeURIComponent(query.data.description ?? ""),
    url: decodeURIComponent(query.data.url).replaceAll(/[\\{2}"]/g, ""),
    gradient: query.data.gradient as PreviewGradientColor ??
      "red"
  });

  const svg = await satori(template, {
    ...OPEN_GRAPH_PREVIEW_SIZE,
    fonts: [
      manropeNormalFont,
      manropeBoldFont,
      jetbrainsMonoRegular,
      jetbrainsMonoSemi,
    ]
  });

  const resvg = new Resvg(Buffer.from(svg));
  const pngBuffer = resvg.render().asPng();
  return send(event, pngBuffer, "image/png");
});