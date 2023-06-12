import { TechnologySection } from "~/types/links.types";

export const frontendFrameworksSection: TechnologySection = {
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
