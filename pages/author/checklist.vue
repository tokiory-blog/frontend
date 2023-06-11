<template>
  <div class="checklist-page">
    <BTitle
      :level="1"
      class="checklist-page__title"
    >
      Чеклист
    </BTitle>
    <BText class="checklist-page__description">
      Данная страница содержит все документы/видео/книги/курсы, которые бы я хотел прочитать.
      Каждая единица помеченная галочкой, была пройдена.
    </BText>
    <div class="checklist-page__checklists">
      <ChecklistSection
        v-for="(section, idx) in content.checklist"
        :key="idx"
        class="checklist-page__section"
        :section="section"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SITE_DESCRIPTION, SITE_NAME } from "~/constants/meta";

const PAGE_TITLE = `${SITE_NAME}: Чеклист`;

definePageMeta({
  layout: "full"
});

useHead({ title: PAGE_TITLE });
useOpenGraph({
  gradient: "lime",
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
});

const content = await queryContent("checklist")
  .where({ _type: "yaml" })
  .findOne();
console.log(content);

</script>

<style lang="scss" scoped>
.checklist-page {
  width: 100%;
  padding: 32px 0;
  
  &__checklists {
    margin-top: 14px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    
    @include adaptive-from-tablet {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
    }
  }
  
  &__section {
    margin-top: 12px;
    
    
    @include adaptive-from-tablet {
      flex-basis: calc(50% - 12px);
      flex-wrap: wrap;
    }
  }
}
</style>