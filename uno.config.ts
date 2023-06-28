import { defineConfig, presetWind, presetTypography } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  variants: [
    {
      name: 'media-group-hover',
      // @group-hover: to prevent sticky hover effect
      match(matcher) {
        if (!matcher.startsWith('@group-hover:')) return matcher

        return {
          matcher: matcher.slice(13),
          selector: s => `.group:hover ${s}`,
          parent: '@media (hover: hover) and (pointer: fine)',
        }
      },
    },
  ],
  presets: [presetWind(), presetTypography()],
  transformers: [transformerVariantGroup()],
})
