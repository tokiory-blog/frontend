<script lang="ts" setup>
import NAVIGATION from '@/data/navigation';

const route = useRoute();

const isLinkActive = (url: string): boolean => {
  return route.path.endsWith(url);
};
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <BaseLogo/>
    </div>
    <nav class="header__navigation navigation">
      <ul class="navigation__list">
        <li v-for="(navigationItem, idx) in NAVIGATION" :key="idx" class="navigation__item">
          <BaseLink
            :href="navigationItem.url"
            :isActive="isLinkActive(navigationItem.url)"
            class="navigation__link"
          >
            {{ navigationItem.title }}
          </BaseLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--size-header);
  padding: 0 24px;
}

.navigation {
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__item {
    margin: 0 !important;
  }
}
</style>