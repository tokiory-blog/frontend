<script setup lang="ts">
import NAVIGATION from "@d/navigation";
import { SITE_DESCRIPTION, SITE_NAME } from "~/constants/meta";
useOpenGraph({
  gradient: "green",
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
});

const router = useRouter();
</script>

<template>
  <div class="home-page">
    <HeroBanner />
    <div class="navigation">
      <BCard
        v-for="(navItem, idx) in NAVIGATION"
        :key="idx"
        class="navigation__item"
        has-hover
        @click="router.push(navItem.url)"
      >
        <div class="navigation__title">
          {{ navItem.title }}
        </div>
        <div class="navigation__description">
          {{ navItem.description }}
        </div>
      </BCard>
    </div>
  </div>
</template>


<style lang="scss" scoped>
$gap: 16px;
.navigation {
  margin-top: 32px;
  
  &__item {
    height: 100%;
    cursor: pointer;
    
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
  
  &__title {
    font-size: var(--fsize-big);
    font-weight: 500;
  }

  &__description {
    margin-top: 12px;
    font-size: var(--fsize-standard);
    line-height: 1.4;
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    &__item {
      flex-basis: calc(50% - 8px);
      height: 100%;
      
      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }
}
</style>