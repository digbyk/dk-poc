import { defineStore } from "pinia";
const { client } = useShopify();

console.log("init store");
console.log(client);

const cart = await client.checkout.create();
console.log(cart.id);

export const useCart = defineStore("cart", {
  state: () => ({
    cart: {},
  }),

  getters: {
    getCart: (state) => cart,
  },

  actions: {
    async initCart() {
      this.cart = null;
    },

    updateCart(cart, lineItem, quantity) {
      this.cart = cart;
    },
  },
});
