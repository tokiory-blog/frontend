---
title: Редирект на Nuxt 3
tags:
  - nuxt
  - devnote
publicationDate: 04 Jun 2023
---

Недавно деприкейтнул страницу в блоге со слагом `/tutorial`. Так как менять все ссылки на данный раздел было впадлу (да и не целесообразно это, ломать обратную совместимость), искал как сделать редирект.

Кроме как сделать middleware, для того чтобы редиректить пользователя еще на этапе обработки запроса сервером, хороших вариантов не было.

```ts [server/middleware/redirect.ts]
export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  console.log("URL: ", url.pathname);

  // Redirect from old tutorial page
  if (url.pathname.includes("/tutorial/")) {
    const newUrl = url.pathname.replaceAll("/tutorial/", "/article/");
    sendRedirect(event, newUrl, 301);
  }
});
```
