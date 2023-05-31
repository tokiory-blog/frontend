<script lang="ts" setup>
import NAVIGATION from "@d/navigation";
import { REPO_GITHUB, TELEGRAM_PUBLIC } from "~/constants/author";

const route = useRoute();

const isLinkActive = (url: string): boolean => {
  return route.path.endsWith(url);
};
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <BLogo />
    </div>
    <nav class="header__navigation navigation">
      <ul class="navigation__list">
        <li
          v-for="(navigationItem, idx) in NAVIGATION"
          :key="idx"
          class="navigation__item"
        >
          <BLink
            :href="navigationItem.url"
            :is-active="isLinkActive(navigationItem.url)"
            class="navigation__link"
          >
            {{ navigationItem.title }}
          </BLink>
        </li>
      </ul>
      <NuxtLink
        target="_blank"
        :to="REPO_GITHUB"
      >
        <BIcon
          name="github"
          transparent
        />
      </NuxtLink>
      <NuxtLink
        target="_blank"
        :to="TELEGRAM_PUBLIC"
      >
        <BIcon
          transparent
          name="telegram"
        />
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
}
</style>