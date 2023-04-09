<script setup lang="ts">
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

interface Props {
  content: MarkdownParsedContent;
}
const props = defineProps<Props>();
const navigationList = useContentNavigation(props.content.body, [1, 2]);


// Locale Storage navigation entries
// Used in order to show in navigation where the user was the last time
const route = useRoute();
const localStorageKey = `CN:${route.path}`;
const lastEntryUrl = ref("");
const loadStorageLastEntry = () => {
  return localStorage.getItem(localStorageKey) ?? "";
};

const saveStorageLastEntry = (id: string) => {
  localStorage.setItem(localStorageKey, id);
};

onMounted(() => {
  lastEntryUrl.value = loadStorageLastEntry();
});
</script>

<template>
  <div class="navigation">
    <BaseTitle class="navigation__title">
      Навигация
    </BaseTitle>
    <ul class="navigation__list">
      <li
        v-for="(navigationItem, idx) in navigationList"
        :key="idx"
        :class="`navigation__item navigation__item_${navigationItem.level}`"
      >
        <BaseLink
          :href="navigationItem.url"
          class="navigation__link"
          @click="saveStorageLastEntry(navigationItem.url)"
        >
          {{ navigationItem.title }}
        </BaseLink>
        <div
          v-if="navigationItem.url === lastEntryUrl"
          class="navigation__note"
        >
          &lt;- В последний раз вы были здесь
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  font-size: 16px;
  
  &__note {
    font-style: italic;
    font-weight: 500;
  }
  
  &__item {
    font-weight: 600;
    display: flex;
    gap: 12px;
    
    &:not(:first-child) {
      margin-top: 8px;
    }
    
    &_2 {
      padding-left: var(--spacing-md);
    }
  }
  
  &__list {
    @include clear-list;
  }
}
</style>