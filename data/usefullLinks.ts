import { Link } from "@unhead/schema";

const designSection: LinkSection = {
  name: "Дизайн",
  child: [
    {
      name: "Eva Design System",
      description: "Позволяет очень быстро создать красивую цветовую палитру отталкиваясь " +
        "от одного цвета.",
      url: "https://colors.eva.design/"
    },
    {
      name: "Devicon",
      description: "Сайт с иконками различных брендов, которые причастны к IT." +
        " Тут есть иконки фреймворков, ЯП и библиотек.",
      url: "https://devicon.dev/",
    },
    {
      name: "Khroma",
      description: "Генератор хроматических цветов. Вы выбираете 50 цветов, которые вам понравились, " +
        "их обрабатывает AI и выдает вам сочетания, на которые приятно смотреть.",
      url: "http://khroma.co/generator/",
    },
    {
      name: "Dribbble",
      description: "Позволяет посмотреть тренды дизайна, а также найти вдохновение для своего проекта.",
      url: "https://dribbble.com/",
    }
  ]
};

const readmeSection: LinkSection = {
  name: "Создание README",
  child: [
    {
      name: "Badges Generator",
      description: "Генератор бэйджей для README.md",
      url: "https://badgesgenerator.com/"
    }
  ]
};

const documentationSection: LinkSection = {
  name: "Документация",
  child: [
    {
      name: "DevDocs",
      url: "https://devdocs.io/",
      description: "Онлайн документация для огромного количества ЯП. Работает оффлайн.",
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
      name: "Sourcegraph",
      url: "https://searchcode.com/",
      description: "Сервис, который предлагает поиск по кодовой базе Github с всевозможными фильтрами"
    }
  ]
};

const architectureSection: LinkSection = {
  name: "Архитектура",
  child: [
    {
      name: "Pattern Guru",
      url: "https://refactoring.guru/ru/design-patterns",
      description: "Сайт для просмотра всевозможных паттернов для архитектуры. Отличается краткостью, удобной навигацией и " +
        "легкой подачей материала"
    }
  ],
};

const databaseSection: LinkSection = {
  name: "Базы данных",
  child: [
    {
      name: "Firebase",
      url: "https://firebase.google.com/index.html",
      description: "Serverless база данных, с помощью которой можно быстро создавать MVP"
    },
    {
      name: "Supabase",
      url: "https://supabase.com/",
      description: "Альтернатива для Firebase. В отличии от последней, Supabase - SQL-based."
    }
  ]
};

const deploymentSection: LinkSection = {
  name: "Деплой",
  child: [
    {
      name: "Vercel",
      url: "https://vercel.com/"
    },
    {
      name: "Netlify",
      url: "https://www.netlify.com/"
    }
  ]
};

const extraSection: LinkSection = {
  name: "Экстра",
  child: [
    {
      name: "Termius",
      description: "ПО для удобного управления SSH-ключами и SSH-соединениями",
      url: "https://termius.com/",
    }
  ]
};

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

const articleSection: LinkSection = {
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
export default [
  designSection,
  readmeSection,
  documentationSection,
  architectureSection,
  databaseSection,
  deploymentSection,
  extraSection,
  articleSection,
];

export interface LinkSection {
  name: string;
  child: LinkSectionItem[];
}

export interface LinkSectionItem {
  name: string;
  url: string;
  description?: string;
}