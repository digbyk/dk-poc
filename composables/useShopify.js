import Client from "shopify-buy";

export default function useShopify() {
  const runtimeConfig = useRuntimeConfig();
  const client = Client.buildClient({
    domain: runtimeConfig.public.shopify.domain,
    storefrontAccessToken: runtimeConfig.public.shopify.storefrontAccessToken,
  });

  return {
    client,
  };
}
