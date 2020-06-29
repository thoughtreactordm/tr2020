<template>
  <section class="container mx-auto px-8 md:px-32">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1" v-for="game in validGames" :key="game.id">
        <div class="bg-grey-500 border-t-8 border-gradient-r-brand">
          <div>
            <img :src="game.cover_url" :alt="game.title" class="w-full h-32 object-cover" />
          </div>
          {{ game.title }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "itch-list",

  data() {
    return {
      games: [],
      apiKey: "69LJBC3tYm3f12020qUw5pB560cRQj4tRcy4f55M"
    };
  },

  computed: {
    validGames() {
      let published = this.games.filter(g => {
        return g.published && g.user.username === "thoughtreactor";
      });

      return published.sort((a, b) => b.views_count - a.views_count);
    },
    endpoint() {
      return "https://itch.io/api/1/" + this.apiKey + "/my-games";
    }
  },

  mounted() {
    axios.get(this.endpoint).then(results => {
      this.games = results.data.games;
    });
  }
};
</script>