import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: false,
  },

  app: {
    head: {
      link: [
        // Default favicon (fallback)
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        
        // Light mode
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/Kindimagination-light.svg",
          sizes: "any",
          media: "(prefers-color-scheme: light)",
        },

        // Dark mode
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/Kindimagination-dark.svg",
          sizes: "any",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/image"],

  devtools: { enabled: true },

  compatibilityDate: "2025-02-21",

  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    public: {
      supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
      },
    },
  },

  nitro: {
    preset: "node-server",
    node: {
      processEnv: {
        NODE_OPTIONS: "--no-warnings",
      },
    },
  },
});
