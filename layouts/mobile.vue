<script setup></script>

<template>
  <div
    class="flex flex-col h-full w-full mxa p-4 md:p-2 lg:max-w-80rem font-sans font-400 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-800 text-stone-700 dark:text-stone-300"
  >
    <header
      class="container w-full m-auto py-2 md:py-4 md:sticky md:top-0 z-10 bg-white dark:bg-slate-800/70 backdrop-filter backdrop-blur-lg border-b border-gray-400"
    >
      <Header src="/icon.svg" alt="Waymead" />
    </header>
    <NuxtLoadingIndicator />
    <main class="container w-screen-lg flex-auto m-auto py-2 md:py-8">
      <slot />
    </main>
    <footer class="w-full m-auto flex flex-row py-2 md:py-4 justify-center">
      <button class="btn">Home</button>
      <button class="btn">Profile</button>
      <button class="btn">Books</button>
    </footer>
  </div>
</template>
