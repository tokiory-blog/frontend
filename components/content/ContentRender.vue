<script lang="ts" setup>
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";
import { SITE_NAME } from "~/constants/meta";
import ContentEmpty from "@cmp/content/ContentEmpty.vue";

const route = useRoute();
const { data, error } = await useAsyncData<MarkdownParsedContent>("post", () => queryContent(route.path).findOne());

interface Props {
  hasNavigation?: boolean;
}
defineProps<Props>();


if (error.value !== null) {
  navigateTo("/404");
}

useHead({
  title: `${SITE_NAME} — ${data.value.title}`,
  description: data.value.description
});

useOpenGraph({
  title: SITE_NAME,
  subtitle: data.value.title,
  gradient: "pink",
});

</script>

<template>
  <div
    class="content"
    :class="{empty: !data.body.children.length}"
  >
    <ContentEmpty v-if="!data.body.children.length" />
    <div
      v-else
      class="content__render"
    >
      <ContentBanner
        v-if="data.banner"
        :title="data.title"
        :src="data.banner ?? '#'"
        :description="data.description"
        :tags="data.tags"
      />
      <div class="post-content">
        <BTitle v-if="!data.banner">
          {{ data.title }}
        </BTitle>
        <ContentNavigation
          v-if="hasNavigation"
          :content="data"
        />
        <ContentRenderer
          :value="data"
        />
        <ContentReferences
          v-if="data.references"
          :references="data.references"
          class="post-content__references"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@s/post";

.content.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--size-header));
}

.post-content {
  margin-top: 64px;
  @include sm-container;
  @include center-container;
  @include font-manrope;
  @include default-ui-color;
  font-size: var(--fz-text);
  padding: 20vh 12px;
  
  &__references {
    margin-top: 36px;
  }
}
</style>