//
// Template for satori rendering
// Documentation: <https://github.com/vercel/satori>
// Author of the template: Daniil Shilo <crackidocky@gmail.com>
// License: MIT <https://mit-license.org>
// Used fonts: Manrope [fw: 400, 600] <https://fonts.google.com/specimen/Manrope>,
//             Jetbrains Mono [fw: 400] <https://fonts.google.com/specimen/JetBrains+Mono>
// 
import { html } from "satori-html";
import { PreviewGradientColor, PreviewTemplate } from "@/types/preview.types";
import { FULL_LOGO_PREVIEW } from "~/constants/logo";

// Styles for the template
// Docs: https://github.com/vercel/satori#css
const STYLE = {
  main: `
    display: flex;
    font-family: Manrope, sans-serif;
    justify-content: space-between;
    padding: 120px;
    align-items: center;
    height: 100vh;
    gap: 320px;
  `,
  blockInfo: `
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  title: `
    font-size: 72px;
    font-weight: 700;
    white-space: pre-wrap;
  `,
  subtitle: `
    font-size: 44px;
    font-weight: 600;
    white-space: pre-wrap;
    font-family: "JetBrainsMono";
    text-decoration: underline;
    text-decoration-style: dashed;
    padding-bottom: 8px;
  `,
  description: `
    font-size: 32px;
  `,
  url: `
    display: flex;
    font-size: 18px;
  `,
  logo: `
    text-align: left;
    font-family: 'JetBrainsMono', monospace;
    font-weight: 400;
  `
};


const getGradientCss = (color: PreviewGradientColor) => {

  // Colors for fonts
  const BLACK_COLOR = "#222222";
  const WHITE_COLOR = "#f8f8f8";

  switch (color) {
    case "red":
      return `
        background-image: linear-gradient( 109.6deg,  rgba(254,87,98,1) 11.2%, rgba(255,107,161,1) 99.1% );
        color: ${WHITE_COLOR};
      `;
    case "pink":
      return `
        background-image: linear-gradient(45deg, rgba(255,191,217,1) 0%, rgba(194,255,193,1) 100%);
        color: ${BLACK_COLOR};
      `;
    case "orange":
      return `
        background-image: linear-gradient(77deg, rgba(247,217,171,1) 0%, rgba(221,111,128,1) 100%);
        color: ${WHITE_COLOR};
      `;
    case "black":
      return `
        background-image: linear-gradient(162deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 100%);
        color: ${WHITE_COLOR};
      `;
    case "purple":
      return `
        background-image: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);
        color: ${BLACK_COLOR};
      `;
    case "yellow":
      return `
        background-image: linear-gradient(143deg, rgba(255,239,145,1) 0%, rgba(181,255,143,1) 100%);
        color: ${BLACK_COLOR};
      `;
    case "green":
      return `
         background-image: linear-gradient(45deg, rgba(145,173,255,1) 0%, rgba(145,255,143,1) 100%); 
         color: ${BLACK_COLOR};
      `;
    case "rainbow":
      return `
        background-image:
          linear-gradient(
            108.4deg,
            rgba(250,236,190,1) 4.2%,
            rgba(247,202,205,1) 30.7%,
            rgba(255,186,233,1) 53.9%,
            rgba(214,176,214,1) 73.9%,
            rgba(148,195,231,1) 90.4%
          );
        color: ${BLACK_COLOR};
      `;
    default: // Blue
      return `
        background-image: linear-gradient(to right, #a8c0ff, #3f2b96);
        color: ${WHITE_COLOR};
      `;
  }
};


const generatePreviewTemplate = ({ title, subtitle, description, url, gradient = "red" }: PreviewTemplate) => {
  const template = `
  <div
    style="${STYLE.main} ${getGradientCss(gradient)};"
  >
    <div style="${STYLE.blockInfo}">
      <div style="${STYLE.title}">${title}</div>
      ${subtitle && `<div style="${STYLE.subtitle}">${subtitle}</div>`}
      <div style="${STYLE.description}">${description}</div>
      <pre style="${STYLE.logo}">${FULL_LOGO_PREVIEW}</pre>
      <div style="${STYLE.url}">${url}</div>
    </div>
  </div>
  `;

  return html(template);
};

export default generatePreviewTemplate;