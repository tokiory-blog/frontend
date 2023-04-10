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
      default: "text"
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
  <div class="post-formatted-code">
    <div class="post-formatted-code__header">
      <div class="post-formatted-code__filename">
        {{ filename }}
      </div>
      <div class="post-formatted-code__description">
        {{ meta }}
      </div>
      <span class="post-formatted-code__language">Language: {{ language.toUpperCase() }}</span>
    </div>
    <div class="post-formatted-code__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.post-formatted-code {
  width: 100%;
  margin: 12px 0 24px;
  @include font-jetbrains;
  line-height: 1.6;
  overflow-x: auto;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 4px 4px 0 0;
    padding: 8px 12px;
    border: 1px solid var(--neutral);
    font-size: 12px;
    user-select: none;
  }
  
  &__filename {
    color: var(--color-blue);
    margin-right: auto;
  }

  &__language {
    color: var(--color-pink);
    margin-left: auto;
  }
  
  &__description {
    color: var(--color-neutral-7);
    font-size: 10px;
    text-align: center;
    margin: auto;
  }

  pre {
    font-size: 13px;
    margin: 0;
    padding: 12px;
    background-color: var(--color-black);
    border: 1px solid var(--neutral);
    border-top: none;
    border-radius: 0 0 4px 4px;

    code {
      @include font-jetbrains;
      &::-webkit-scrollbar-track {
        background-color: transparent;
        position: absolute;
      }

      &::-webkit-scrollbar {
        height: 4px;
        background-color: transparent;
        position: absolute;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #717171;
        position: absolute;
      }
    }
  }
}
</style>
