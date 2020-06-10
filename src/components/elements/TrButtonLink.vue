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
      <span v-show="icon">
        <font-awesome-icon
          :icon="icon"
          :size="iconSize"
          fixed-width
          class="mr-1"
        ></font-awesome-icon>
      </span>
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
    utils: { type: String, default: "" },
    icon: { type: Array, default: () => ["fas", "heart"] },
    iconSize: { type: String, default: "lg" },
  },

  computed: {
    dynamicClass() {
      return this.utils;
    },
  },
};
</script>
