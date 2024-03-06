/// <reference types="unlighthouse" />
import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: 'localhost:3000',
  scanner: {
    device: 'desktop',
  },
  debug: true,
})
