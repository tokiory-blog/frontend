<script lang="ts" setup>
import USEFULL_LINKS from "@d/usefullLinks";
import { SITE_DESCRIPTION, SITE_NAME } from "~/constants/meta";

const PAGE_TITLE = "Ссылки";
const PAGE_DESCRIPTION = `В данном разделе описаны ссылки, которые часто пригождались мне во время разработки. Здесь находятся все ссылки, которые я собрал во время разработки продуктов начиная от создания дизайна и заканчивая деплоем.
Я специально рассортировал их в порядке создания продукта: от архитектуры и создания дизайна до выпуска в продакшен (деплой).`;

definePageMeta({
  layout: "full",
});

useHead({
  title: `${SITE_NAME}: ${PAGE_TITLE}`
});

useOpenGraph({
  gradient: "rainbow",
  title: `${SITE_NAME}: ${PAGE_TITLE}`,
  description: SITE_DESCRIPTION,
});

</script>

<template>
  <div class="link-page">
    <BTitle :level="1">
      {{ PAGE_TITLE }}
    </BTitle>
    <div class="link-page__text">
      <BText>
        {{ PAGE_DESCRIPTION }}
      </BText>
    </div>
    <LinksSection
      v-for="(section, idx) in USEFULL_LINKS.links"
      :key="idx"
      :section="section"
    />
    <LinksTechnology
      v-for="(technology, idx) in USEFULL_LINKS.technologies"
      :key="idx"
      :technologies="technology"
    />
  </div>
</template>

<style lang="scss" scoped>
.link-page {
  padding: 32px 0;

  &__text {
    margin-top: 12px;
  }

}
</style>