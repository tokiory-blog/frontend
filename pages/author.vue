<script lang="ts" setup>
definePageMeta({
  layout: "full"
});
</script>

<template>
  <div class="author-page">
    <BiographyHero class="author-page__hero" />
    <BiographyDescription class="author-page__description" />
    <BiographyGallery class="author-page__gallery" />
    <BiographyCode />
  </div>
</template>

<style lang="scss" scoped>
.author-page {
  width: 100%;
  padding-top: 20vh;
  
  &__description {
    margin-top: 64px;
  }
  
  &__gallery {
    margin-top: 32px;
  }
}
</style>
