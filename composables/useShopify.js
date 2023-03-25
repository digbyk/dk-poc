// import Client from "shopify-buy";

// const { domain, storefrontAccessToken } = useRuntimeConfig().public.shopify;
// const client = Client.buildClient({
//   domain,
//   storefrontAccessToken,
// });
// let cart = await client.checkout.create();
// const cartState = useState("cart", () => {
//   return { id: cart.id, lines: cart.lineItems.length };
// });

// export const useShopify = async () => {
//   const getProduct = async (handle) => {
//     return await client.product.fetchByHandle(handle);
//   };

//   const getCart = async () => {
//     return await client.checkout.fetch(cartState.value.id);
//   };

//   const getLineItems = () => {
//     return cart.lineItems;
//   };

//   const addLineItem = async (id, count) => {
//     const lineItemsToUpdate = [{ variantId: id, quantity: count }];
//     cart = await client.checkout.addLineItems(cart.id, lineItemsToUpdate);
//     console.log(cart);
//     cartState.value.id = cart.id;
//     cartState.value.lines = cart.lineItems.length;
//   };

//   return {
//     cartState,
//     getProduct,
//     getCart,
//     addLineItem,
//     getLineItems,
//   };
// };
