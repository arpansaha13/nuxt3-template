# Opinionated Nuxt 3 Starter Template

## Nuxt 3 Modules

- [NuxtUI](https://ui.nuxt.com) - A UI Library for Modern Web Apps.
- [VueUse](https://vueuse.org) - Collection of Vue Composition Utilities.
- [Pinia](https://pinia.vuejs.org) - The Vue Store that you will enjoy using.
- [Headless UI](https://headlessui.com) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- [Content](https://content.nuxtjs.org) - Content made easy for Vue Developers.
- [Image](https://v1.image.nuxtjs.org) - Plug-and-play image optimization for Nuxt apps.
- [Eslint](https://eslint.org) - The pluggable linting utility for JavaScript and JSX.
- [Fonts](https://nuxt.com/modules/fonts) - Plug-and-play web font optimization and configuration for Nuxt apps.
- [I18n](https://v8.i18n.nuxtjs.org) - I18n module for Nuxt.
- [HTML validator](https://html-validator.nuxtjs.org) - Automatically validate Nuxt server-rendered HTML.

> These are the pre-packed modules in this starter template. Feel free to ditch any module you won't be using.

## Nuxt UI Modules

These modules are pre-packed with the Nuxt UI module.

- [TailwindCSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [Color mode](https://color-mode.nuxtjs.org) - Dark and Light mode with auto-detection made easy with Nuxt 🌗.
- [Icon](https://nuxt.com/modules/icon) - Icon module for Nuxt with 100,000+ ready to use icons from Iconify.

> Nuxt UI includes components powered by Headless UI, but the [nuxt-headlessui](https://nuxt.com/modules/headlessui) module is also added separately to enable native Headless UI syntax and functionality.

## Other Features

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [Prettier](https://prettier.io/) - Opinionated code formatter.
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation) - Automatic Class Sorting with Prettier. [Read more](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).
- [Unlighthouse](https://unlighthouse.dev/) - Like Google Lighthouse, but it scans every single page.
- [TypeScript](https://www.typescriptlang.org/) - Why not?

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Checklist

When you use this template, try to follow the checklist to update your info properly

- [ ] Change the name and description in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Remove `<NuxtWelcome />` in `pages/index.vue`
- [ ] Clean up the READMEs and remove routes
- [ ] Clean up the images in `public/`
- [ ] Remove any modules you won't be needing.
