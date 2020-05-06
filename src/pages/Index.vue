<template>
  <Layout>
    <div class="container m-auto px-4 md:px-16 lg:px-32 lg:text-center">
      <h1
        class="text-3xl sm:text-5xl lg:text-5xl text-orange-500 mb-4 leading-none mt-8"
      >
        Challenging, puzzle-infused games...
      </h1>
      <p class="sm:text-3xl md:text-2xl">
        We're a teeny-tiny game developer focused on building challenging,
        puzzle-infused games. From arcade-style to immersive story-driven
        adventures, Thought Reactor builds games that engage players minds,
        sense of wonder, and reward those that seek more.
      </p>
    </div>

    <igeo-showcase />

    <div class="container m-auto lg:px-16 lg:my-32">
      <newsletter />
    </div>
  </Layout>
</template>

<script>
import IgeoShowcase from "@/components/partials/game-showcases/IgeoShowcase.vue";
import Newsletter from "@/components/partials/Newsletter.vue";

export default {
  components: { IgeoShowcase, Newsletter },

  metaInfo: {
    title: "Games that soothe ya' noggin'",
  },
};
</script>
