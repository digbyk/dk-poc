<script setup>
const route = useRoute();
const slug = route.params.slug;
const article = {
  slug: "article-one",
  title: "Article title",
  body: "This is the article body",
};
</script>

<template>
  <article class="w-full">
    <h1 class="font-bold">{{ article.title }}</h1>
    {{ article.body }}
  </article>
</template>
