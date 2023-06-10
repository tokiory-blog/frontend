import {
  LinkSection,
  LinkSectionItem,
  TechnologyItem,
  TechnologySection
} from "@/types/links.types";

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
    },
    {
      name: "Coolors",
      description: "Удобный сервис для подбора цветовой палитры",
      url: "https://coolors.co/",
    },
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

const tutorialSection: LinkSection = {
  name: "Туториалы",
  child: [
    {
      name: "NASM Tutorial",
      description: "Туториал по ассемблеру (NASM)",
      url: "https://cs.lmu.edu/~ray/notes/nasmtutorial/"
    },
    {
      name: "Vue Tutorial",
      url: "https://vuejs.org/tutorial",
      description: "Один из моих любимых туториалов, что я когда-то проходил. Evan You сделал этот" +
        "туториал просто идеальным для новичков. За 2-3 подхода можно полностью выучить Vue и начать" +
        "создавать на нем проекты"
    },
    {
      name: "Gophercises",
      url: "https://gophercises.com/",
      description: "Коллекция упражнений для Go, которые подтянут вас до достойного уровня"
    },
    {
      name: "Go в примерах",
      url: "https://gobyexample.com.ru/",
      description: "Коллекция наглядных сниппетов, где демонстрируются возможности Go",
    },
    {
      name: "Learn JavaScript",
      url: "https://learn.javascript.ru/",
      description: "Основной сервис, с помощью которого все разработчики ищут новую и вспоминают старую информацию" +
        "о JavaScript"
    },
    {
      name: "Eloquent JavaScript",
      description: "Восхитительная онлайн-книга про JavaScript",
      url: "https://eloquentjavascript.net/",
    }
  ],
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
      description: "Serverless база данных, с помощью которой можно быстро создавать MVP."
    },
    {
      name: "Supabase",
      url: "https://supabase.com/",
      description: "Альтернатива для Firebase. В отличии от последней, Supabase - SQL-based."
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      description: "База данных основанная на документах JSON. Имеет схожий синтаксис c JS.",
    },
    {
      name: "Prisma",
      url: "https://www.prisma.io/",
      description: "ORM для JavaScript/TypeScript",
    },
    {
      name: "TypeORM",
      url: "https://typeorm.io/",
      description: "Еще одна ORM для JS/TS",
    }
  ]
};

const frontendFrameworksSection: TechnologySection = {
  name: "Разработка Frontend",
  child: [
    {
      name: "Vue.js",
      url: "https://vuejs.org/",
      description: "Удобный фреймворк для создания приложений. Огромная крутая экосистема, удобный язык разметки и многое" +
        "другое.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "React",
      url: "https://react.dev/",
      description: "Более медленный аналог Vue, который появился раньше него. Очень популярен.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Svelte",
      url: "https://svelte.dev/",
      description: "Один из самых быстрых Frontend-фреймворков на сегодняшний день. Синтаксис не добавляет ничего нового" +
        "вся логика пишется на чистом JS, сам код компилируется и на выходе получается чистый JS. Фреймворк без VDOM.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      name: "Lit",
      url: "https://lit.dev/",
      description: "Фреймворк для создания веб-компонентов.",
      icon: "/icons/colorful/lit.svg",
    },
    {
      name: "Solid",
      url: "https://www.solidjs.com/",
      description: "Более быстрый аналог React.js с аналогичным синтаксисом. Также как и Svelte - является одним из" +
        "самых быстрых фреймворков, который существует на текущий момент.",
      icon: "https://www.solidjs.com/assets/logo-123b04bc.svg",
    },
  ]
};

const backendFrameworksSection: TechnologySection = {
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

const desktopFrameworksSection: TechnologySection = {
  name: "Разработка Desktop",
  child: [
    {
      name: "Electron",
      url: "https://www.electronjs.org/",
      description: "Древний как мир, фреймворк для написания десктопных приложений. Основывается на Chromium. Жрет много" +
        "памяти и само приложение весит тоже много.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    },
    {
      name: "Tauri",
      url: "https://tauri.app/",
      description: "Современный аналог Electron.js основанный на Webview. Обладает огромным функционалом.",
      icon: "/icons/colorful/tauri.svg",
    },
    {
      name: "Webview",
      url: "https://github.com/webview/webview",
      description: "Webview является библиотекой, которая доступна для C++, C, Rust, Go и других языков. Она позволяет" +
        "запускать свой JS и HTML внутри отдельного Webview в системе.",
      icon: "/icons/adaptive/webview.svg",
    },
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

const extraSection: LinkSection = {
  name: "Экстра",
  child: [
    {
      name: "Termius",
      description: "ПО для удобного управления SSH-ключами и SSH-соединениями",
      url: "https://termius.com/",
    },
    {
      name: "Roadmap.sh",
      description: "Сайт с детальными роадмапами для развития разных скиллов у разработчиков",
      url: "https://roadmap.sh",
    },
    {
      name: "Vimcolorschemes",
      description: "Сайт для подбора тем для Neovim/Vim",
      url: "https://vimcolorschemes.com/",
    },
    {
      name: "VS Code Themes",
      description: "Сайт для подбора цветовой темы для VSCode",
      url: "https://vscodethemes.com/",
    },
    {
      name: "Compiler Explorer",
      description: "Онлайн-компилятор, который преобразовывает любой код в ассемблерный-код",
      url: "https://asm.godbolt.org/",
    },
  ]
};

const customFonts: LinkSection = {
  name: "Кастомизация: Шрифты",
  child: [
    {
      name: "Sudo",
      url: "https://www.kutilek.de/sudo-font/",
    },
    {
      name: "Mononoki",
      url: "http://madmalik.github.io/mononoki/",
    },
    {
      name: "Iosevka",
      url: "https://typeof.net/Iosevka/",
    },
    {
      name: "Input",
      url: "https://input.djr.com/preview/?size=14&language=python&theme=solarized-dark&family=InputSans&width=300&weight=300&line-height=1.2&a=0&g=0&i=0&l=0&zero=0&asterisk=0&braces=0&preset=default&customize=please",
    },
    {
      name: "iA Writer Mono",
      url: "https://ia.net/topics/a-typographic-christmas",
    },
    {
      name: "Cartograph",
      url: "https://connary.com/cartograph.html",
    },
    {
      name: "Fantasque Sans Mono",
      url: "https://github.com/belluzj/fantasque-sans",
    }
  ]
};

const customThemes: LinkSection = {
  name: "Кастомизация: Темы",
  child: [
    {
      name: "Tomorrow",
      url: "https://github.com/chriskempson/tomorrow-theme",
    },
    {
      name: "Catppuccin",
      url: "https://github.com/catppuccin/catppuccin"
    },
    {
      name: "Solarized",
      url: "https://ethanschoonover.com/solarized/",
    },
    {
      name: "Gruvbox",
      url: "https://github.com/morhetz/gruvbox",
    },
    {
      name: "Gruvbox Material",
      url: "https://github.com/sainnhe/gruvbox-material",
    }
  ],
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
