<template>
  <!-- mt-4 -->
  <footer class="mx-auto pattern-diagonal-stripes-sm bg-gray-50 text-gray-100 lg:rounded
                dark:bg-slate-900 dark:text-slate-800">
    <div class="w-full h-full py-4 flex flex-col text-sm justify-center items-center text-gray-500">
      <p class="mt-2 dark:text-gray-300">{{ $t('app.slogan') }}</p>
      <p class="text-xs text-gray-400 mt-1">
        Made with <span><ion-icon class="animate-bounce animate-pulse text-red-400" name="heart"></ion-icon></span> by
        Lupital for Better Research & Development
      </p>
      <p class="text-xs text-gray-400 mt-1">&copy; 2020 - 2022 Lupital</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
