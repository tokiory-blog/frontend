<script setup lang="ts">
import '@cms/usePrelude';
import { SITE_NAME, META_LIST, META_LINK_LIST } from "~/constants/meta";

useHead({
  title: SITE_NAME,
  meta: META_LIST,
  link: META_LINK_LIST,
});

</script>

<template>
  <div class="standard-layout">
    <slot/>
  </div>
  <BaseFooter />
</template>


<style lang="scss" scoped>
.standard-layout {
  font-family: "JetBrains Mono", monospace;
  min-height: calc(100vh - var(--size-footer));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
}
</style>