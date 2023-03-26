<script setup>
import { gql } from "graphql-request";
import { astToHtmlString } from "@graphcms/rich-text-html-renderer";

const { $hygraph } = useNuxtApp();
const config = useRuntimeConfig();

const query = gql`
  query HomePage {
    webPage(where: { slug: "home-page" }) {
      title
      slug
      body {
        html
        json
        references {
          __typename
          ... on Book {
            id
            title
            isbn
          }
        }
      }
    }
  }
`;
const { webPage } = await $hygraph.request(query);

const html = astToHtmlString({
  content: webPage.body.json,
  references: webPage.body.references,
  renderers: {
    embed: {
      Book: ({ title }) => `This is a book called ${title}`,
    },
  },
});

useHead({
  title: "DK learning POC",
  link: [{ rel: "icon", type: "image/png", href: "favicon-32x32.png" }],
  meta: [{ name: "description", content: "DK Learning POC" }],
});
</script>

<template>
  <div class="w-full">
    <h1 class="font-bold">{{ webPage.title }}</h1>
    <div v-html="html"></div>
  </div>
</template>
