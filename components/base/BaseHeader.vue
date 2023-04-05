<script lang="ts" setup>
const navigation = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Статьи',
    link: '/article',
  },
  {
    title: 'Туториалы',
    link: '/tutorial',
  },
  {
    title: 'Об авторе',
    link: '/author',
  },
];

const isLinkActive = (url: string): boolean => {
  return location.pathname.endsWith(url);
};
</script>

<template>
  <ClientOnly>
    <header class="header">
      <div class="header__logo">
        <BaseLogo/>
      </div>
      <nav class="header__navigation navigation">
        <ul class="navigation__list">
          <li v-for="(navigationItem, idx) in navigation" :key="idx" class="navigation__item">
            <BaseLink
                :href="navigationItem.link"
                :isActive="isLinkActive(navigationItem.link)"
                class="navigation__link"
            >
              {{ navigationItem.title }}
            </BaseLink>
          </li>
        </ul>
      </nav>
    </header>
  </ClientOnly>
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