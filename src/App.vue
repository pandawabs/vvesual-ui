<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import NavigationLayout from "./layouts/NavigationLayout.vue";
</script>

<template>
  <div class="flex flex-col gap-4 p-0 md:flex-row md:p-4">
    <div class="basis-1/4">
      <NavigationLayout />
    </div>
    <div class="basis-3/4">
      <MainLayout />
    </div>
  </div>
</template>

<style></style>
