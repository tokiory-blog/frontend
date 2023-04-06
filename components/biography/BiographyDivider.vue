<script setup lang="ts">
import type { Emoji } from "emoji-type";
interface Props {
  center?: boolean;
  emoji: Emoji;
  amount?: number;
}

const DEFAULT_AMOUNT = 3;

const props = defineProps<Props>();

const getEmojiHTML = () => {
  return `
    <span class="divider__emoji">${ props.emoji }</span>
  `.repeat(props.amount ?? DEFAULT_AMOUNT);
};
</script>

<template>
  <div
    class="divider"
    v-html="getEmojiHTML()"
  />
</template>

<style lang="scss" scoped>
.divider {
  margin: 16px 0;
  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  
  &__emoji {
    
  }
}
</style>
