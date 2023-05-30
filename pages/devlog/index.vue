<script setup lang="ts">
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/meta";
import type { DevlogProject } from "@/types/devlog.types";

const PAGE_TITLE = `${SITE_NAME}: Devlog`;
const COLLECTION = "devlog";

definePageMeta({
  layout: "full"
});

// Meta
useHead({
  title: PAGE_TITLE
});

useOpenGraph({
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
  gradient: "rainbow"
});

const { projects } = await queryContent<{projects: DevlogProject[]}>(COLLECTION).where({
  _file: "devlog/projects.yml",
}).findOne();

</script>

<template>
  <div class="devlog-page">
    <div class="devlog-page__title">
      <BTitle :level="1">
        Девлог
      </BTitle>
    </div>
    <div class="devlog-page__list">
      <DevlogProject
        v-for="project in projects"
        :key="project.url"
        class="devlog-page__project"
        :project="project"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.devlog-page {
  padding: 32px 0;

  &__search {
    margin-top: var(--spacing-lg);
  }

  &__list {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  &__project {
    flex-basis: calc(50% - 8px);
    flex-grow: 1;
  }
}
</style>

