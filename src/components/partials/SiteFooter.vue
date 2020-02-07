<template>
  <footer class="bg-gradient-t-footer p-16 mt-8 text-center text-orange-600">
    <socials />

    <p class="font-bold">
      Thought Reactor&copy;{{ year }}, All Rights Reserved.
    </p>

    <div
      class="font-bold text-orange-700 mt-4 flex items-center justify-center"
    >
      <p>
        Built with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          fixed-width
        ></font-awesome-icon>
        using&nbsp;<a
          href="https://vuejs.org"
          class="hover:underline hover:text-orange-300"
          >Vue</a
        >,&nbsp;<a
          href="https://gridsome.org"
          class="hover:underline hover:text-orange-300"
          >Gridsome</a
        >, and&nbsp;<a
          href="https://tailwindcss.com"
          class="hover:underline hover:text-orange-300"
          >TailwindCSS</a
        >. Hosted on&nbsp;<a
          href="https://netflify.com"
          class="hover:underline hover:text-orange-300"
          >Netlify</a
        >.
      </p>
    </div>

    <div>
      <p class="text-orange-700 mt-2 text-sm">
        This site is open source and can be found on
        <a
          class="hover:underline hover:text-orange-300"
          href="https://github.com/thoughtreactordm/tr2020"
          >GitHub</a
        >.
      </p>
    </div>
  </footer>
</template>

<script>
import Socials from "@/components/partials/Socials.vue";

export default {
  name: "site-footer",

  components: { Socials },

  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>
