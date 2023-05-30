<script setup lang="ts">
import { AUTHOR_GITHUB, AUTHOR_NICKNAME } from "~/constants/author";

const author = {
  name: AUTHOR_NICKNAME,
  link: AUTHOR_GITHUB,
};
</script>

<template>
  <footer class="footer">
    <div class="footer__contact contact">
      Made with love by
      <BLink
        is-new-tab
        class="footer__link"
        :href="author.link"
      >
        {{ author.name }}
      </BLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--neutral);
  width: 100%;
  padding: 8px 12px;
  display: flex;
  justify-content: space-evenly;
}
</style>