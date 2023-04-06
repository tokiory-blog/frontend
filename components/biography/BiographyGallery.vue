<script lang="ts" setup>
const PRINCIPLES = [
  {
    title: "Разработка",
    text: "Я занимаюсь разработкой уже более 3-х лет, в основном специализируюсь во фронтэнд-разработке. " +
      "В данном блоге я наглядно показываю как достигнуть больших результатов за короткий промежуток времени."
  },
  {
    title: "Открытость",
    text: "Внизу вы можете увидеть toml-файл с информацией обо мне, там же есть ссылка на Github, где вы можете" +
      "найти мои пет-проекты, включая данный блог. Также " +
      "внизу приведены ссылки на мои социальные сети, где вы можете написать мне.",
  },
  {
    title: "Знания",
    text: "В моем блоге вы сможете найти туториалы и статьи о самых разнообразных технологиях для веб-разработки. " +
      "Я пишу блог в свободное время и стараюсь делиться теми вещами, которые нашел и проверил на опыте. Именно " +
      "поэтому блог не так уж и часто обновляется",
  },
];
</script>

<template>
  <BaseGallery class="gallery">
    <BaseCard
      v-for="(line, idx) in PRINCIPLES"
      :key="idx"
      has-shadow
      class="gallery__card"
    >
      <BaseSubtitle class="gallery__title">
        {{ line.title }}
      </BaseSubtitle>
      <BaseText class="gallery__text">
        {{ line.text }}
      </BaseText>
    </BaseCard>
  </BaseGallery>
</template>

<style lang="scss" scoped>
.gallery {
  
  &__card {
    width: calc(50% - 16px);
  }
  
  &__text {
    margin-top: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>