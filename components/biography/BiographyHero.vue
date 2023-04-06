<script setup>
import { AUTHOR_GITHUB, AUTHOR_NAME_RU, AUTHOR_NICKNAME } from "~/constants/author";
</script>

<template>
  <div class="hero">
    <div class="hero__title">
      Привет!
      Меня зовут
      <span class="hero__gradient-text">
        {{ AUTHOR_NAME_RU.short }}
      </span>
    </div>
    <BiographyDivider
      class="hero__divider"
      emoji="👾"
    />
    <div class="hero__subtitle">
      Вы также можете знать меня под никнеймом
      <BaseLink
        :href="AUTHOR_GITHUB"
        class="hero__gradient-text hero__gradient-text_alt"
      >
        [{{ AUTHOR_NICKNAME }}]
      </BaseLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;

  &__title {
    font-size: 32px;
    font-weight: 700;
    
    @include adaptive-from-tablet {
      font-size: 48px;
    }
    
    @include adaptive-from-laptop {
      font-size: 52px;
    }
  }

  &__divider {
    margin: 16px 0;
  }

  &__gradient-text {
    background-color: #4158d0;
    background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    background-clip: text;
    color: transparent;

    &_alt {
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  }

  &__subtitle {
  }

  &__image {
    display: block;
    max-width: 200px;
    border-radius: 4px;
  }
}
</style>