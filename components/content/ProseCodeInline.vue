<!-- Code component for markdown content -->
<!-- Info: https://content.nuxtjs.org/api/components/prose -->
<!-- Author: Daniil Shilo <crackidocky@gmail.com -->
<!-- Update: 07 Apr 2023 -->

<script lang="ts">
import { defineComponent } from "#imports";
import { Lang } from "shiki-es";
import { PropType } from "vue";

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String as PropType<Lang>,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
});

</script>

<template>
  <code class="post-inline-code">
    <slot />
  </code>
</template>

<style lang="scss">
.post-inline-code {
  @include font-jetbrains;
  font-size: 13px;
  display: inline-block;
  color: var(--color-red);
  padding: 2px 4px;
  line-height: 1;
  border-radius: 4px;
  border: 1px solid var(--neutral);
}
</style>
