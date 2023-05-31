<template>
  <BCard
    has-shadow
    has-hover
    class="devlog-item"
  >
    <div
      class="devlog-item__title"
      v-text="name"
    />
    <div
      class="devlog-item__date"
      v-text="date"
    />
  </BCard>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  publicationDate: string;
}
const props = defineProps<Props>();

const date = computed(() => {
  const date = new Date(props.publicationDate);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
});
</script>

<style lang="scss">
.devlog-item {
  padding: 8px;
  cursor: pointer;
  
  &__title {
    font-weight: 600;
    line-height: 1.5;
  }
  
  &__date {
    color: var(--neutral-hover);
    font-size: 12px;
    margin-top: 4px;
  }
}
</style>