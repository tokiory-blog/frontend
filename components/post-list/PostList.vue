<script lang="ts" setup>
import { Post } from "@/types/post.types";
interface Props {
  postList: Post[];
}

defineProps<Props>();
</script>

<template>

  <ul class="post-list">
    <li v-for="(post, idx) in postList" :key="idx" class="post-list__item">
      <PostListItem :post="post"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.post-list {
  list-style: none;
  padding: 0;

  &__item + &__item {
    margin-top: 12px;
  }
}
</style>