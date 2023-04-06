<script lang="ts" setup>
definePageMeta({
  layout: "full"
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