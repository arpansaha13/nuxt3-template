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
    '@nuxt/image',

    // https://nuxt.com/modules/icon
    'nuxt-icon',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://nuxt.com/modules/fontaine
    '@nuxtjs/fontaine',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],
  css: ['@unocss/reset/tailwind.css', 'assets/main.css'],
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    options: {
      extends: ['html-validate:document', 'html-validate:recommended', 'html-validate:standard'],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },
})
