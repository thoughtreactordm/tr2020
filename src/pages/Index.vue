<template>
  <Layout>
    <div class="container m-auto px-4 text-center">
      <h1 class="text-3xl sm:text-5xl text-orange-500 mb-4">Challenging, puzzle-infused games...</h1>
      <p
        class="sm:text-3xl md:text-2xl"
      >We are a teeny-tiny game developer focused on building challenging, puzzle-infused games. From classic puzzle games to immersive narrative-driven adventures, Thought Reactor builds games that engage players minds, sense of wonder, and reward those that seek more.</p>
    </div>

    <showcase />

    <div class="container m-auto px-4">
      <newsletter />
    </div>
  </Layout>
</template>

<script>
import Showcase from "@/components/partials/Showcase.vue";
import Newsletter from "@/components/partials/Newsletter.vue";

export default {
  components: { Showcase, Newsletter },

  metaInfo: {
    title: "Games that soothe ya' noggin'"
  }
};
</script>
