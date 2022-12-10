<template>
  <div
    class="w-full h-full bg-cover bg-no-repeat bg-center flex place-content-center rounded-t-lg md:rounded-tr-none"
    :style="{
      'backdrop-filter': 'blur(118px)',
      backgroundImage: `url(${src})`,
    }"
  >
    <div
      class="w-full h-full bg-cover bg-no-repeat bg-center flex place-content-center rounded-t-lg md:rounded-tr-none p-4"
      :style="{
        background: 'rgba(255, 255, 255, 0.6)',
        'backdrop-filter': 'blur(20px) saturate(150%)',
      }"
    >
      <img
        :src="src"
        :alt="alt"
        class="rounded-t-lg md:rounded-l-lg md:rounded-tr-none m-auto max-h-full"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>
