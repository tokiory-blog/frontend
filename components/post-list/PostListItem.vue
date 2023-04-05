<script lang="ts" setup>
interface Props {
  _path: string;
  title: string;
  description: string;
  tags: string[];
}

defineProps<Props>();
</script>

<template>
  <a :href="_path" class="post">
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
  </a>
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