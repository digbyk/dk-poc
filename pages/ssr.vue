<script lang="ts" setup>
const date = () => {
  return new Date()
}
</script>

<template>
  <div>
    <h1>SSR</h1>
    <h2>{{ date() }}</h2>
  </div>
</template>
