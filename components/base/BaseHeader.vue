<script lang="ts" setup>
import NAVIGATION from "@d/navigation";
import { REPO_GITHUB } from "@/constants/author";

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
      <NuxtLink :to="REPO_GITHUB">
        <img
          class="navigation__github"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="Github icon"
        >
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background: var(--background-alpha);
  backdrop-filter: saturate(20%) blur(10px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--size-header);
  padding: 0 24px;
}

.navigation {
  display: none;
  
  @include adaptive-from-tablet {
    display: flex;
    gap: 20px;
  }
  
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__github {
    opacity: 0.5;
    cursor: pointer;
    
    @include adaptive-from-tablet {
      width: 25px;
    }
    
    @include adaptive-from-laptop {
      width: 20px;
    }
    
    &:hover {
      opacity: 0.7;
    }
    
    @media (prefers-color-scheme: dark) {
      filter: contrast(0);
    }
  }

  &__item {
    margin: 0 !important;
  }
}
</style>