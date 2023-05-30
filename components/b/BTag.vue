<script lang="ts" setup>
interface Props {
  name: string
  withoutTag?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="tag">
    <div
      v-if="!withoutTag"
      class="tag__hashtag"
    >
      #
    </div>
    {{ name }}
  </div>
</template>

<style lang="scss" scoped>
.tag {
  color: var(--neutral-hover);
  display: flex;

  &__hashtag {
    color: var(--neutral);
  }
}
</style>