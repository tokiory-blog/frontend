<script lang="ts" setup>
import { Post } from "@/types/post.types";

interface Props {
  post: Post
}
const props = defineProps<Props>();

</script>

<template>
  <NuxtLink
    :href="props.post._path"
    class="post"
  >
    <BaseCard has-hover>
      <div class="post__title">
        {{ props.post.title }}
      </div>
      <div class="post__description">
        {{ props.post.description }}
      </div>
      <div class="post__tags">
        <BaseTag
          v-for="(tag, idx) in props.post.tags"
          :key="idx"
          :name="tag"
        />
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.post {
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: var(--color-black);
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__description {
    margin-top: 4px;
    font-size: 14px;
  }

  &__tags {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    justify-content: flex-end;
  }
}
</style>