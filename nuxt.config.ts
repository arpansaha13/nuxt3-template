// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://ui.nuxt.com/
    '@nuxt/ui',

    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://pinia.vuejs.org/
    '@pinia/nuxt',

    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://image.nuxt.com
    '@nuxt/image',

    // https://eslint.nuxt.com/
    '@nuxt/eslint',

    // https://nuxt.com/docs/getting-started/testing
    '@nuxt/test-utils/module',

    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],

  srcDir: 'src/',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/css/main.css'],

  headlessui: {
    prefix: '',
  },

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
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
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

  compatibilityDate: '2025-03-15',
})