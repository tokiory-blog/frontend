<script lang="ts" setup>
import "@cms/usePrelude";
import { SITE_NAME, META_LIST, META_LINK_LIST } from "~/constants/meta";

// Setup meta tags
useHead({
  title: SITE_NAME,
  meta: META_LIST,
  link: META_LINK_LIST,
});

</script>

<template>
  <NuxtLoadingIndicator />
  <BaseHeader />
  <div class="full-layout">
    <slot />
  </div>
  <BaseFooter />
</template>

<style lang="scss" scoped>
.full-layout {
  min-height: calc(100vh - (var(--size-footer) + var(--size-header)));
  font-family: "JetBrains Mono", monospace;
  max-width: 1400px;
  margin: 0 auto;
}
</style>