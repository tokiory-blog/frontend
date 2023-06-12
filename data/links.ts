import { designSection } from "@d/links/design.link";
import { readmeSection } from "@d/links/readme.link";
import { documentationSection } from "@d/links/documentation.link";
import { architectureSection } from "@d/links/architecture.link";
import { databaseSection } from "@d/links/database.link";
import { deploymentSection } from "@d/links/deployment.link";
import { tutorialSection } from "@d/links/tutorial.link";
import { extraSection } from "@d/links/extra.link";
import { customFonts, customThemes } from "@d/links/customization.link";
import { articleSection } from "@d/links/articles.link";

// Languages, libraries and frameworks
import { frontendFrameworksSection } from "@d/links/frontend.link";
import { backendFrameworksSection } from "@d/links/backend.link";
import { desktopFrameworksSection } from "@d/links/desktop.link";

const links = [
  designSection,
  readmeSection,
  documentationSection,
  architectureSection,
  databaseSection,
  deploymentSection,
  tutorialSection,
  extraSection,
  customFonts,
  customThemes,
  articleSection,
];

const technologies = [
  frontendFrameworksSection,
  backendFrameworksSection,
  desktopFrameworksSection,
];

export default {
  links,
  technologies,
};
