<template>
  <div class="project">
    <BTitle
      :level="1"
      class="project__title"
    >
      {{ info.name }}
    </BTitle>
    <BText class="project__description">
      {{ info?.fullDescription || info.description }}
    </BText>
    <div class="project__logs">
      <NuxtLink
        v-for="(log, idx) in logs"
        :key="idx"
        :to="log._path"
        class="project__link"
      >
        <DevlogItem
          :name="log.title"
          :publication-date="log.publicationDate"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_NAME } from "@/constants/meta";
import { Frontmatter } from "@/types/post.types";
import { DevlogProject } from "~/types/devlog.types";

const route = useRoute();

// Fetching content navigation
const { data: logs, error: logsError } = await useAsyncData("logs", async () => {
  const navigationQuery = queryContent<Frontmatter>(`devlog/${route.params.id}`)
    .where({ _type: "markdown" })
    .only(["description", "title", "publicationDate", "_path"]);

  return navigationQuery.find();
});

const { data: info, error: infoError } = await useAsyncData("info", async () => {
  return queryContent<DevlogProject>(`devlog/${route.params.id}`)
    .where({ _type: "yaml", title: "Project" })
    .findOne();
});

console.log(logs.value, info.value);

if ([logsError, infoError].some(err => err.value !== null) ||
  logs.value?.length === 0 ||
  !info.value
) {
  navigateTo("/404");
}

definePageMeta({
  layout: "full"
});

useHead({
  title: `${SITE_NAME} — Devlog`,
});

useOpenGraph({
  title: SITE_NAME,
  gradient: "yellow",
});

console.log(route.path);
</script>

<style scoped lang="scss">
.project {
  padding: 32px 0;
  
  &__description {
    margin-top: 16px;
  }
  
  &__link {
    color: inherit;
    text-decoration: none;
  }
  
  &__logs {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>