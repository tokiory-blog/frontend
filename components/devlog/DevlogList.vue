<template>
  <ul class="devlog-list">
    <li
      v-for="(log, idx) in list"
      :key="idx"
      class="devlog-list__item"
    >
      <DevlogListItem :log="log" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { DevlogFrontmatter } from "~/types/devlog.types";

interface Props {
  list: DevlogFrontmatter[];
}

defineProps<Props>();
</script>

<style scoped lang="scss">
  .devlog-list {
    @include clear-list;
  }
</style>