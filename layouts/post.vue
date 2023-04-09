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
  <BaseHeader />
  <div class="post-layout">
    <slot />
  </div>
</template>


<style lang="scss">
@import "@s/post";
.post-layout {
  @include sm-container;
  @include center-container;
  @include font-manrope;
  @include default-ui-color;
  font-size: var(--fsize-standard);
  padding: 20vh 12px;
}

</style>
