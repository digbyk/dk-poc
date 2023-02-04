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
        domain: process.env.SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        unoptimized: false,
      },
      gql: {
        clients: {
          default: {
            host: process.env.GRAPHCMS_ENDPOINT,
            token: process.env.GRAPHCMS_API_KEY,
          },
        },
      },
    },
    myPrivateToken: process.env.PRIVATE_TOKEN,
  },
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APP_ID,
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
        lang: "en", // it sets the language English
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "DK Learning POC" },
      ],
    },
  },
  pwa: {
    scope: "/",
    srcDir: "./service-worker",
    filename: "sw.ts",
    strategies: "injectManifest",
    injectRegister: false,
    includeManifestIcons: false,
    manifest: false,
    injectManifest: {
      globPatterns: [
        "**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
      ],
      globIgnores: ["emojis/**", "shiki/**", "manifest**.webmanifest"],
    },
    devOptions: {
      enabled: process.env.VITE_DEV_PWA === "true",
      type: "module",
    },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    "/blog/**": { swr: true },
    // Static page generated on-demand once
    "/articles/**": { static: true },
    // Set custom headers matching paths
    "/_nuxt/**": { headers: { "cache-control": "s-maxage=0" } },
    // Render these routes with SPA
    "/admin/**": { ssr: false },
    // Add cors headers
    "/api/v1/**": { cors: true },
    // Add redirect headers
    "/old-page": { redirect: "/new-page" },
    "/old-page2": { redirect: { to: "/new-page", statusCode: 302 } },
  },
});
