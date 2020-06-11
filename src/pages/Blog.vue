<template>
  <Layout>
    <section class="container mx-auto px-4 md:px-16 lg:px-32 py-16">
      <div class="text-center mb-4">
        <h1 class="text-5xl text-orange-500">Blog</h1>
        <p
          class="text-xl max-w-2xl mx-auto border-dashed border-b-2 border-orange-500 py-4"
        >
          <em
            >Keep up to date with news and announcements as well as periodical
            tutorials and discussion on a variety of game development
            topics.</em
          >
        </p>
      </div>

      <blog-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM D, YYYY")
        timeToRead
        ...on Post {
            id
            title
            path
        }
        path
        tags {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import BlogCard from "@/components/partials/BlogCard.vue";

export default {
  components: { BlogCard },
  metaInfo: {
    title: "Blog",
  },
};
</script>
