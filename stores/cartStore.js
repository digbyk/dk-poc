// import { defineStore } from "pinia";
// const { client } = useShopify();

// console.log("init store");
// console.log(client);

// const cart = await client.checkout.create();
// console.log(cart.id);

// const $shopify = useNuxtApp();
// console.log($shopify.$shopify);

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     cart: {},
//   }),

//   getters: {
//     getCart: (state) => cart,
//   },

//   actions: {
//     async initCart() {
//       console.log("Init cart");
//       this.cart = null;
//     },

//     updateCart(cart, lineItem, quantity) {
//       this.cart = cart;
//     },
//   },
// });
