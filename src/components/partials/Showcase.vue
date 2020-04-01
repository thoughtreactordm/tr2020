<template>
  <section class="px-8 py-16 my-16 bg-gradient-tr-brand w-full">
    <div class="container m-auto px-4">
      <h2 class="text-white text-4xl text-center mb-2">Our Games</h2>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div
          v-for="game in games"
          :key="game.name"
          class="col-span-1 bg-white p-16 text-orange-700"
          :class="{ 'md:row-span-2': game.featured }"
        >{{ game.name }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "showcase",

  data() {
    return {
      games: [
        {
          name: "IGEO DX",
          url: "https://igeogame.com",
          description: "Lorem ipsum dolor sit amet...",
          thumbnail: "/image",
          featured: true
        },
        {
          name: "Parabola",
          url: "https://parabolagame.com",
          description: "Lorem ipsum dolor sit amet...",
          thumbnail: "/image",
          featured: false
        },
        {
          name: "Project Path",
          url: "https://pathgame.com",
          description: "Lorem ipsum dolor sit amet...",
          thumbnail: "/image",
          featured: false
        }
      ]
    };
  }
};
</script>