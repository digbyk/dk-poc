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
  <div class="w-full flex-column">
    <div>
      <img src="/logo.png" alt="DK" class="m-auto" />
    </div>
    <nav class="justify-center w-full flex mt-4">
      <NuxtLink class="mx-4" to="/">Home</NuxtLink>
      <NuxtLink class="mx-4" to="/search">Search</NuxtLink>
      <NuxtLink class="mx-4" to="/cart">Cart: {{ cartState.lines }} </NuxtLink>
    </nav>
  </div>
</template>
