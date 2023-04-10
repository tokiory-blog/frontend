<script lang="ts" setup>
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";
import { SITE_NAME } from "@/constants/meta";

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
  <BaseBanner
    :title="data.title"
    :src="data.banner ?? '#'"
    :description="data.description"
    :tags="data.tags"
  />
  <div class="post-content">
    <BaseHeadingNavigation
      v-if="hasNavigation"
      :content="data"
    />
    <ContentRenderer
      :value="data"
    />
  </div>
</template>

<style lang="scss">
@import "@s/post";

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