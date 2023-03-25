<script setup>
import { gql } from "graphql-request";
const { $hygraph } = useNuxtApp();
const query = gql`
  {
    webPage(where: { slug: "home-page" }) {
      title
      slug
      body {
        html
      }
    }
  }
`;
const { pages } = await $hygraph.request(query);
console.log(pages);

useHead({
  title: "DK learning POC",
  link: [{ rel: "icon", type: "image/png", href: "favicon-32x32.png" }],
  meta: [{ name: "description", content: "DK Learning POC" }],
});
</script>

<template>
  <div class="w-full">Index</div>
  {{ $hygraph }}
</template>
