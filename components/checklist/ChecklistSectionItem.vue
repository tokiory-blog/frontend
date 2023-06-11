<template>
  <NuxtLink
    :to="section.url"
    target="_blank"
    class="checklist-item"
  >
    <BCheckbox
      class="checklist-item__checkbox"
      :active="section.done"
    />
    <div class="checklist-item__info">
      <BText class="checklist-item__title">
        {{ section.name }}
      </BText>
      <BText class="checklist-item__description">
        {{ section.description }}
      </BText>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { ChecklistItem } from "@/types/checklist.types";

interface Props {
  section: ChecklistItem
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.checklist-item {
  display: flex;
  gap: 12px;
  @include clear-link;
  
  &__checkbox {
    flex-shrink: 0;
  }
  
  &__title {
    font-weight: 600;
    line-height: 1.3;
    font-size: 18px;
  }
  
  &__description {
    margin-top: 4px;
    opacity: 0.6;
  }
}
</style>