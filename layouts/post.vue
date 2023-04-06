<script setup lang="ts">
import '@cms/usePrelude';
import { SITE_NAME, META_LIST, META_LINK_LIST } from "~/constants/meta";

useHead({
  title: SITE_NAME,
  meta: META_LIST,
  link: META_LINK_LIST,
});

</script>

<template>
  <BaseHeader />
  <div class="post-layout">
    <slot/>
  </div>
</template>


<style lang="scss">
.post-layout {
  padding: 20vh 12px;
  max-width: 960px;
  margin: 0 auto;
  font-size: 16px;
}

h1:first-child {
  margin-top: 0;
}

blockquote {
  margin-left: 0;
  padding-left: 36px;
  border-left: 3px solid var(--neutral);
}
table {
  color: var(--foreground);
  background: var(--background);
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
  margin: 1em 0;
  width: 100%;
}
table thead th,
table tfoot th {
  word-wrap: none;
  color: var(--foreground);
  background: var(--background);
}
table caption {
  padding: 0.5em;
}
table th,
table td {
  padding: 0.5em;
  border: 1px solid var(--neutral);
}
h1,
h2,
h3,
h4 {
  position: relative;
  margin: 1.5em 0 0.67em;
  padding-left: 0;
  a {
    color: inherit;
    cursor: initial;
    text-decoration: none;
  }
}
h3 {
  color: inherit;
  font-style: italic;
}
h1::before,
h2::before,
h3::before {
  font-size: 16px;
  position: absolute;
  left: -32px;
  bottom: 50%;
  transform: translateY(50%);
  color: var(--neutral);
  text-transform: uppercase;
}
h1::before {
  content: "h1";
}
h2::before {
  content: "h2";
}
h3::before {
  content: "h3";
  font-style: initial;
}
code {
  font-family: "JetBrains Mono", monospace;
  display: inline-block;
  color: #d35959;
  padding: 2px 4px;
  line-height: 1;
  border-radius: 4px;
  font-size: 13px;
  border: 1px solid var(--neutral);
}
ul {
  list-style-type: disc;
  padding-left: 1.6rem;
}
li:not(:first-child) {
  margin-top: 4px;
}

pre {
  border-radius: 4px;
}

code {
  font-size: 13px;
}

pre code {
  padding: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  line-height: 1.44;
  width: 100%;
  background-color: #1f1f1f;
  overflow-x: auto;
  border: none;
  border-radius: 4px;

  @media (prefers-color-scheme: dark) {
    border: 1px solid var(--neutral);
  }
}

pre code::-webkit-scrollbar-track {
  background-color: transparent;
  position: absolute;
}
pre code::-webkit-scrollbar {
  height: 4px;
  background-color: transparent;
  position: absolute;
}
pre code::-webkit-scrollbar-thumb {
  background-color: #717171;
  position: absolute;
}
a {
  color: var(--link);
  &:hover {
    text-decoration: underline;
  }
}
p {
  line-height: 1.7;
}

li {
  line-height: 1.7;

  & + & {
    margin-top: 12px;
  }
}

li p {
  margin: 0;
}
</style>
