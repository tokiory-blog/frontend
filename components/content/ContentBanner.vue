<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  src: string;
  tags: string[];
  hasLightShadow?: boolean;
}

const props = defineProps<Props>();

const bannerStyle = ref<Partial<CSSStyleDeclaration>>({});

// Lazy load for banner
const isLoading = ref(true);
onMounted(async () => {
  const backgroundResponse = await fetch(props.src);
  const imageBlob = await backgroundResponse.blob();

  const file = new FileReader();
  file.readAsDataURL(imageBlob);
  
  const setBackground = () => {
    bannerStyle.value.backgroundImage = `url(${file.result})` || "";
    isLoading.value = false;
  };

  file.onloadend = () => {
    setBackground();
  };
});
</script>

<template>
  <div
    class="banner"
    :style="bannerStyle"
    :class="{light: hasLightShadow}"
  >
    <BTitle
      :level="1"
      class="banner__title"
    >
      {{ title }}
    </BTitle>
    <BText class="banner__text">
      {{ description }}
    </BText>
    <div class="banner__tags">
      <BTag
        v-for="(tag, idx) in tags"
        :key="idx"
        class="banner__tag"
        :name="tag"
        without-tag
      />
    </div>
    <BLoader
      v-show="isLoading"
      class="banner__spinner"
      :width="52"
      :height="52"
      color="var(--foreground)"
    />
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
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
  box-shadow: inset 0px -220px 120px -12px rgba(0,0,0,.7);
  
  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &__text {
    text-shadow: 0 1px black;
  }
  
  &.light {
    box-shadow: inset 0px -220px 120px -12px rgba(255,255,255,.7);
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
