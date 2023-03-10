export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/algolia",
    "@unocss/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  buildModules: ["nuxt-vite", "@nuxtjs/google-fonts"],
  vite: {
    build: {
      target: "esnext",
    },
  },
  build: {},
  imports: {
    dirs: ["stores"],
  },
  runtimeConfig: {
    public: {
      shopify: {
        domain: "",
        storefrontAccessToken: "",
        unoptimized: true,
      },
      test: "",
      gql: {
        clients: {
          default: {
            host: process.env.GRAPHCMS_ENDPOINT,
            token: process.env.GRAPHCMS_API_KEY,
          },
        },
      },
      clerk: {
        publishableKey: "",
      },
    },
    clerkSecretKey: "secret",
  },
  algolia: {
    recommend: true,
    indexer: {},
  },
  ssr: false,
  css: ["@unocss/reset/tailwind.css", "~/styles/global.css"],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    shortcuts: [],
    rules: [],
  },
  app: {
    head: {
      title: "DK Learning" || "",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/dk-logo-192x192.png",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "DK Learning POC" },
      ],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "DK Learning",
      short_name: "DK Learning",
      theme_color: "#ffffff",
      icons: [
        {
          src: "dk-logo-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "dk-logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "dk-logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    // injectManifest: {
    //   globPatterns: [
    //     "**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
    //   ],
    //   //globIgnores: ["manifest**.webmanifest"],
    // },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      sourcemap: true,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static/**": { static: true },
    "/articles/**": { static: true },
    "/swr": { swr: 60 },
  },
  // nitro: {
  //   routeRules: {
  //     "/spa": { ssr: false },
  //     "/static/**": { static: true },
  //     "/articles/**": { static: true },
  //     "/swr": { swr: 60 },
  //   },
  // },
});
