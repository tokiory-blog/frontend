<template>
  <div class="references">
    <BTitle class="references__title">
      Референсы
    </BTitle>
    <div class="references__list">
      <BLink
        v-for="(reference, idx) in references"
        :key="idx"
        class="references__item"
        :href="reference.url"
        is-new-tab
      >
        <BCard
          has-hover
          class="references__card"
        >
          <span class="references__anchor">🔗</span>{{ reference.name }}
        </BCard>
      </BLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Post } from "@/types/post.types";

interface Props {
  references: Required<Post>["references"]
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.references {
  &__title {
    text-align: center;
    color: var(--neutral);
  }
  
  &__list {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  &__card {
    display: flex;
    gap: 8px;
  }
}
</style>