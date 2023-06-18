<template>
  <div
    class="title"
    :class="{[`title_${level}`]: level}"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  level?: 1 | 2 | 3;
}

withDefaults(defineProps<Props>(), {
  level: 1,
});
</script>

<style lang="scss" scoped>
.title {
  user-select: none;
  
  &_1 {
    font-size: var(--fz-h1);
    font-weight: 500;
  }
  
  &_2 {
    font-size: var(--fz-h2);
    font-weight: 500;
  }
  
  &_3 {
    font-size: var(--fz-h3);
    font-weight: 500;
  }
}
</style>