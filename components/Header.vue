<script setup>
import { useCounter } from "@vueuse/shared";

const { getProduct, addLineItem, cartLines, getCart, cartState } =
  await useShopify();

defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <div class="flex flex-row justify-between">
    <div>
      <img src="/logo.png" alt="DK" class="m-auto" />
    </div>
    <nav class="flex items-center">
      <NuxtLink class="ml-4 hover:underline" to="/">Home</NuxtLink>
      <NuxtLink class="ml-4 hover:underline" to="/search">Search</NuxtLink>
      <NuxtLink class="ml-4 hover:underline" to="/cart">
        Cart: {{ cartState.lines }}
      </NuxtLink>
    </nav>
  </div>
</template>
