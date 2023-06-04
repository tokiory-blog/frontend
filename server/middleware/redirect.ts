export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  console.log("URL: ", url.pathname);

  // Redirect from old tutorial page
  if (url.pathname.includes("/tutorial/")) {
    const newUrl = url.pathname.replaceAll("/tutorial/", "/article/");
    sendRedirect(event, newUrl, 301);
  }
});
