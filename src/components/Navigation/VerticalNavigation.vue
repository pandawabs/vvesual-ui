<script setup>
import { inject } from "vue";
import NavigationItem from "./NavigationItem.vue";

const navItems = inject("main-navs", []);
</script>
<template>
  <nav class="flex flex-col gap-1">
    <NavigationItem v-for="item in navItems" />
  </nav>
</template>
