<script lang="ts" setup>
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/meta";

const PAGE_TITLE = `${SITE_NAME}: Статьи`;
const COLLECTION = "article";

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

// Search
const { searchResult, searchInput, isLoading } = useContentSearch(COLLECTION);

// Content list generation
const fullContentList = await queryContent(COLLECTION).find();
const filteredContentList = computed(() => {
  return searchInput.value.length > 0 ?
    searchResult.value :
    fullContentList;
});
</script>

<template>
  <div class="article-page">
    <div class="article-page__title">
      <BaseTitle>Статьи</BaseTitle>
    </div>
    <BaseSearch
      v-model="searchInput"
      class="article-page__search"
      :is-loading="isLoading"
      placeholder="Найти статьи по названию, описанию, тегам"
    />
    <div class="article-page__list">
      <PostList :post-list="filteredContentList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-page {
  padding: 32px 0;
  
  &__search {
    margin-top: var(--spacing-lg);
  }
  
  &__list {
    margin-top: 32px;
  }
}
</style>