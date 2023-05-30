<template>
  <span class="image">
    <img
      class="image__content"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      @click="isImageViewActive = true"
    >
    <span
      v-if="alt"
      class="image__description"
    >
      {{ alt }}
    </span>
    <teleport to="body">
      <ContentImageZoom
        class="image__view"
        :active="isImageViewActive"
        :src="src"
        :alt="alt"
        @close="isImageViewActive = false"
      />
    </teleport>
  </span>
</template>

<script setup lang="ts">

const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
});

const isImageViewActive = ref(false);
console.log(props.alt);
</script>

<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.image {
  &__content {
    display: block;
    border-radius: 4px;
    width: 100%;
    border: 1px solid var(--neutral);
    cursor: zoom-in;
  }
  
  &__description {
    margin-top: 8px;
    font-size: var(--fsize-sm-plus);
    display: flex;
    justify-content: center;
    color: var(--neutral-hover);
  }
}
</style>