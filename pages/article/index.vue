<script lang="ts" setup>
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/meta";

const PAGE_TITLE = `${SITE_NAME}: Статьи`;

definePageMeta({
  layout: "full"
});

useHead({
    title: PAGE_TITLE
});

useOpenGraph({
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
  gradient: "blue"
});
const COLLECTION = "article";
</script>

<template>
  <div class="article-page">
    <div class="article-page__title">
      <BaseTitle>Статьи</BaseTitle>
    </div>
    <ContentList
      v-slot="{list}"
      :path="COLLECTION"
    >
      <div class="article-page__list">
        <PostList :post-list="list" />
      </div>
    </ContentList>
  </div>
</template>

<style lang="scss" scoped>
.article-page {
  padding: 32px 0;
  &__list {
    margin-top: 32px;
  }
}
</style>