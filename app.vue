<script setup>
import "@unocss/reset/tailwind.css";

useHead({
  script: [
    {
      src: "//code.tidio.co/iyffgju2e7yn2o5gd9pgrzjyuimtbals.js",
      async: true,
    },
  ],
});
</script>
<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
