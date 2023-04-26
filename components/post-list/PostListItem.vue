<script lang="ts" setup>
import { Post } from "@/types/post.types";

interface Props {
  post: Post
}
const props = defineProps<Props>();

const localizedPublicationDate = computed(() =>
  new Date(props.post.publicationDate)
    .toLocaleDateString("ru-RU", { year: "2-digit", day: "2-digit", month: "2-digit" })
);

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
      <div class="post__info">
        <div class="post__date">
          {{ localizedPublicationDate }}
        </div>
        <div class="post__tags">
          <BaseTag
            v-for="(tag, idx) in props.post.tags"
            :key="idx"
            :name="tag"
          />
        </div>
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.post {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover {
    border-color: var(--color-black);
  }

  &__title {
    font-size: var(--fsize-big);
    font-weight: 500;
  }

  &__description {
    margin-top: 4px;
    font-size: var(--fsize-standard);
    line-height: 1.6;
  }
  
  &__date {
    color: var(--neutral-hover)
  }
  
  &__tags {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  &__info {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>