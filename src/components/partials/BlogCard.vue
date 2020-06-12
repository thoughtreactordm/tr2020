<template>
  <div
    class="py-8 border-b-4 border-gradient-r-brand flex-col md:flex-row flex justify-between items-center"
  >
    <div>
      <h3 class="text-3xl text-white">
        <tr-link :to="post.path">{{ post.title }}</tr-link>
      </h3>

      <h4 class="text-white">{{ post.date }}</h4>

      <p class="mt-2">
        <em>{{ post.excerpt }}</em>
      </p>

      <div class="mt-4">
        <p class="text-grey-400 font-thin">
          <font-awesome-icon
            :icon="['fas', 'clock']"
            fixed-width
            class="mr-1"
          ></font-awesome-icon
          >{{ post.timeToRead }} min read
        </p>

        <blog-tags :post="post" />
      </div>
    </div>

    <div class="mt-4 md:mt-0">
      <tr-button-link
        :to="post.path"
        utils="text-white"
        :icon="['fas', 'book-open']"
        icon-size="sm"
        >Read</tr-button-link
      >
    </div>
  </div>
</template>

<script>
import BlogTags from "./BlogTags.vue";

export default {
  name: "blog-card",

  components: { BlogTags },

  props: {
    post: { type: Object },
  },
};
</script>
