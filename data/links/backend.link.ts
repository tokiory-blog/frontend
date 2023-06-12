import { TechnologySection } from "~/types/links.types";

export const backendFrameworksSection: TechnologySection = {
  name: "Разработка Backend",
  child: [
    {
      name: "Express.js",
      url: "https://expressjs.com/ru/",
      description: "Стандарт де-факто для написания бэкенда на Javascript + Node.js.",
      icon: "/icons/adaptive/express.svg",
    },
    {
      name: "Koa.js",
      url: "https://koajs.com/",
      description: "Аналог Express.js, который сделали разработчики, которые ушли из разработки Express.js.",
      icon: "https://github.com/koajs/koa/raw/master/docs/logo.png",
    },
    {
      name: "Gin",
      url: "https://gin-gonic.com/",
      description: "Самый популярный фреймворк для создания веб-приложений на Go.",
      icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
    },
    {
      name: "Rocket",
      url: "https://rocket.rs/",
      description: "Один из популярных фреймворков для написания бэкенда на Rust.",
      icon: "https://rocket.rs/v0.5-rc/images/logo-small.svg",
    }
  ]
};
