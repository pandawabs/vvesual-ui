<script setup>
import NavigationCore from "./NavigationCore.vue";
</script>

<template>
  <NavigationCore
    v-bind="$attrs"
    class="rounded-xl p-3 font-mono"
    active-class="font-bold bg-emerald-500"
    inactive-class="hover:bg-white/10 hover:font-semibold hover:text-emerald-500"
  >
    <slot />
  </NavigationCore>
</template>
