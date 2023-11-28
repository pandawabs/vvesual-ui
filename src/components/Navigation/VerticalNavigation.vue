<script setup>
import { Routes } from "../../router.js";
import NavigationItem from "./NavigationItem.vue";
</script>
<template>
  <nav class="flex flex-col gap-1">
    <NavigationItem
      v-for="route in Routes"
      :to="route.path"
      :title="route.title"
      is-external-link="false"
      >{{ route.label }}</NavigationItem
    >
  </nav>
</template>
