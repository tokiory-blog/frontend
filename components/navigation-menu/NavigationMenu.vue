<script lang="ts" setup>
interface Props {
  navigation: {
    title: string,
    description: string,
    url: string
  }[],
}

defineProps<Props>();
</script>

<template>
  <div class="navigation-menu">
    <div v-for="(item, idx) in navigation" :key="idx" class="navigation-menu__item">
      <NavigationMenuItem :url="item.url">
        <template #title>{{item.title}}</template>
        <template #description>{{item.description}}</template>
      </NavigationMenuItem>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navigation-menu {
  display: block;

  &__item:not(:first-child) {
    margin-top: 12px;
  }
}

@media screen and (min-width: 768px) {
  .navigation-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    &__item:not(:first-child) {
      margin-top: 0;
    }
  }

}
</style>