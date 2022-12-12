import Client from "shopify-buy";

export const useShopify = async () => {
  const cartLines = ref(3);

  const runtimeConfig = useRuntimeConfig();
  const client = Client.buildClient({
    domain: runtimeConfig.public.shopify.domain,
    storefrontAccessToken: runtimeConfig.public.shopify.storefrontAccessToken,
  });
  let cart = await client.checkout.create();
  console.log(cart);

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
    cartLines.value++;
    console.log(cartLines.value);
    console.log(cart);
  };

  return {
    cartLines,
    getProduct,
    getCart,
    addLineItem,
    getLineItems,
  };
};
