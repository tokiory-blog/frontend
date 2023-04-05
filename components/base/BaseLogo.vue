<template>
  <a class="logo" href="/public">
    <pre class="logo__image">
      {{Logo}}
    </pre>
  </a>
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