<script setup>
const { getProduct, addLineItem, cartLines, getCart } = await useShopify();
useHead({
  title: "Cart",
  meta: [{ name: "description", content: "Cart" }],
});
</script>

<template>
  <div class="w-full">
    <ul>
      <li v-for="lineItem in getCart().lineItems">
        {{ lineItem.title }}
      </li>
    </ul>
  </div>
</template>
