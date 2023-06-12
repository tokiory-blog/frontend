import { LinkSection } from "~/types/links.types";

export const documentationSection: LinkSection = {
  name: "Документация",
  child: [
    {
      name: "DevDocs",
      url: "https://devdocs.io/",
      description: "Онлайн документация для огромного количества ЯП. Работает оффлайн.",
    },
    {
      name: "Can I use",
      url: "https://caniuse.com/",
      description: "Сайт на котором можно посмотреть совместимость селекторов, методов JS и атрибутов с разными браузерами",
    },
    {
      name: "MDN",
      description: "Веб-документация для всего, что касается веб-технологий.",
      url: "https://developer.mozilla.org/en-US/"
    },
    {
      name: "web.dev",
      url: "https://web.dev",
      description: "Документация для веб-технологий, также присутствуют доки по эксперементальным и сравнительно " +
        "новым технологиям. Все дело спонсируется Google, так что качество на высоте."
    },
    {
      name: "PublicAPI",
      url: "https://publicapi.dev/",
      description: "Список публичных API для всевозможных сервисов. Незаменимая вещь когда " +
        "нужен бесплатный API для какого-нибудь сервиса.",
    },
    {
      name: "StackShare",
      url: "https://stackshare.io/stacks",
      description: "Сайт, который позволяет следить за трендами стеков компаний-гигантов. " +
        "Когда выходят новые технологии и компании добавляют их в прод происходят изменения и на данном сайте."
    },
    {
      name: "Libraries.io",
      url: "https://libraries.io/",
      description: "Сервис для поиска пакетов для разных ЯП и технологий"
    },
    {
      name: "Can I DevTools?",
      url: "https://www.canidev.tools/",
      description: "Можно посмотреть какие возможности есть у разных инструментов для разработчика в различных браузерах",
    },
    {
      name: "Sourcegraph",
      url: "https://searchcode.com/",
      description: "Сервис, который предлагает поиск по кодовой базе Github с всевозможными фильтрами"
    }
  ]
};
