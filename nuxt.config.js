export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/algolia",
    "@unocss/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
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
});
