<script lang="ts" setup>
import { Emoji } from "emoji-type";

interface Props {
  title: string;
  emoji?: Emoji;
}
defineProps<Props>();

</script>
<template>
  <details class="detail">
    <summary class="detail__summary">
      {{ emoji ?? '' }} {{ title[0].toUpperCase() + title.slice(1) }}
    </summary>
    <div class="detail__content">
      <slot />
    </div>
  </details>
</template>

<style lang="scss" scoped>
.detail {
  margin: 16px 0 24px ;
  
  &__content {
    @include default-ui-card;
    border-top: none;
    border-radius: 0 0 var(--border-radius-200) var(--border-radius-200);
    padding: 4px 12px;
  }
  
  &__summary {
    @include default-ui-card;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    padding: 12px;
    margin: 0;
    list-style: none;
    position: relative;

    /* Убираем стандартный маркер Chrome */
    &::-webkit-details-marker {
      display: none
    }
  }
}

</style>
