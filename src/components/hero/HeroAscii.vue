<template>
    <pre class="hero-ascii">
      {{ slideList[currentSlideIndex] }}
    </pre>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

let intervalId = -1;
const ANIMATION_FRAME_DURATION = 500; // Duration of one frame in MS
const currentSlideIndex = ref(0);
const slideList = [
  `
          . . o x o x o x o . . .
         o      _____            _______________ ___=====__T___
       .][__n_n_|DD[  ====_____  |    |.\\/.|   | |   |_|     |_
      >(________|__|_[_________]_|____|_/\\_|___|_|___________|_|
      _/oo OOOOO oo\`  ooo   ooo   o^o       o^o   o^o     o^o
-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
  `,
  `
          o x o x o x o . . . . .
         o      _____            _______________ ___=====__T___
       .][__n_n_|DD[  ====_____  |    |.\\/.|   | |   |_|     |_
      >(________|__|_[_________]_|____|_/\\_|___|_|___________|_|
      _/oo OOOOO oo\`  ooo   ooo   o^o       o^o   o^o     o^o
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  `,
];

const nextSlide = () => {
  if (currentSlideIndex.value !== slideList.length - 1) {
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
    console.log('now');
    nextSlide();
  }, ANIMATION_FRAME_DURATION);
});

onUnmounted(() => {
  clearInterval(intervalId);
})


</script>

<style lang="scss" scoped>
.hero-ascii {
  text-align: left;
  font-size: 8px;

  @media screen and (max-width: 425px) {
    font-size: 6px;
  }
}
</style>