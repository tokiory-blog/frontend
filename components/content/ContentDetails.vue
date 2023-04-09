<script lang="ts" setup>
interface Props {
  title: string;
}
defineProps<Props>();

</script>
<template>
  <details class="detail">
    <summary class="detail__summary">
      {{ title[0].toUpperCase() + title.slice(1) }}
    </summary>
      <div class="detail__content">
        <slot />
      </div>
  </details>
</template>

<style lang="scss" scoped >
.detail {
  margin: 16px 0 24px ;
  
  &__content {
    @include default-ui-card;
    padding: 4px 12px;
  }
  
  &__summary {
    @include default-ui-card;
    transition: all 200ms ease-in-out;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    padding: 12px 8px 12px 32px;
    margin: 0;
    list-style: none;
    position: relative;

    /* Убираем стандартный маркер Chrome */
    &::-webkit-details-marker {
      display: none
    }
    
    &::before {
      content: '🙈';
      font-size: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
    }
  }
  
  &[open] &__summary {
    margin-bottom: 12px;

    &::before {
      animation: monkey-blink 1s ease-in-out alternate;
    }
  }
  
  &:not([open]) &__summary {
    margin-bottom: 0;
    &::before {
      animation: monkey-blink 1s ease-in-out alternate;
    }
  }
}

</style>
