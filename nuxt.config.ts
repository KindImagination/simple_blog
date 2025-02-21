// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Enable TypeScript
  typescript: {
    strict: true,
    typeCheck: false
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Development tools
  devtools: { enabled: true },

  compatibilityDate: '2025-02-21'
})