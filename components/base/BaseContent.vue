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
  description: data.value.description.split(".")[0],
  subtitle: data.value.title,
  gradient: "red",
});

</script>

<template>
  <BaseHeadingNavigation
    v-if="hasNavigation"
    :content="data"
  />
  <ContentRenderer
    class="post-content"
    :value="data"
  />
</template>

<style lang="scss" scoped>
.post-content {
  margin-top: 64px;
}
</style>