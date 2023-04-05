<script setup lang="ts">
import NAVIGATION from "@/data/navigation";
</script>

<template>
  <div class="home-page">
    <HeroMain />
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