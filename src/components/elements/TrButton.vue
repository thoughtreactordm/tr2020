<template>
  <button
    :type="type"
    class="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-grey-900 font-bold transition duration-150 ease-in-out"
    :class="dynamicClass"
  >
    <span v-show="icon.length > 1">
      <font-awesome-icon :icon="icon" size="lg" fixed-width></font-awesome-icon>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "tr-button",

  props: {
    type: { type: String, default: "button" },
    utils: { type: String, default: "" },
    icon: { type: Array, default: () => ["fas", "heart"] }
  },

  computed: {
    dynamicClass() {
      return this.utils;
    }
  },

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>