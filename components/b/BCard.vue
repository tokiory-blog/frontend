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
  @include default-ui-card;
  padding: 12px 24px 18px;
  display: block;
  height: 100%;

  &.hover:hover {
    border-color: var(--neutral-hover);
  }
  
  &.shadow {
    box-shadow: 0px 0px 8px 0px var(--shadow);
  }
}
</style>