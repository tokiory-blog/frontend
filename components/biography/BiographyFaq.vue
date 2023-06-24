<template>
  <div class="faq">
    <BTitle :level="2">
      FAQ
    </BTitle>
    <ContentDetails
      class="faq__details details"
      title="Опыт"
      emoji="🐱"
    >
      <div class="details__content">
        <BText class="details__text">
          Я в разработке уже более 4-х лет. За это время я успел сделать несколько огромных проектов, поучавствовать
          в разработке архитектур различных приложений и фич, а также менторил нескольких джунов во время работы.
          Мне нравится веб-разработка и все что с ней связано. Мой любимый стек: Vue, Typescript, Go/Python.
        </BText>
        <BText class="details__text">
          Я писал приложения в самых разных связках от Vue/Typescript/Electron до Svelte/Tauri.
          Я приложил руку к таким проектам как: площадка для стриминга, корпоративный кроссплатформенный месенджер,
          система для регистрации пассажиров, приложение для отслеживания женского здоровья,
          а также множество лендингов и продуктовых сайтов. В числе проектов также состоит данный блог.
        </BText>
        <BText class="details__text">
          Иногда я пишу статьи на
          <BLink
            is-new-tab
            href="https://vc.ru/u/1178100-daniil-shilo"
          >
            vc
          </BLink>
          и
          <BLink
            is-new-tab
            href="https://habr.com/ru/users/crackidocky/posts/"
          >
            habr
          </BLink>
          , намного чаще пишу
          <BLink href="/notes">
            заметки.
          </BLink>
        </BText>
      </div>
    </ContentDetails>
    <ContentDetails
      class="faq__details details"
      title="Что я использую для разработки?"
      emoji="✨"
    >
      <div class="details__content">
        <BText class="details__text">
          Я перепробовал достаточно много редакторов: VSCode, Atom, Sublime, &lt;вставьте свой редактор&gt;.
          Очень долгое время я оставался на
          <BLink
            href="https://neovim.io/"
            is-new-tab
          >
            Neovim
          </BLink>
          , это консольный программируемый редактор, который я использовал для разработки продуктов
          около 2 лет. Я даже сделал шаблон для создания своей конфигурации в Neovim, а также пару тройку конфигураций,
          однако вскоре понял, что Neovim не совсем соответствует моим нуждам. На данный момент я пользуюсь WebStorm.
        </BText>
        <BText class="details__text">
          Если говорить кратко, то вот то, чем я пользуюсь ежедневно:
        </BText>
        <ul class="details__list">
          <li class="details__list-item">
            <BText>
              Macbook Air 256/8 (M1) ― Основная рабочая машина;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://arc.net/"
                is-new-tab
              >
                Arc Browser
              </BLink> ― Основной браузер;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://ru.ergohaven.xyz/"
                is-new-tab
              >
                Ergohaven K:02
              </BLink> ― Клавиатура
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://www.jetbrains.com/webstorm/"
                is-new-tab
              >
                WebStorm/GoLand
              </BLink> ― IDE для фронтенд-разработки/бэкенд-разработки;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink href="https://notion.so">
                Notion
              </BLink> ― Приложения для ведения заметок;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://www.postman.com/"
                is-new-tab
              >
                Postman
              </BLink> ― Приложения для тестирования API;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://www.warp.dev/"
                is-new-tab
              >
                Warp
              </BLink> ― Основной терминал;
            </BText>
          </li>
          <li class="details__list-item">
            <BText>
              <BLink
                href="https://www.raycast.com/"
                is-new-tab
              >
                Raycast 
              </BLink> ― Удобная замена Spotlight на MacOS;
            </BText>
          </li>
        </ul>
      </div>
    </ContentDetails>
    <ContentDetails
      class="faq__details details"
      title="Где можно со мной связаться?"
      emoji="🔗"
    >
      <div class="details__content">
        <BText class="details__text">
          Я открыт для общения (но, почти всегда отвечаю ближе к вечеру, так как работаю 😅)
        </BText>
        <BText class="details__text">
          Telegram:
          <BLink
            is-new-tab
            :href="`https://t.me/${AUTHOR_NICKNAME}`"
          >
            {{ AUTHOR_TELEGRAM }}
          </BLink>
        </BText>
        <BText class="details__text">
          Email:
          <BLink :href="AUTHOR_EMAIL">
            {{ AUTHOR_EMAIL }}
          </BLink>
        </BText>
        <BText class="details__text">
          Discord:
          <BLink
            is-new-tab
            :href="AUTHOR_DISCORD"
          >
            {{ AUTHOR_DISCORD }}
          </BLink>
        </BText>
      </div>
    </ContentDetails>
    <ContentDetails
      class="faq__details details"
      title="Список литературы"
      emoji="📚"
    >
      <div class="details__content">
        <BText class="details__text">
          Я достаточно много учусь и стараюсь всегда записывать материалы с помощью которых проходит обучение.
          На данный момент я перенес сюда не так много материалов, которые я уже выучил. В основном внизу собраны
          материалы, которые я еще буду просматривать.
        </BText>
        <BCard
          class="details__page"
          has-hover
          @click="router.push('/author/checklist')"
        >
          Чеклист
        </BCard>
      </div>
    </ContentDetails>
  </div>
</template>

<script setup lang="ts">
import { AUTHOR_DISCORD, AUTHOR_EMAIL, AUTHOR_NICKNAME, AUTHOR_TELEGRAM } from "@/constants/author";
const router = useRouter();
</script>

<style lang="scss" scoped>
.faq {
  &__details {
    margin-top: 12px;
  }
}

.details {
  &__content {
    padding: 12px 8px;
  }
  
  &__text + &__text {
    margin-top: 8px;
  }
  
  &__page {
    cursor: pointer;
    margin-top: 12px;
    text-align: center;
    padding: 12px;
    font-size: var(--fz-h2);
  }
}
</style>