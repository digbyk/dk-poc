<script setup>
const route = useRoute();
const slug = route.params.slug;
const articles = [
  {
    slug: "article-one",
    title: "Article title",
    body: "This is the article body",
  },
];
</script>

<template>
  <div class="w-full">
    <h1 class="font-bold">List of articles</h1>
    <h2>{{ new Date() }}</h2>
    <ol>
      <li v-for="article in articles">
        <NuxtLink :to="`articles/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>
