<script lang="ts" setup>
import type { LinkSection } from "@d/links";

interface Props {
  section: LinkSection
}

defineProps<Props>();
</script>

<template>
  <div class="link-section">
    <div class="link-section__title">
      <BTitle :level="2">
        {{ section.name }}
      </BTitle>
    </div>
    <ul class="link-section__list">
      <li
        v-for="(child, idx) in section.child"
        :key="idx"
        class="link-section__item"
      >
        <LinksSectionItem :link="child" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.link-section {
  &__title {
    margin-top: 24px;
  }

  &__list {
    list-style: none;
    padding-left: 1.5rem;
    margin-top: 18px;
  }

  &__item {
    position: relative;

    &:not(:first-child) {
      margin-top: 12px;
    }

    &::before {
      content: '—';
      position: absolute;
      top: 50%;
      left: -1rem;
      transform: translateY(-50%);
    }
  }
}
</style>