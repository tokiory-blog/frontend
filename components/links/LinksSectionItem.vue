<script lang="ts" setup>
import type { LinkSectionItem } from "@d/links";

interface Props {
  link: LinkSectionItem
}

defineProps<Props>();
</script>

<template>
  <a
    :href="link.url"
    class="link-item"
    target="_blank"
  >
    <div class="link-item__name">
      {{ link.name }}
    </div>
    <div
      v-if="link?.description"
      class="link-item__description"
    >
      {{ link.description }}
    </div>
  </a>
</template>


<style lang="scss" scoped>
.link-item {
  display: block;
  color: inherit;
  text-decoration: none;

  &__name {
    font-weight: 500;
    font-size: 16px;
    color: var(--link);
  }

  &__description {
    display: block;
    margin-top: 8px;
    font-size: 14px;
  }
}
</style>