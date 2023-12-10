<script setup>
import NavigationComponent from "../components/Navigation/NavigationComponent.vue";
</script>

<template>
  <div
    class="fixed top-0 z-50 flex w-full flex-row gap-4 border-b-8 border-primary-400 bg-white/40 p-4 drop-shadow-lg backdrop-blur lg:sticky lg:top-4 lg:z-auto lg:w-auto lg:flex-col lg:rounded-2xl lg:border-8 lg:bg-white"
  >
    <img
      class="v-12 h-12 self-center lg:mx-auto lg:h-24 lg:w-24"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <!-- Core -->
    <NavigationComponent />
  </div>
</template>

<style scoped></style>
