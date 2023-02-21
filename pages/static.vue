<script lang="ts" setup>
const date = () => {
  return new Date()
}
</script>

<template>
  <div>
    <nav class="flex flex-row justify-evenly">
      <nuxt-link to="/static">Static</nuxt-link>
      <nuxt-link to="/ssr">SSR</nuxt-link>
      <nuxt-link to="/swr">SWR</nuxt-link>
      <nuxt-link to="/spa">SPA</nuxt-link>
    </nav>
    <h1>Static</h1>
    <h2>{{ date() }}</h2>
  </div>
</template>
