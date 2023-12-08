<script setup>
import NavigationComponent from "../components/Navigation/NavigationComponent.vue";
</script>

<template>
  <div
    class="fixed top-0 z-50 flex w-full flex-row gap-4 border-b-8 border-primary-400 bg-white p-4 drop-shadow-lg backdrop-blur md:sticky md:top-4 md:z-auto md:w-auto md:flex-col md:rounded-2xl md:border-8 md:bg-white/40"
  >
    <img
      class="v-12 h-12 self-center md:mx-auto md:h-24 md:w-24"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <!-- Core -->
    <NavigationComponent />
  </div>
</template>

<style scoped></style>
