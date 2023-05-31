<template>
  <div class="empty">
    <BTitle :level="1">
      Здесь пока ничего нет =(
    </BTitle>
    <BText>
      Попробуйте перейти сюда позже.
    </BText>
    <BButton @click="router.go(-1)">
      На страницу назад
    </BButton>
  </div>
</template>
<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  transform: translateY(-15%);
}
</style>
