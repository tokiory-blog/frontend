import { LinkSection, LinkSectionItem } from "~/types/links.types";

const articles = {
  go: [
    {
      name: "[go.dev] Strings, bytes, runes and characters in Go - The Go Programming Language",
      url: "https://go.dev/blog/strings",
      description: "Описывается работа строк, рун и символов в Go"
    },
  ],
  rust: [
    {
      name: "[Proglib] Владение и заимствование в Rust: детально о Lifetime для начинающих и более опытных",
      url: "https://proglib.io/p/vladenie-i-zaimstvovanie-v-rust-detalno-o-lifetime-dlya-nachinayushchih-i-bolee-opytnyh-2021-10-22?ysclid=lgqa88ln16253142064",
      description: "Коротко и понятно описывается работа borrow checker'а",
    },
    {
      name: "[Habr] Traits из коробки",
      url: "https://habr.com/ru/articles/277461/",
      description: "Описываются трейты, которые предложены стандартной библиотекой Rust"
    }
  ],
  extra: [
    {
      name: "[Habr] Шаблоны проектирования с человеческим лицом",
      url: "https://habr.com/ru/companies/vk/articles/325492/",
      description: "Легко и просто описываются паттерны проектирования"
    }
  ]
};

export const articleSection: LinkSection = {
  name: "Статьи заслуживающие внимания",
  child: Object.keys(articles).reduce<LinkSectionItem[]>((acc, key): LinkSectionItem[] => {
    const articleTag = key[0].toUpperCase() + key.slice(1);
    const articleList = articles[key as keyof typeof articles].map(article => {
      return {
        ...article,
        name: `${articleTag}: ${article.name}`,
      };
    });

    return [...acc, ...articleList];
  }, [])
};
