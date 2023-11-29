<script lang="ts" setup>
import { Component, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "ExclamationCircleIcon",
    required: true,
  },
  type: {
    type: String,
    validator(value) {
      return ["solid", "outline"].includes(value as string);
    },
    default: "solid",
    required: true,
  },
});

const IconAsyncComponent = defineAsyncComponent({
  loader: async () => {
    if (props.type === "outline") {
      return import(/* @vite-ignore */ `@heroicons/vue/24/outline`).then(
        (module) => module[props.name]
      ) as Promise<Component>;
    } else {
      return import(/* @vite-ignore */ `@heroicons/vue/24/solid`).then(
        (module) => module[props.name]
      ) as Promise<Component>;
    }
  },
});
</script>

<template>
  <IconAsyncComponent />
</template>
