<script lang="ts" setup>
interface Props {
  hasHover?: boolean;
  hasShadow?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="{hover: hasHover, shadow: hasShadow}"
    class="card"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 12px 24px 18px;
  border: 1px solid var(--neutral);
  border-radius: 4px;
  transition: all .2s ease-in-out;
  text-decoration: none;
  color: inherit;
  display: block;
  user-select: none;

  &.hover:hover {
    border-color: var(--neutral-hover);
  }
  
  &.shadow {
    box-shadow: 0px 0px 8px 0px var(--shadow);
  }
}
</style>