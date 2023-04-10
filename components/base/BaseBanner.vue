<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  src: string;
  tags: string[];
  hasLightShadow?: boolean;
}

const props = defineProps<Props>();

const bannerStyle = computed(() => {
  return {
    backgroundImage: `url(${props.src})`,
  };
});
</script>

<template>
  <div
    class="banner"
    :style="bannerStyle"
    :class="{light: hasLightShadow}"
  >
    <BaseTitle class="banner__title">
      {{ title }}
    </BaseTitle>
    <BaseText class="banner__text">
      {{ description }}
    </BaseText>
    <div class="banner__tags">
      <BaseTag
        v-for="(tag, idx) in tags"
        :key="idx"
        class="banner__tag"
        :name="tag"
        without-tag
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;

  @include adaptive-from-tablet {
    height: 550px;
  }

  display: flex;
  color: var(--color-white);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15% var(--spacing-lg) var(--spacing-lg);
  gap: var(--spacing-md);
  box-shadow: 0px -40px 300px 20px black inset;
  
  &__text {
    text-shadow: 0 1px black;
  }
  
  &.light {
    box-shadow: 0px -40px 300px 20px white inset;
    color: var(--color-black);
  }
  
  &.light &__text {
    text-shadow: 0 1px white;
  }
  
  
  &__tags {
    display: flex;
    gap: 12px;
  }
  
  &__tag {
    @include default-ui-card;
    padding: 4px 12px;
    background-color: var(--background);
    color: var(--foreground);
  }
}
</style>
