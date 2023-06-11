<script setup lang="ts">
</script>

<template>
  <div class="hero">
    <div class="hero__text">
      Станция Токиори.
    </div>
    <HeroBannerAscii class="hero__ascii" />
    <div class="hero__description">
      Место, где можно сесть и почитать о разработке.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  text-align: center;
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text {
    font-size: var(--fz-h1);
    font-weight: 500;
    
    @include adaptive-from-tablet {
      font-size: 72px;
    }
  }

  &__description {
    margin-top: 4px;
    font-family: 'JetBrains Mono', Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>