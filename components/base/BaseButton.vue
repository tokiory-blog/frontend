<template>
  <button
    class="button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include default-ui-card;
  display: block;
  background: var(--background);
  padding: 6px 12px;
  cursor: pointer;
  
  &:focus {
    outline: 1px var(--link);
  }

  &:hover {
    opacity: .7;
  }
}
</style>