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

      <div
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="py-8 border-b-4 border-gradient-r-brand flex-col md:flex-row flex justify-between items-center"
      >
        <div>
          <h3 class="text-3xl text-white">
            {{ edge.node.title }}
          </h3>
          <p>
            <em>{{ edge.node.excerpt }}</em>
          </p>
          <p>{{ edge.node.timeToRead }} min read</p>
        </div>

        <tr-button-link :to="edge.node.path">Read</tr-button-link>
      </div>
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
        date (format: "D. MMMM YYYY")
        timeToRead
        ...on Post {
        id
        title
        path
        }
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog",
  },
};
</script>
