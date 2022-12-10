import Client from "shopify-buy";

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const client = Client.buildClient({
    domain: runtimeConfig.public.shopify.domain,
    storefrontAccessToken: runtimeConfig.public.shopify.storefrontAccessToken,
  });

  return {
    provide: {
      shopify: client,
      cart: await client.checkout.create(),
    },
  };
});
