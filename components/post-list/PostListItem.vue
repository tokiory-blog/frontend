<script lang="ts" setup>
import { Post } from "@/types/post.types";

interface Props {
  post: Omit<Post,
    '_draft' |
    '_empty' |
    '_extension' |
    '_file' |
    '_id' |
    '_locale' |
    ''
  >
}

const props = defineProps<Props>();
const {_path, description, tags, title} = props.post;
</script>

<template>
  <NuxtLink :href="_path" class="post">
    <BaseCard has-hover>
      <div class="post__title">
        {{ title }}
      </div>
      <div class="post__description">
        {{ description }}
      </div>
      <div class="post__tags">
        <BaseTag
            v-for="(tag, idx) in tags"
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