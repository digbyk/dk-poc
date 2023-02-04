<script setup>
import { useCounter } from "@vueuse/shared";

const { getProduct, addLineItem, cartLines, getCart, cartState } =
  await useShopify();

const navItems = [
  { text: "Home", path: "/" },
  { text: "Search", path: "/search" },
  { text: "Articles", path: "/articles" },
  { text: "Blog", path: "/blog" },
];
defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <div class="flex flex-row justify-between">
    <div>
      <img src="/logo.png" alt="DK" class="m-auto" width="226" height="40" />
    </div>
    <nav class="flex items-center">
      <NuxtLink
        v-for="navItem in navItems"
        class="ml-4 hover:underline"
        :to="navItem.path"
        >{{ navItem.text }}</NuxtLink
      >
      <NuxtLink class="ml-4 hover:underline" to="/cart">
        Cart: {{ cartState.lines }}
      </NuxtLink>
    </nav>
  </div>
</template>
