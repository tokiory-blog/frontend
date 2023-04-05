<script setup lang="ts">
</script>

<template>
  <div class="hero">
    <div class="hero__text">Станция Киото.</div>
    <HeroAscii class="hero__ascii" />
    <div class="hero__description">
      Место, где можно сесть и почитать о разработке.
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  text-align: center;
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text {
    font-size: 72px;
    font-weight: 500;

    @media screen and (max-width: 425px) {
      font-size: 52px;
    }
  }

  &__description {
    margin-top: 4px;
    font-family: 'JetBrains Mono', Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>