<template>
  <div class="devlog-link">
    <BText class="devlog-link__text">
      {{ capitalize(type) }}
    </BText>
    <BIcon
      transparent
      class="devlog-link__icon"
      :name="type"
    />
  </div>
</template>

<script lang="ts" setup>
import { capitalize } from "vue";
import type { DevlogVendor } from "@/types/devlog.types";

interface Props {
  type: DevlogVendor;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.devlog-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 4px 8px;
  background-color: var(--neutral);
  @include default-ui-card;
}
</style>