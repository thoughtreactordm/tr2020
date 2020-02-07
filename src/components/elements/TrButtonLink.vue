<template>
  <span>
    <g-link
      class="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-grey-900 font-bold transition duration-150 ease-in-out"
      :class="dynamicClass"
      :to="to"
      v-if="!external"
      :target="target"
      :title="title"
    >
      <slot></slot>
    </g-link>
    <a :href="to" :title="title" :target="target" v-else>
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
  name: "tr-button-link",

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