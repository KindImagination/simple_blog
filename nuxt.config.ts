import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: false,
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/Kindimagination.png",
          sizes: "64x64",
        },
        // Light mode
        {
          rel: "icon",
          type: "image/png",
          href: "/Kindimagination-light.png",
          sizes: "64x64",
          media: "(prefers-color-scheme: light)",
        },

        // Dark mode
        {
          rel: "icon",
          type: "image/png",
          href: "/Kindimagination-dark.png",
          sizes: "64x64",
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
