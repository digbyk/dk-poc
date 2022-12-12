import Client from "shopify-buy";

const cartLines = ref(0);

const runtimeConfig = useRuntimeConfig();
const client = Client.buildClient({
  domain: runtimeConfig.public.shopify.domain,
  storefrontAccessToken: runtimeConfig.public.shopify.storefrontAccessToken,
});
let cart = await client.checkout.create();

export const useShopify = async () => {
  const getProduct = async (handle) => {
    return await client.product.fetchByHandle(handle);
  };

  const getCart = () => {
    return cart;
  };

  const getLineItems = () => {
    return cart.lineItems;
  };

  const addLineItem = async (id, count) => {
    const lineItemsToUpdate = [{ variantId: id, quantity: count }];
    cart = await client.checkout.addLineItems(cart.id, lineItemsToUpdate);
    console.log(cart);
    cartLines.value = cart.lineItems.length;
  };

  return {
    cartLines,
    getProduct,
    getCart,
    addLineItem,
    getLineItems,
  };
};
