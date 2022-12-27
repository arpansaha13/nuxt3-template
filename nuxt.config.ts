// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode'],
  css: ['@unocss/reset/tailwind.css', 'assets/main.css'],
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
})
