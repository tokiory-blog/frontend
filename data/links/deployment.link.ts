import { LinkSection } from "~/types/links.types";

export const deploymentSection: LinkSection = {
  name: "Деплой",
  child: [
    {
      name: "Vercel",
      url: "https://vercel.com/"
    },
    {
      name: "Netlify",
      url: "https://www.netlify.com/"
    },
    {
      name: "Firebase Hosting",
      url: "https://firebase.google.com/docs/hosting",
    },
    {
      name: "Render",
      url: "https://render.com/",
    }
  ]
};
