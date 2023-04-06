<template>
  <NuxtLink class="logo" href="/">
    <pre class="logo__image">
      {{Logo}}
    </pre>
  </NuxtLink>
</template>

<script lang="ts" setup>
import Logo from "~/constants/logo";
</script>

<style lang="scss" scoped>
.logo {
  font-size: 6px;
  text-decoration: none;
  color: inherit;
}
</style>