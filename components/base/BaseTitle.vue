<template>
  <div class="title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  user-select: none;
}

@media screen and (max-width: 420px) {
  .title {
    font-size: 24px;
  }
}
</style>