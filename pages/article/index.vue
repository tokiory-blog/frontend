<script lang="ts" setup>
import { Frontmatter } from "@/types/post.types";
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
      <BTitle :level="1">
        Статьи
      </BTitle>
    </div>
    <BSearch
      v-model="searchInput"
      class="article-page__search"
      :is-loading="isLoading"
      placeholder="Найти статьи по названию, описанию, тегам"
    />
    <div class="article-page__list">
      <BPost
        v-for="(post, idx) in filteredContentList"
        :key="idx"
        class="article-page__post"
        :post="post"
      />
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
  
  &__post:not(:first-child) {
    margin-top: 16px;
  }
}
</style>