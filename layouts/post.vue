<script setup lang="ts">
import "@cms/usePrelude";
import { SITE_NAME, META_LIST, META_LINK_LIST } from "~/constants/meta";

useHead({
  title: SITE_NAME,
  meta: META_LIST,
  link: META_LINK_LIST,
});

</script>

<template>
  <NuxtLoadingIndicator />
  <BHeader />
  <div class="post-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.post-layout {
  overflow-x: hidden;
}
</style>