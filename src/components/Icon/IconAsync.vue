<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "ExclamationCircleIcon",
    required: true,
  },
  type: {
    type: String,
    validator(value) {
      return ["solid", "outline", "mini"].includes(value);
    },
    required: true,
  },
});

const IconAsync = defineAsyncComponent({
  loader: async function () {
    const path = "@heroicons/vue/24/" + props.type;
    const name = props.name;
    return import(path).then((module) => module[name]);
  },
});
</script>

<template>
  <IconAsync />
</template>
