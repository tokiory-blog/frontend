<script lang="ts" setup>
const DESCRIPTION = [
  'В данном блоге я рассказываю о том, как сделать мир разработки чуточку проще, объясняю сложные вещи простым ' +
  'языком и просто рассказываю о интересных вещах.',
  'Вы не найдете тут платного контента. Весь контент распространяется по лицензии MIT, вы можете использовать его ' +
  'в своих целях: рефераты, копипасты статей,' +
  '\nписьма друзьям, цитаты, что-угодно. Указывать автора при этом не обязательно.'
];
</script>

<template>
  <div class="description">
    <div class="description__info">
      <p v-for="(line, idx) in DESCRIPTION" :key="idx" class="description__paragraph">
        {{line}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.description {
  
  &__info {
    white-space: pre-wrap;
  }
  
  &__paragraph {
    margin: 8px 0 0;
    line-height: 1.4;
  }
  
}
</style>
