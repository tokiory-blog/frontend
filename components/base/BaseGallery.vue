<template>
  <div class="gallery">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
