<script setup lang="ts">
interface Props {
  url: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink class="navigation-menu-item" :href="url">
    <BaseCard has-hover>
      <div class="navigation-menu-item__title">
        <slot name="title" />
      </div>
      <div class="navigation-menu-item__description">
        <slot name="description" />
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.navigation-menu-item {
  text-decoration: none;
  color: inherit;
  display: block;

  &__title {
    font-size: 32px;
    font-weight: 500;
  }

  &__description {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>