<template>
  <div class="technology-section">
    <BTitle
      class="technology-section__title"
      :level="2"
    >
      {{ technologies.name }}
    </BTitle>
    <div class="technology-section__list">
      <LinksTechnologyItem
        v-for="(technology, idx) in technologies.child"
        :key="idx"
        class="technology-section__item"
        :technology="technology"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LinksTechnologyItem from "@cmp/links/LinksTechnologyItem.vue";
import { TechnologySection } from "@/types/links.types";

interface Props {
  technologies: TechnologySection;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>

.technology-section {
  margin: 18px 0;
  
  &__title + &__list {
    margin-top: 18px;
  }
  
  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}
</style>