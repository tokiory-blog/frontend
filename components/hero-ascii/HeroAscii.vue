<script lang="ts" setup>
import { LOGO_FRAMES } from "@/constants/logo";
import { onMounted, onUnmounted, ref } from "vue";

let intervalId: ReturnType<typeof setInterval> | number = -1;
const ANIMATION_FRAME_DURATION = 500; // Duration of one frame in MS
const currentSlideIndex = ref(0);

const nextSlide = () => {
  if (currentSlideIndex.value !== LOGO_FRAMES.length - 1) {
    currentSlideIndex.value += 1;
  } else {
    currentSlideIndex.value = 0;
  }
};

onMounted(() => {
  if (intervalId !== -1) {
    return;
  }

  intervalId = setInterval(() => {
    nextSlide();
  }, ANIMATION_FRAME_DURATION);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>


<template>
  <pre class="hero-ascii">
      {{ LOGO_FRAMES[currentSlideIndex] }}
    </pre>
</template>


<style lang="scss" scoped>
.hero-ascii {
  text-align: left;
  font-size: 8px;

  @media screen and (max-width: 425px) {
    font-size: 6px;
  }
}
</style>