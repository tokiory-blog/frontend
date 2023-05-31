<script lang="ts" setup>
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";
import { SITE_NAME } from "~/constants/meta";
import ContentEmpty from "@cmp/content/ContentEmpty.vue";

const route = useRoute();
const { data, error } = await useAsyncData<MarkdownParsedContent>("post", () => queryContent(route.path).findOne());

console.log(data.value.body.children);

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
        :title="data.title"
        :src="data.banner ?? '#'"
        :description="data.description"
        :tags="data.tags"
      />
      <div class="post-content">
        <ContentNavigation
          v-if="hasNavigation"
          :content="data"
        />
        <ContentRenderer
          :value="data"
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
  font-size: var(--fsize-standard);
  padding: 20vh 12px;
}
</style>