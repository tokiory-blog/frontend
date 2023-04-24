<template>
  <Teleport to="body">
    <div
      :style="{
        animationDuration: duration
      }"
      class="notification-popover"
    >
      <div class="notification-popover__content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
  interface Props {
    animationDuration: number;
  }
  const props = defineProps<Props>();
  const duration = computed(() => props.animationDuration
    .toString()
    .concat("ms")
  );
</script>

<style lang="scss" scoped>
.notification-popover {
  @include default-ui-card;
  background-color: var(--background);
  padding: 12px 32px;
  position: fixed;
  bottom: 20%;
  left: 50%;
  transition: opacity 500ms ease-in-out;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 10px 70px 10px var(--shadow);
  animation-name: blink-reverse;
  animation-timing-function: cubic-bezier(0.1, 0.83, 0.57, 1.04);
}
</style>