<template>
  <span>
    <g-link
      class="text-orange-500 hover:underline hover:text-orange-300 font-bold transition duration-150 ease-in-out"
      :class="dynamicClass"
      :to="to"
      :title="title"
      :target="target"
      v-if="!external"
    >
      <slot></slot>
    </g-link>
    <a
      :href="to"
      :title="title"
      class="text-orange-500 hover:underline hover:text-orange-300 font-bold transition duration-150 ease-in-out"
      :class="dynamicClass"
      :target="target"
      v-else
    >
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
  name: "tr-link",

  props: {
    to: { type: String, default: "/" },
    target: { type: String, default: "" },
    title: { type: String, default: "" },
    external: { type: Boolean },
    utils: { type: String, default: "" }
  },

  computed: {
    dynamicClass() {
      return this.utils;
    }
  }
};
</script>