<script lang="ts" setup>
import { SITE_DESCRIPTION, SITE_NAME } from "~/constants/meta";

const PAGE_TITLE = `${SITE_NAME}: Автор`;

definePageMeta({
  layout: "full"
});
useHead({ title: PAGE_TITLE });
useOpenGraph({
  gradient: "yellow",
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
});
</script>

<template>
  <div class="author-page">
    <BiographyHero class="author-page__hero" />
    <BiographyDescription class="author-page__description" />
    <BiographyGallery class="author-page__gallery" />
    <BiographyCode />
  </div>
</template>

<style lang="scss" scoped>
.author-page {
  width: 100%;
  padding-top: 20vh;

  &__description {
    margin-top: 64px;
  }

  &__gallery {
    margin-top: 32px;
  }
}
</style>
