<script setup>
const { getCart, getLineItems } = await useShopify();
const lineItems = getLineItems();
console.log(lineItems);
useHead({
  title: "Cart",
  meta: [{ name: "description", content: "Cart" }],
});
</script>

<template>
  <div class="w-full">
    {{ lineItems }}
    <ul>
      <li v-for="lineItem in lineItems">
        {{ lineItem.title }}
      </li>
    </ul>
  </div>
</template>
