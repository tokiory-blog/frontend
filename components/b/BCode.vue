<script lang="ts" setup>
import { ShikiParams } from "@cms/useShiki";

// Props
interface Props {
  content: ShikiParams;
  title: string;
}
const props = defineProps<Props>();

// Using shiki for parsing code
const processedCodeHtml = await useShiki({
  ...props.content,
  code: props.content.code.trim()
});

</script>

<template>
  <div class="code">
    <div class="code__header">
      {{ title }}
      <br>
      <span class="code__language">language=[{{ content.language }}]</span>
    </div>
    <div
      class="code__body"
      v-html="processedCodeHtml"
    />
  </div>
</template>

<style lang="scss" scoped>
.code {
  width: 100%;

  &__header {
    border-radius: 4px 4px 0 0;
    padding: 8px 12px;
    border: 1px solid var(--neutral);
    font-size: 12px;
    color: var(--color-blue);
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__language {
    color: var(--color-pink);
  }

  &__body {
    border-radius: 0 0 4px 4px;
    border: 1px solid var(--neutral);
    border-top: none;
    font-size: 13px;
    overflow-x: auto;
  }
}

</style>

<style lang="scss">
.code {
  pre {
    margin: 0;
    background: var(--color-black) !important;
    padding: 12px;

    code {
      font-family: 'JetBrains Mono', monospace;
      line-height: 1.4;

      .line {
        display: initial;
        min-height: initial;
      }
    }
  }
}
</style>
