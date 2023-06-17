<script setup lang="ts">
</script>

<template>
  <div class="hero">
    <div class="hero__text">
      Станция Токиори.
    </div>
    <BLogo class="hero__logo" />
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
  
  &__logo {
    margin-top: 16px;
    height: 80px;
    @include adaptive-from-tablet {
      height: 120px;
    }
  }

  &__text {
    font-size: var(--fz-h1);
    font-weight: 500;
    
    @include adaptive-from-tablet {
      font-size: 72px;
    }
  }

  &__description {
    margin-top: 16px;
    font-family: 'JetBrains Mono', Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>