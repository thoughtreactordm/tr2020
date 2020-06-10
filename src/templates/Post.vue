<template>
  <Layout>
    <section class="container mx-auto px-24 py-16">
      <h1 class="text-5xl text-orange-500">{{ $page.post.title }}</h1>
      <h3 class="text-2xl">{{ $page.post.date }}</h3>
    </section>

    <section class="container mx-auto px-24">
      <div v-html="$page.post.content"></div>
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
    post: post (id: $id) {
        title
        date (format: "MMMM D, YYYY")
        content
    }
}
</page-query>
