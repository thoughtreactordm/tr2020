<template>
  <Layout>
    <section class="container mx-auto px-4 md:px-16 lg:px-32 py-16">
      <div class="text-center mb-4">
        <h1 class="text-5xl text-orange-500">
          <font-awesome-icon :icon="['fas', 'tags']" fixed-width />
          {{ $page.tag.title }}
        </h1>

        <p
          class="text-xl max-w-2xl mx-auto border-dashed border-b-2 border-orange-500 py-4"
        >
          <em
            >Check out all the blogs in the
            <strong class="text-orange-500">{{ $page.tag.title }}</strong
            >&nbsp;tag.</em
          >
        </p>
      </div>

      <blog-card
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "MMMM D, YYYY")
            timeToRead
            content
            tags {
                id
                title
                path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import BlogCard from "@/components/partials/BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
  metaInfo: {
    title: "Tags",
  },
};
</script>
