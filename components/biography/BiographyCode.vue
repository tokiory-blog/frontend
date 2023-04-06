<script lang="ts" setup>
import { AUTHOR_AGE, AUTHOR_DISCORD, AUTHOR_EMAIL, AUTHOR_GITHUB, AUTHOR_TELEGRAM } from "@/constants/author"

const rawCode =
  `
[person]
name = "Daniil"
surname = "Shilo"
age = ${AUTHOR_AGE}
email = "${AUTHOR_EMAIL}"
github_link = "${AUTHOR_GITHUB}"
telegram_id = "${AUTHOR_TELEGRAM}"
discord_tag = "${AUTHOR_DISCORD}"

[work]
profession = "Web Developer [Full Stack]"
stack = [
  "JS/TS",
  "Vue",
  "React",
  "Astro",
  "Svelte",
  "Go"
]
  `;
</script>

<template>
  <BaseCode
    class="code"
    title="info.toml"
    :content="{
    language: 'toml',
    code: rawCode
  }"
  />
</template>

<style lang="scss" scoped>
.code {
  margin: 32px 0;
}
</style>