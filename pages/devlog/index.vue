<script setup lang="ts">
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/meta";
import { DevlogFrontmatter } from "~/types/devlog.types";

const PAGE_TITLE = `${SITE_NAME}: Devlog`;
const COLLECTION = "devlog";

definePageMeta({
  layout: "full"
});

// Meta
useHead({
  title: PAGE_TITLE
});

useOpenGraph({
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
  gradient: "purple"
});

// Content list generation
const fullContentList = await queryContent<DevlogFrontmatter>(COLLECTION).where({ _draft: false }).find();
console.log(fullContentList);
</script>

<template>
  <div class="devlog-page">
    <div class="devlog-page__title">
      <BaseTitle>Devlog</BaseTitle>
    </div>
    <div class="devlog-page__list">
      <DevlogList :list="fullContentList" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.devlog-page {
  padding: 32px 0;

  &__search {
    margin-top: var(--spacing-lg);
  }

  &__list {
    margin-top: 32px;
  }
}
</style>

