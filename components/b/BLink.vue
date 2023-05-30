<script lang="ts" setup>
interface Props {
  isNewTab?: boolean;
  isActive?: boolean;
  href: string;
}

const props = defineProps<Props>();
const target = computed(() =>
  props.isNewTab ? "_blank" : "_self"
);
</script>

<template>
  <NuxtLink
    :class="{link_active: isActive}"
    :href="href"
    :target="target"
    class="link"
  >
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: var(--link);
  user-select: none;

  &:hover {
    opacity: 0.9;
  }

  &_active {
    text-decoration: line-through;
    pointer-events: none;
  }
}
</style>