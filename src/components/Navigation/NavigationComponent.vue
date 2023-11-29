<script setup>
import { Routes } from "../../router.js";
import IconAsyncComponent from "../Icon/IconAsyncComponent.vue";
import NavigationItem from "./NavigationItem.vue";
</script>
<template>
  <nav class="flex flex-wrap gap-1 md:flex-col">
    <NavigationItem
      v-for="route in Routes"
      :to="route.path"
      :title="route.title"
      is-external-link="false"
      class="flex flex-row gap-2"
      ><IconAsyncComponent
        v-if="route.icon"
        :name="route.icon"
        type="solid"
        class="h-6 w-6"
      /><span class="hidden sm:block">{{ route.label }}</span></NavigationItem
    >
  </nav>
</template>
