<template>
  <Layout>
    <section class="container mx-auto px-4 md:px-16 lg:px-32 py-8">
      <div class="mb-4">
        <tr-link to="/blog">
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            fixed-width
          ></font-awesome-icon>
          Back to Blogs</tr-link
        >
      </div>

      <div class="text-center border-dashed border-b-2 border-orange-500 pb-4">
        <h1 class="text-5xl text-orange-500">{{ $page.post.title }}</h1>
        <h3 class="text-2xl">{{ $page.post.date }}</h3>

        <blog-tags :post="$page.post" />
      </div>
    </section>

    <section class="container mx-auto px-4 md:px-16 lg:px-32 mb-16">
      <div class="blog-content" v-html="$page.post.content"></div>
    </section>

    <section class="container m-auto lg:px-16 lg:my-32">
      <Newsletter />
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
    post: post (id: $id) {
        title
        date (format: "MMMM D, YYYY")
        tags {
            id
            title
            path
        }
        content
    }
}
</page-query>

<script>
import BlogTags from "@/components/partials/BlogTags.vue";
import Newsletter from "@/components/partials/Newsletter.vue";

export default {
  components: { BlogTags, Newsletter },

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.excerpt }],
    };
  },
};
</script>

<style lang="scss">
.blog-content {
  p {
    margin-bottom: 1.75em;
    line-height: 1.75;
  }
}
</style>
