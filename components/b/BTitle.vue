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
  level: 1 | 2;
}

withDefaults(defineProps<Props>(), {
  level: 1,
});
</script>

<style lang="scss" scoped>
.title {
  user-select: none;
  
  &_1 {
    font-size: 32px;
    font-weight: 500;
  }
  
  &_2 {
    font-size: 24px;
    font-weight: 500;
  }
}

@media screen and (max-width: 420px) {
  .title {
    &_1 {
      font-size: 24px;
    }
  }
}
</style>