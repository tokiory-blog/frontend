<template>
  <NuxtLink
    :to="technology.url"
    class="technology"
  >
    <img
      :src="technology.icon"
      :alt="technology.name"
      class="technology__icon"
      loading="lazy"
    >
    <div class="technology__info info">
      <BText class="info__name">
        {{ technology.name }}
      </BText>
      <BText class="info__description">
        {{ technology.description }}
      </BText>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { TechnologyItem } from "@/types/links.types";

interface Props {
  technology: TechnologyItem;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.technology {
  @include clear-link;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
  &__icon {
    padding-top: 2px;
    width: 24px;
  }
}

.info {
  &__name {
    font-weight: 600;
    line-height: 1;
  }
  
  &__description {
    margin-top: 4px;
  }
}
</style>