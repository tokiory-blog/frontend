<script lang="ts" setup>
const PRINCIPLES = [
  {
    title: "Разработка",
    text: "Я занимаюсь разработкой уже более 3-х лет, в основном специализируюсь во фронтэнд-разработке. " +
      "В данном блоге я наглядно показываю как достигнуть больших результатов за короткий промежуток времени.",
    url: "/devlog"
  },
  {
    title: "Открытость",
    text: "Внизу вы можете увидеть toml-файл с информацией обо мне, там же есть ссылка на Github, где вы можете" +
      " найти мои пет-проекты, включая данный блог. Также " +
      "внизу приведены ссылки на мои социальные сети, где вы можете написать мне.",
    url: "/author/checklist"
  },
  {
    title: "Знания",
    text: "В моем блоге вы сможете найти туториалы и статьи о самых разнообразных технологиях для веб-разработки. " +
      "Я пишу блог в свободное время и стараюсь делиться теми вещами, которые нашел и проверил на опыте. Именно " +
      "поэтому блог не так уж и часто обновляется",
    url: "/article"
  },
];
</script>

<template>
  <div class="gallery">
    <NuxtLink
      v-for="(line, idx) in PRINCIPLES"
      :key="idx"
      class="gallery__link"
      :to="line?.url"
    >
      <BCard
        class="gallery__card"
        has-shadow
      >
        <BTitle
          level="2"
          class="gallery__title"
        >
          {{ line.title }}
        </BTitle>
        <BText class="gallery__text">
          {{ line.text }}
        </BText>
      </BCard>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  @include adaptive-flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  
  &__link {
    display: block;
    @include clear-link;
    width: 100%;
  }

  &__card {
    width: 100%;
  }

  &__text {
    margin-top: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.4;
  }
}

// Tablet styles
@media screen and (min-width: $bp-tablet) {
  .gallery {
    &__link {
      width: calc(50% - 16px);
    }
  }
}
</style>