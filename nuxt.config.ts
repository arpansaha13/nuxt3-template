// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',

    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',

    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n',

    // https://v1.image.nuxtjs.org/
    '@nuxt/image-edge',

    // https://nuxt.com/modules/icon
    'nuxt-icon',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://nuxt.com/modules/fontaine
    '@nuxtjs/fontaine',
  ],
  css: ['@unocss/reset/tailwind.css', 'assets/main.css'],
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
})
