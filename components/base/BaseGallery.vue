<template>
  <div class="gallery">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  @include adaptive-flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
