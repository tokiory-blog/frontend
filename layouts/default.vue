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
  <div class="standard-layout">
    <slot />
  </div>
  <BFooter />
</template>


<style lang="scss" scoped>
.standard-layout {
  min-height: calc(100vh - var(--size-footer) - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px auto;
  @include container;
  @include font-jetbrains;
  @include default-ui-color;
}
</style>