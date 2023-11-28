<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import NavigationLayout from "./layouts/NavigationLayout.vue";
</script>

<template>
  <div
    class="flex h-screen flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:flex-row"
  >
    <div class="h-screen basis-1/4 p-4">
      <NavigationLayout />
    </div>
    <div class="h-screen basis-3/4 p-4">
      <MainLayout />
    </div>
  </div>
</template>

<style></style>
