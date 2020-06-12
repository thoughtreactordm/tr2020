<template>
  <div class="text-grey-400 font-thin">
    <font-awesome-icon
      :icon="['fas', 'tags']"
      fixed-width
      class="mr-1"
    ></font-awesome-icon>
    <span v-for="(tag, index) in post.tags" :key="tag.id">
      <g-link :to="tag.path" class="hover:text-orange-300">{{
        tag.title
      }}</g-link
      ><span v-if="index < post.tags.length - 1">,&nbsp;</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "blog-tags",
  props: ["post"],
};
</script>
