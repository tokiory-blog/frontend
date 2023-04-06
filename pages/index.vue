<script setup lang="ts">
import NAVIGATION from "@d/navigation";
</script>

<template>
  <div class="home-page">
    <BaseHero />
    <div class="navigation">
      <NavigationMenu :navigation="NAVIGATION" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navigation {
  margin-top: 32px;
}
</style>