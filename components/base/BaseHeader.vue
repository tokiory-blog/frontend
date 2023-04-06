<script lang="ts" setup>
import NAVIGATION from "@d/navigation";

const route = useRoute();

const isLinkActive = (url: string): boolean => {
  return route.path.endsWith(url);
};
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <base-logo />
    </div>
    <nav class="header__navigation navigation">
      <ul class="navigation__list">
        <li
          v-for="(navigationItem, idx) in NAVIGATION"
          :key="idx"
          class="navigation__item"
        >
          <base-link
            :href="navigationItem.url"
            :is-active="isLinkActive(navigationItem.url)"
            class="navigation__link"
          >
            {{ navigationItem.title }}
          </base-link>
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
  display: none;
  
  @include adaptive-from-tablet {
    display: block;
  }
  
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