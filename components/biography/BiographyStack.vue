<template>
  <div
    class="biography-stack"
  >
    <BTitle
      class="biography-stack__title"
      :level="2"
    >
      Стек
    </BTitle>
    
    <div class="biography-stack__list">
      <BLink
        v-for="(item, idx) in sortedStack"
        :key="idx"
        is-new-tab
        class="biography-stack__item stack-item"
        :class="{favorite: item.favorite}"
        :href="item.url"
      >
        <img
          class="stack-item__image"
          loading="lazy"
          :src="item.imageUrl"
          :alt="`${item.title} icon`"
        >
        <div class="stack-item__info">
          <BTitle
            class="stack-item__title"
            :level="3"
          >
            {{ item.title }}
          </BTitle>
          <BText class="stack-item__description">
            {{ item.description }}
          </BText>
          <BText class="stack-item__progress">
            {{ formatProgress(item.progress ) }}
          </BText>
        </div>
      </BLink>
    </div>
    
    <div class="biography-stack__additional additional">
      <BText
        class="additional__title"
      >
        Дополнительные технологии
      </BText>
      <div class="additional__list">
        <BLink
          v-for="(item, idx) in additional"
          :key="idx"
          is-new-tab
          class="additional__item"
          :href="item.url"
          :class="{favorite: item.favorite}"
        >
          <img
            class="additional__image"
            :alt="item.imageUrl"
            :src="item.imageUrl"
          >
        </BLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const yearWordDeclension = (years) => {
  if (/\d*1\d$/.test(years) || /[05-9]$/.test(years)) {
    return "лет";
  } else if (/1$/.test(years)) {
    return "год";
  } else {
    return "года";
  }
};

const formatProgress = (fromYear: string) => {
  if (fromYear === "") {
    return "Набираюсь опыта";
  }
  
  try {
    const currentYear = new Date().getFullYear();
    const yearDifference = currentYear - parseInt(fromYear);
    return `Использую на работе ${yearDifference} ${yearWordDeclension(yearDifference)}`;
  } catch (e) {
    console.error(e);
    return "--";
  }
};


const stack = [
  {
    title: "JavaScript",
    description: "Первый язык для разработки",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    progress: "2019",
    favorite: false,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Typescript",
    description: "Второй и основной язык для разработки️",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    progress: "2019",
    favorite: true,
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "Vue",
    description: "Основной фреймворк для создания веб-приложений",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    progress: "2020",
    favorite: true,
    url: "https://vuejs.org",
  },
  {
    title: "Go",
    description: "Язык для разработки микросервисов и бэкенда",
    progress: "",
    favorite: true,
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    url: "https://go.dev/"
  },
  {
    title: "Python",
    description: "Язык для бэкенда и Machine Learning",
    progress: "",
    favorite: false,
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org/"
  },
];

const sortedStack = computed(() => 
  stack.sort((a, b) => parseInt(a.progress) - parseInt(b.progress))
);

const additional = [
  {
    url: "https://nuxt.com",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    favorite: true,
  },
  {
    url: "https://pinia.vuejs.org/",
    imageUrl: "https://camo.githubusercontent.com/6a89c40d54fde3f7c40b827e46081e4057633764c07bc9bca4ed513689eb2a8e/68747470733a2f2f70696e69612e7675656a732e6f72672f6c6f676f2e737667",
    favorite: true,
  },
  {
    url: "https://react.dev/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    favorite: false,
  },
  {
    url: "https://svelte.dev/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    favorite: false,
  },
  {
    url: "https://lit.dev",
    imageUrl: "/icons/colorful/lit.svg",
    favorite: false,
  },
  {
    url: "https://ionicframework.com/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    favorite: true,
  },
  {
    url: "https://quasar.dev/",
    imageUrl: "https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg",
    favorite: true,
  },
  {
    url: "https://jestjs.io/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    favorite: true,
  },
  {
    url: "https://vitest.dev/",
    imageUrl: "https://raw.githubusercontent.com/vitest-dev/vitest/1e8760ab2b4ae02288ebaf0ab27f9ed314d41980/docs/public/logo.svg",
    favorite: true,
  },
  {
    url: "https://nodejs.org/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    favorite: false,
  },
  {
    url: "https://socket.io/",
    imageUrl: "/icons/adaptive/socketio.svg",
    favorite: true,
  },
  {
    url: "https://www.electronjs.org/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    favorite: true,
  },
  {
    url: "https://mochajs.org",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
    favorite: false,
  },
  {
    url: "https://playwright.dev/",
    imageUrl: "https://playwright.dev/img/playwright-logo.svg",
    favorite: true,
  },
  {
    url: "https://expressjs.com/ru/",
    imageUrl: "/icons/adaptive/express.svg",
    favorite: false,
  },
  {
    url: "https://docs.docker.com",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    favorite: false,
  },
  {
    url: "https://podman.io/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
    favorite: false,
  },
  {
    url: "https://www.rust-lang.org/ru/",
    imageUrl: "https://www.rustacean.net/assets/cuddlyferris.svg",
    favorite: false,
  },
  {
    url: "https://tauri.app/",
    imageUrl: "/icons/colorful/tauri.svg",
    favorite: true,
  },
  {
    url: "https://www.lua.org/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    favorite: false,
  },
  {
    url: "https://www.jetbrains.com/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
    favorite: true,
  },
];
</script>

<style lang="scss" scoped>
.biography-stack {
  
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  }
  
  &__additional {
    margin-top: 12px;
  }

}
.stack-item {
  @include default-ui-card;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  position: relative;
  
  &.favorite::after {
    position: absolute;
    top: 12px;
    right: 12px;
    content: '✨';
  }
  
  &__image {
    display: none;
    width: 48px;
    border-radius: 4px;
  }
  
  &__progress {
    color: var(--neutral);
  }
  
  @include adaptive-from-phone {
    &__image {
      display: block;
    }
  }
}

.additional {
  
  &__list {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  &__item {
    @include default-ui-card;
    position: relative;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.favorite::after {
      position: absolute;
      font-size: 16px;
      top: -8px;
      right: -8px;
      content: "✨"
    }
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  &__title {
    @include font-jetbrains;
    font-weight: 600;
    font-size: calc(var(--fz-h3) - 6px);
  }
  
  &__image {
    display: block;
    width: 32px;
    height: 32px;
  }
}
</style>