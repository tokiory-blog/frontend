<script lang="ts" setup>
</script>

<template>
  <div class="not-found">
    <div class="not-found__title">
      Не найдено((
    </div>
    <div class="not-found__ascii">
      <HeroAscii />
    </div>
    <div class="not-found__description">
      К сожалению страница, которую вы запрашиваете не была найдена.<br>
      Попробуйте перезайти по данному адресу позже. Если вы считаете что данная страница должна существовать,
      но ее не существует - напишите письмо
      <BLink href="mailto:tokiory.personal@gmail.com">
        на данную почту
      </BLink>
    </div>
    <BLink
      class="not-found__home"
      href="/"
    >
      Вернуться на главную
    </BLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &__title {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.024em;
  }

  &__description {
    margin-top: 24px;
    text-align: center;
    line-height: 1.5;
  }
  
  &__home {
    margin-top: 32px;
  }
}
</style>