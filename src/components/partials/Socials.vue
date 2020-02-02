<template>
  <div class="m-4 flex items-center justify-center">
    <a
      v-for="social in socials"
      :href="social.url"
      :title="social.label"
      :key="social.icon"
      class="social-icon p-2 hover:text-orange-400"
    >
      <feather :type="social.icon"></feather>
    </a>
  </div>
</template>

<script>
export default {
  name: "socials",

  data() {
    return {
      socials: [
        {
          icon: "twitter",
          label: "@thought_reactor on Twitter",
          url: "https://twitter.com/thought_reactor"
        },
        {
          icon: "instagram",
          label: "@thoughtreactor on Instagram",
          url: "https://instagram.com/thoughtreactor"
        },
        {
          icon: "twitch",
          label: "ThoughtReactorDEV on Twitch",
          url: "https://twitch.tv/thoughtreactordev"
        },
        {
          icon: "youtube",
          label: "Thought Reactor on YouTube",
          url: "https://youtube.com/TheThoughtReactor"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a.social-icon {
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.05) translateY(-2px);
  }
}
</style>
