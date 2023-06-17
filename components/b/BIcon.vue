<template>
  <img
    class="icon"
    :class="{transparent}"
    :src="`/icons/${name}.svg`"
    :alt="`${name} icon`"
  >
</template>

<script setup lang="ts">
interface Props {
  name: string;
  transparent?: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  filter: grayscale(1);
  height: 28px;

  @include adaptive-from-tablet {
    width: 25px;
    height: 25px;
  }

  @include adaptive-from-laptop {
    width: 20px;
    height: 20px;
  }
  
  &.transparent {
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    filter: grayscale(1) invert(1);
  }
}
</style>