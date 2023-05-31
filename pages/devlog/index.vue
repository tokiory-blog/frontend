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

const projects = await queryContent<DevlogProject>(COLLECTION)
  .where({ _type: "yaml", _partial: true, title: "Project" })
  .find()
  .then(projects => 
    projects.map(project => ({
      ...project,
      path: `/${project._file.split("/").slice(0, -1).join("/")}`
    }))
  );

console.log(projects);
</script>

<template>
  <div class="devlog-page">
    <div class="devlog-page__title">
      <BTitle :level="1">
        Девлог
      </BTitle>
    </div>
    <div class="devlog-page__list">
      <NuxtLink
        v-for="project in projects"
        :key="project.url"
        :href="project.path"
        class="devlog-page__link"
      >
        <DevlogProject
          class="devlog-page__project"
          :project="project"
        />
      </NuxtLink>
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
  
  &__link {
    flex-basis: calc(50% - 8px);
    flex-grow: 1;
    color: inherit;
    text-decoration: none;
  }
}
</style>

