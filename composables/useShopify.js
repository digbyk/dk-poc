import Client from "shopify-buy";

const runtimeConfig = useRuntimeConfig();
const client = Client.buildClient({
  domain: runtimeConfig.public.shopify.domain,
  storefrontAccessToken: runtimeConfig.public.shopify.storefrontAccessToken,
});
const cart = await client.checkout.create();
const cartId = cart.id;

export default function useShopify() {
  return {
    client,
    cartId,
  };
}
