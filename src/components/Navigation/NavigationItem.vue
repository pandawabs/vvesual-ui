<script setup>
import NavigationCore from "./NavigationCore.vue";
</script>

<template>
  <NavigationCore
    v-bind="$attrs"
    class="rounded-full px-5 py-4 font-mono"
    active-class="font-bold bg-primary-400"
    inactive-class="hover:font-semibold hover:text-primary-400"
  >
    <slot />
  </NavigationCore>
</template>
