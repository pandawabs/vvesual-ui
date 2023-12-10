<script setup>
import { Routes } from "../../router.js";
import IconElement from "../../elements/IconElement.vue";
import NavigationItem from "./NavigationItem.vue";
</script>
<template>
  <nav class="flex flex-wrap gap-1 lg:flex-col">
    <NavigationItem
      v-for="route in Routes"
      :to="route.path"
      :title="route.title"
      is-external-link="false"
      class="flex flex-row gap-2"
      ><IconElement
        v-if="route.icon"
        :name="route.icon"
        type="solid"
        class="h-6 w-6 self-center"
      /><span class="hidden sm:block">{{ route.label }}</span></NavigationItem
    >
  </nav>
</template>
