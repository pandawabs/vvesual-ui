<script setup>
import NavigationCore from "./NavigationCore.vue";
</script>

<template>
  <NavigationCore
    v-bind="$attrs"
    class="rounded-xl p-3 font-mono"
    active-class="font-bold bg-white/75"
    inactive-class="hover:bg-white/50 hover:font-semibold"
  >
    <slot />
  </NavigationCore>
</template>
