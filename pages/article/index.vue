<script lang="ts" setup>
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/meta";
import { Frontmatter } from "@/types/post.types";

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
const fullContentList = await queryContent<Frontmatter>(COLLECTION).where({ _draft: false }).find();
const filteredContentList = computed(() => {
  return searchInput.value.length > 0 ?
    searchResult.value :
    fullContentList.sort((a, b) => {
      const firstPostDate = new Date(a.publicationDate),
        secondPostDate = new Date(b.publicationDate);
      return secondPostDate.getTime() - firstPostDate.getTime();
    });
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