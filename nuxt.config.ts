// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',

    // https://ui.nuxt.com/
    '@nuxt/ui',

    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://image.nuxt.com
    '@nuxt/image',

    // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/i18n',

    // https://nuxt.com/modules/fontaine
    '@nuxtjs/fontaine',

    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',

    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },
  css: ['assets/main.css'],
  headlessui: {
    prefix: 'Headless',
  },
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 600, 700],
        display: 'swap',
      },
    },
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
