<script lang="ts" setup>
import USEFULL_LINKS from "@d/usefullLinks";
import { SITE_NAME } from "~/constants/meta";

const PAGE_TITLE = 'Ссылки';
const PAGE_DESCRIPTION = `В данном разделе описаны ссылки, которые часто пригождались мне во время разработки. Здесь находятся все ссылки, которые я собрал во время разработки продуктов начиная от создания дизайна и заканчивая деплоем.
Я специально рассортировал их в порядке создания продукта: от архитектуры и создания дизайна до выпуска в продакшен (деплой).`;

definePageMeta({
  layout: 'full',
});

useHead({
  title: `${SITE_NAME}: ${PAGE_TITLE}`
});

</script>

<template>
  <div class="link-page">
    <BaseTitle>{{ PAGE_TITLE }}</BaseTitle>
    <div class="link-page__text">
      <BaseText>
        {{ PAGE_DESCRIPTION }}
      </BaseText>
    </div>
    <LinkSection
        v-for="(section, idx) in USEFULL_LINKS"
        :key="idx"
        :section="section"
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