<script lang="ts" setup>
import { useScrollLock } from "@cms/useScrollLock";

interface Props {
  src: string;
  alt?: string;
  active: boolean;
}

interface Emits {
  (e: "close"): void
}

const props = defineProps<Props>();
defineEmits<Emits>();

const scrollLock = useScrollLock();

watch(() => props.active, () => {
  if (props.active) {
    scrollLock.lock();
  } else {
    scrollLock.unlock();
  }
});
</script>

<template>
  <div
    v-if="active"
    class="image-view"
    @click="$emit('close')"
  >
    <img
      class="image-view__image"
      :src="src"
      :alt="alt ?? ''"
    >
    <div
      v-if="alt"
      class="image-view__description"
    >
      {{ alt }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-view {
  z-index: 100;
  position: fixed;
  inset: 0;
  background-color: var(--color-black-alpha);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &__image {
    max-width: 90%;
    object-fit: cover;
    border-radius: 4px;
    cursor: zoom-out;
  }
  
  &__description {
    display: flex;
    justify-content: center;
    color: var(--color-white-alpha);
    margin-top: 12px;
    font-size: var(--fsize-md);
  }
}
</style>