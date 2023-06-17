<template>
  <NuxtLink
    class="logo"
    href="/"
  >
    <img
      class="logo__image"
      src="/images/logo.png"
      alt="Logo"
    >
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: block;
  height: 48px;
  
  &__image {
    display: block;
    height: 100%;
  }
}
</style>