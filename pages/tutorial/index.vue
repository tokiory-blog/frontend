<script lang="ts" setup>
definePageMeta({
  layout: 'full'
});

const COLLECTION = 'tutorial';
</script>

<template>
  <div class="article-page">
    <div class="article-page__title">
      <BaseTitle>Туториалы</BaseTitle>
    </div>
    <ContentList v-slot="{list}" :path="COLLECTION">
      <div class="article-page__list">
        <PostList :postList="list" />
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

---
import PostList from "@@/post/PostList.astro";
import UITitle from "@@/ui/UITitle.astro";
import FullLayout from '@l/FullLayout.astro';
import { getCollection } from "astro:content";

const COLLECTION_SLUG = 'article';

// noinspection TypeScriptValidateTypes
const articles = await getCollection(COLLECTION_SLUG);

const navigationList = articles
.sort((a,b) => {

// Dates
const firstArticleDate = new Date(a.data.publicationDate);
const secondArticleDate = new Date(b.data.publicationDate);

// Debug info
debugDo(() => {
console.group(`Articles Date Sorting [${a.data.title}] and [${b.data.title}]`);
console.log('First Article Date:', firstArticleDate);
console.log('Second Article Date:', secondArticleDate);
console.log('Substraction:', secondArticleDate - firstArticleDate);
console.groupEnd();
});

// Returning substraction for sorting
return secondArticleDate - firstArticleDate;
})
.map(item => {
return {
url: item?.slug ?
`${COLLECTION_SLUG}/${item.slug}` :
'/404',
title: item.data.title,
description: item.data.description,
tags: item.data.tags
}
});
---
