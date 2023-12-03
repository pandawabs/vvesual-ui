<script>
import { RouterLink } from "vue-router";
import LinkElement from "../../elements/LinkElement.vue";

export default {
    name: "NavigationCore",
    inheritAttrs: false,
    props: {
        // add @ts-ignore if using TypeScript
        ...RouterLink.props,
        inactiveClass: String,
    },
    computed: {
        isExternalLink() {
            return typeof this.to === "string" && this.to.startsWith("http");
        },
    },
    components: { LinkElement }
};
</script>

<template>
  <LinkElement v-if="isExternalLink" v-bind="$attrs" :href="to">
    <slot />
  </LinkElement>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
