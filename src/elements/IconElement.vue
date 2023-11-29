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

const IconElement = defineAsyncComponent({
  loader: async () => {
    if (props.type === "outline") {
      return import("@heroicons/vue/24/outline").then(
        (module) => module[props.name]
      ) as Promise<Component>;
    } else {
      return import("@heroicons/vue/24/solid").then(
        (module) => module[props.name]
      ) as Promise<Component>;
    }
  },
});
</script>

<template>
  <IconElement />
</template>
