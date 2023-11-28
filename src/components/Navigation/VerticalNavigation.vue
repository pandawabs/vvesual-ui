<script setup>
import { Routes } from "../../router.js";
import IconAsync from "../Icon/IconAsync.vue";
import NavigationItem from "./NavigationItem.vue";
</script>
<template>
  <nav class="flex flex-col gap-1">
    <NavigationItem
      v-for="(route, index) in Routes"
      :to="route.path"
      :title="route.title"
      is-external-link="false"
      ><IconAsync :name="route.icon" type="solid" />
      {{ route.label }}</NavigationItem
    >
  </nav>
</template>
