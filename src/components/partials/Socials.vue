<template>
  <div class="m-4 flex flex-wrap items-center justify-center">
    <a
      v-for="social in socials"
      :href="social.url"
      :title="social.label"
      :key="social.icon"
      class="social-icon p-2 hover:text-orange-400"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', social.icon]" :size="size"></font-awesome-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "socials",

  props: {
    size: {
      type: String,
      default: "lg"
    }
  },

  data() {
    return {
      socials: [
        {
          icon: "itch-io",
          label: "Thought Reactor at Itch.io",
          url: "https://thoughtreactor.itch.io"
        },
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
          icon: "discord",
          label: "Thought Reactor Discord Channel",
          url: "https://discord.gg/wXEPvew"
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
