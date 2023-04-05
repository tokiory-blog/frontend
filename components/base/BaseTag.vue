<script lang="ts" setup>
interface Props {
  name: string
}

defineProps<Props>();
</script>

<template>
  <div class="tag">
    <span class="tag__hashtag">#</span>{{name}}
  </div>
</template>

<style lang="scss" scoped>
.tag {
  color: var(--neutral-hover);

  &__hashtag {
    color: var(--neutral);
  }
}
</style>