<script setup>
// const { getProduct, addLineItem, cartLines, getCart, cartState } =
//   await useShopify();
// const cart = await getCart();
// console.log(cart);
const cart = [];
useHead({
  title: "Cart",
  meta: [{ name: "description", content: "Cart" }],
});
</script>

<template>
  <div class="w-full">
    <table class="w-full">
      <thead>
        <tr>
          <th></th>
          <th class="text-left">Item</th>
          <th class="text-left">Format</th>
          <th class="text-right">Quantity</th>
          <th class="text-right">Unit price</th>
          <th class="text-right">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lineItem in cart.lineItems">
          <td>
            <img
              class="w-20"
              :src="lineItem.variant.image.src"
              :alt="lineItem.variant.title"
            />
          </td>
          <td class="text-left">{{ lineItem.title }}</td>
          <td class="text-left">{{ lineItem.variant.title }}</td>
          <td class="text-right">{{ lineItem.quantity }}</td>
          <td class="text-right">
            {{ lineItem.variant.price.currencyCode }}
            {{ lineItem.variant.price.amount }}
          </td>
          <td class="text-right">
            {{ lineItem.variant.price.currencyCode }}
            {{ lineItem.variant.price.amount * lineItem.quantity }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">
            {{ cart.lineItemsSubtotalPrice.currencyCode }}
            {{ cart.lineItemsSubtotalPrice.amount }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total with discounts</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">
            {{ cart.lineItemsSubtotalPrice.currencyCode }}
            {{ cart.subtotalPrice.amount }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="p-2" span="6">
            <a
              :href="cart.webUrl"
              target="_tab"
              class="text-white bg-red px-4 py-2"
            >
              Checkout now
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <span></span>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
