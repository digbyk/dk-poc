import Client from "shopify-buy";

export default defineNuxtPlugin((nuxtApp) => {
  const { domain, storefrontAccessToken } = useRuntimeConfig().public.shopify;
  const client = Client.buildClient({
    domain,
    storefrontAccessToken,
  });

  return {
    provide: {
      shopify: client,
    },
  };
});
