<template>
  <div class="checklist-section">
    <BTitle
      class="checklist-section__title"
      :level="2"
    >
      {{ section.name }}
    </BTitle>
    <div class="checklist-section__list">
      <ChecklistSectionItem
        v-for="(item, idx) in sortedSection"
        :key="idx"
        class="checklist-section__item"
        :section="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChecklistSection } from "@/types/checklist.types";
import ChecklistSectionItem from "@cmp/checklist/ChecklistSectionItem.vue";

interface Props {
  section: ChecklistSection;
}

const props = defineProps<Props>();

const sortedSection = computed(() => 
  [...props.section.child]
    .sort((a, b) => 
      a.done - b.done
    )
);
</script>

<style lang="scss" scoped>
.checklist-section {
  
  &__list {
    @include default-ui-card;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 18px;
  }
}
</style>