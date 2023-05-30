<template>
  <div class="devlog-item">
    {{ log }}
  </div>
</template>

<script setup lang="ts">
import { DevlogFrontmatter } from "~/types/devlog.types";

interface Props {
  log: DevlogFrontmatter;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>

</style>