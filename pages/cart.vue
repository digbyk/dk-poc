<script setup>
const { getProduct, addLineItem, cartLines, getCart, cartState } =
  await useShopify();
const cart = await getCart();
console.log(cart);
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
          <th>Item</th>
          <th>Format</th>
          <th>Quanity</th>
          <th>Price</th>
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
          <td>{{ lineItem.title }}</td>
          <td>{{ lineItem.variant.title }}</td>
          <td>{{ lineItem.quantity }}</td>
          <td>
            {{ lineItem.variant.price.currencyCode }}
            {{ lineItem.variant.price.amount }}
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
