<script setup>
import "@unocss/reset/tailwind.css";
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  background: #666;
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 0px solid slategrey;
}
</style>
