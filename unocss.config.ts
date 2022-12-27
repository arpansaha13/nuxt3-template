import { defineConfig, presetWind, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  shortcuts: {
    'header-icon-btn':
      'flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/90 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-50',
  },
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
})
