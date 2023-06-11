<template>
  <div class="checkbox">
    <svg
      v-show="active"
      class="checkbox__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="white"
      fill="none"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  active?: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid var(--neutral-hover);
  background: var(--neutral);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &__icon {
    width: 16px;
    height: 16px;
    stroke: var(--color-blue);
  }
}
</style>
