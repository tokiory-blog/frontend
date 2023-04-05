export default defineNuxtConfig({
  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'dark-plus'
    }
  }
});