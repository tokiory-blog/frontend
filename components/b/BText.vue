<template>
  <div class="text">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text {
  font-size: var(--fz-text);
  font-weight: 400;
  font-family: "Manrope", sans-serif;
  line-height: 1.6;
  white-space: pre-line;
}
</style>